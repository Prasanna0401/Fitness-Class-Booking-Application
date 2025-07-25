import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/horizontallogo.png";
import api from "../../service/ApiService";
import ApiRoutes from "../../utils/ApiRoutes";
import useLogout from "../../hooks/useLogut";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(""); // State for profile picture
  const role = sessionStorage.getItem("role");
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const logout = useLogout();
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = sessionStorage.getItem("id");
        const path = ApiRoutes.GET_USER_INFO_BY_ID.path.replace(
          ":userId",
          userId
        );
        const authenticate = ApiRoutes.GET_USER_INFO_BY_ID.authenticate;
        const response = await api.get(path, { authenticate });
        // console.log(response.user.profilepic);
        setProfilePic(response.user.profilepic); // Update profile pic state
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const options = [
    { value: "HOME", path: "/home", role: ["trainer", "user"] },
    { value: "CLASSES", path: "/user/classes", role: ["user"] },
    { value: "CLASS", path: "/trainer/class", role: ["trainer"] },
    { value: "TRAINERS", path: "/user/trainers", role: ["user"] },
    { value: "ABOUT", path: "/about", role: ["user", "trainer"] },
    { value: "SERVICES", path: "/services", role: ["user", "trainer"] },
    { value: "USER MANAGEMENT", path: "/admin/users", role: ["admin"] },
    { value: "TRAINER MANAGEMENT", path: "/admin/trainers", role: ["admin"] },
    { value: "CLASS MANAGEMENT", path: "/admin/classes", role: ["admin"] },
  ];

  const filteredOptions = options.filter((option) =>
    option.role.includes(role)
  );

  return (
    <header className='absolute inset-x-0 top-0 z-50 pt-3'>
      <div className='mx-auto sm:px-8 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex-1 md:flex md:items-center md:gap-12 px-3'>
            <Link to='/' className='block text-teal-600'>
              <img
                className='h-28 w-auto'
                src={logo}
                alt='Logo'
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>

          <div className='md:flex md:items-center md:gap-12'>
            <nav aria-label='Global' className='hidden md:block'>
              <ul className='flex items-center gap-6 text-sm'>
                {filteredOptions.map((option) => (
                  <li key={option.path} className='hover:text-orange-600'>
                    <Link
                      to={option.path}
                      className='text-white transition hover:text-orange-600 active:text-orange-600 font-medium no-underline'
                    >
                      {option.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Profile Button and Dropdown */}
            <div className='relative hidden md:block'>
              <button
                type='button'
                className='overflow-hidden rounded-full border border-gray-300 shadow-inner'
                onClick={toggleDropdown}
              >
                <span className='sr-only'>Toggle dashboard menu</span>
                <img
                  src={
                    profilePic ||
                    "https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
                  }
                  alt='Profile'
                  className='h-10 w-10 object-cover'
                />
              </button>

              {isDropdownOpen && (
                <div
                  className='absolute right-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg'
                  role='menu'
                >
                  <div className='p-2'>
                    <Link
                      to='/profile'
                      className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                      role='menuitem'
                    >
                      My profile
                    </Link>
                  </div>

                  <div className='p-2'>
                    <button
                      onClick={logout}
                      className='flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50'
                      role='menuitem'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 0 1 0 12h-3'
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger Menu for Mobile */}
            {/* Hamburger Menu and Profile Icon for Mobile */}
            <div className='block md:hidden pr-3 flex items-center'>
              <button
                className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'
                onClick={toggleMobileMenu}
                style={{ fontSize: "1.5rem" }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>

              {/* Profile icon for mobile, with separate margin */}
              <button
                type='button'
                className='ml-3 overflow-hidden rounded-full border border-gray-300 shadow-inner'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={
                    profilePic ||
                    "https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
                  }
                  alt='Profile'
                  className='h-10 w-10 object-cover'
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className='md:hidden bg-white shadow-lg p-4'>
          <ul className='flex flex-col gap-4'>
            {filteredOptions.map((option) => (
              <li key={option.path}>
                <Link
                  to={option.path}
                  className='text-gray-900 font-medium hover:text-orange-600'
                >
                  {option.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Mobile Profile Dropdown */}
      {isDropdownOpen && (
        <div className='md:hidden absolute right-3 top-16 z-10 w-48 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg'>
          <div className='p-2'>
            <Link
              to='/profile'
              className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              role='menuitem'
            >
              My profile
            </Link>
          </div>
          <div className='p-2'>
            <button
              onClick={logout}
              className='flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50'
              role='menuitem'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 0 1 0 12h-3'
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;