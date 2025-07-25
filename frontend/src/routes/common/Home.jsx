import Hero from "../../components/common/Hero";
import NavBar from "../../components/common/NavBar";
import FeaturesSection from "../../components/common/FeaturesSection";
import BookCta from "../../components/common/BookCta";
import Footer from "../../components/common/Footer";
import Gallery from "../../components/common/Gallery";
import ContactInfo from "../../components/common/ContactInfo";

function Home() {
  return (
    <div className='relative bg-black'>
      <NavBar />
      <Hero />
      <FeaturesSection />
      <Gallery />
      <BookCta />
      <div className='pt-20'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;