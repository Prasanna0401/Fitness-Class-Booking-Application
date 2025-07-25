# IMPORTANT NOTE:

### **1. For making payment kindly use the below test account, as the paypal account used is a test sandbox account. Other Indian accounts might not work.**

**Email:** ``` sb-4ubk4744916964@personal.example.com ```

**Password:** ``` *JI;#z2W ```

### 2. If you did not receive any mails regarding signup,class booking, class cancelling, class rescheduling then please make sure to check for the mail in your spam collection.

### 3. Due to the use of a free-tier Render account, the backend server may enter an inactive state during periods of low activity. This may introduce a delay in response time, as Render notes: "Your free instance will spin down with inactivity, which can delay requests by 50 seconds or more." Kindly allow a brief waiting period, and a refresh may be required to ensure the server response is received. 


# Project Overview

FitPro is designed to provide a seamless experience for both fitness enthusiasts and trainers. Users can browse, book, and track fitness classes, while trainers can create and manage personalized fitness programs. FitPro also features a review system, payment gateway integration, and real-time notifications.

## Table of Contents

1. [Project Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation and Setup](#installation-and-setup)
4. [Project Structure](#project-structure)
5. [Environment Variables](#environment-variables)
6. [Database Models](#database-models)
7. [Controller and API Explanations](#controller-api)
8. [Postman Documentation](#postman-documentation)


    
## 1.Project Features

#### (i)**Authentication Features**
   - **User Registration and Login**: Allows users to sign up and securely log in to their accounts.
   - **Forgot Password**: Sends a password reset link to the user’s email to enable easy recovery.
   - **Email Recovery**: Users can reset their passwords via a secure email link.
   - **Profile Management**: Allows users to update their profile information, including changing their profile picture.

#### (ii)**User Features**
   - **Class Browsing and Search**:
     - Search and filter classes based on categories such as class type, time, and trainer.
     - Search and filter trainers based on specialization, ratings, or availability.
   - **Class Booking**:
     - Users can book classes with trainers based on availability.
     - Option to cancel bookings if necessary, with relevant cancellation policies.
   - **Payments**:
     - Integration with PayPal for secure class booking payments.
   - **Ratings and Reviews**:
     - Users can leave reviews and ratings for classes, helping others make informed decisions.
   - **Notifications**:
     - Receive email notifications for class confirmations, cancellations, and reminders.
   - **Feedback**:
     - Users can leave feedback on classes to share their experience.
   - **Profile Customization**:
     - Update profile details such as profile picture and personal information.
   - **Booking Management**:
     - Option to view and manage booked classes with the ability to cancel.

#### (iii)**Trainer Features**
   - **Trainer Registration**:
     - Trainers can create accounts to join the platform and list their services.
   - **Class Creation and Management**:
     - Trainers can create new classes, including uploading relevant photos.
     - Ability to reschedule or cancel classes, with an automatic refund initiation upon class cancellation.
   - **Earnings Tracking**:
     - Track earnings per class and view financial summaries.
   - **Profile Management**:
     - Create a detailed profile, including uploading profile and class images.
     - Update specialization, experience, bio, and certifications.
   - **Class Rescheduling and Cancellation**:
     - Trainers can reschedule classes or cancel them if necessary, with appropriate notifications sent to booked users.

#### (iv)**Additional Features**
   - **Real-Time Notifications**:
     - Email notifications for reminders, confirmations, and cancellations.
   - **Responsive Design**:
     - Optimized for desktop and mobile for a seamless user experience.
   - **Search and Filter Options**:
     - Comprehensive filters for users to find suitable trainers and classes based on preferences.



## 2.Tech Stack

### **Frontend**
- **React**: A JavaScript library for building user interfaces.
  - **Dependencies**:
    - `react-dom`: Provides DOM-specific methods for React.
    - `react-hot-toast`: For displaying notifications.
    - `react-icons`: For using icon sets in the React application.
    - `react-router-dom`: Enables navigation and routing within the React app.

- **UI Framework**:
  - **TailwindCSS**: Utility-first CSS framework for custom designs.
    - **Dependencies**:
      - `@material-tailwind/react`: Provides Material Design components.
      - `@tailwindcss/forms`: A plugin to style form elements.

- **Data Fetching**:
  - **Axios**: For making HTTP requests to the backend.



### **Backend**
- **Node.js**: A JavaScript runtime for building server-side applications.
  - **Express.js**: Web framework for Node.js to create RESTful APIs.

- **Database**:
  - **MongoDB**: NoSQL database for storing application data.
    - **Dependencies**:
      - `mongoose`: ODM (Object Data Modeling) library for MongoDB and Node.js.

- **Authentication & Security**:
  - **JWT** `jsonwebtoken`: For secure token-based authentication.
  - **bcryptjs**: For hashing passwords before storing them securely.

- **Environment Management**:
  - **dotenv**: For loading environment variables from a `.env` file.

- **Payment Integration**:
  - **PayPal SDK** `paypal-rest-sdk`: For integrating PayPal payment processing.
  - **Optional**: Stripe or Razorpay can be used as alternative payment gateways.

- **Email Service**:
  - **Nodemailer**: For sending transactional emails.

- **File Handling**:
  - **Multer**: For handling file and image uploads.



### **Utilities**
- **UUID** `uuid`: For generating unique IDs.



### **Development Tools**
- **Nodemon** : For automatically restarting the server during development.
- **Crypto** : For cryptographic functions (optional and could be native to Node.js).



### **Deployment**
- **Frontend**: Deployed on **Netlify**
- **Backend**: Hosted on **Render**, providing backend support with a robust environment.

 

## 3. Installation and Setup

### Prerequisites
- **Node.js**: v16 or later
- **MongoDB**: Cloud or local instance
- **NPM**: Package manager for Node.js

### Clone the Repository
```bash
git clone https://github.com/Prasanna0401/Fitness-Class-Booking-Application.git
```

### Install Dependencies
For both `frontend` and `backend`:
```bash
cd frontend
npm install
cd ../backend
npm install
```

### Environment Variables

Create `.env` files in both `frontend` and `backend` directories as per the [Environment Variables](#environment-variables) section.

### Run the Application
- **Frontend**: `npm start` in the `frontend` directory.
- **Backend**: `npm start` in the `backend` directory.



## 4. Project Structure

The basic structure of the `fitpro` repository is organized as follows:

```
backend/
├── controllers/             # Logic for API endpoints (auth, users, trainers, admin)
├── middlewares/             # Middleware functions for auth, validation, etc.
├── models/                  # Mongoose schemas for database collections
├── routes/                  # Express routes for API endpoints
├── service/                 # Interactions with external APIs, such as sending emails
├── utils/                   # Utility functions (helpers, validations)
├── .env                     # Environment variables
├── index.js                 # Main server file
└── package.json             # Backend dependencies
```

```
frontend/
├── src/
│   ├── assets/                  # Images and other assets
│   ├── components/              # Reusable UI components (NavBar, ClassCard, etc.)
│   ├── pages/                   # React pages (Home, Profile, ClassList)
│   ├── hooks/                   # Custom React hooks
│   ├── routes/                  # Page Routing
│   ├── utils/                   # Helper functions (API calls, date formatting)
│   ├── App.jsx                  # Main component rendering the application
│   └── main.jsx                 # Entry point of the React app
└── .env                         # Frontend environment variables

```



## 5. Environment Variables

### Backend `.env`:
- `DB_URL`: MongoDB connection string
- `DB_NAME`: MongoDB database name
- `EMAIL_USER`: SMTP user for sending emails
- `EMAIL_PASS`: SMTP password for sending emails
- `PAYPAL_CLIENT_ID`: Paypal client id
- `PAYPAL_CLIENT_SECRET`: Paypal client secret key
- `SALT`: Salt rounds to increase security
- `JWT_SECRET`: Secret key for JWT
- `JWT_EXPIRY`: JWT expire for token
- `PORT`: Port number

### Frontend `.env`:
- `REACT_APP_API_URL`: URL for the backend API


## 6.Database Models

The project utilizes **MongoDB** for data storage, with Mongoose being used for defining and interacting with various database models. Below are the key models used in the application:

### 1. **User Model**

- **Purpose**: Stores information about users, including their name, email, mobile number, preferences, and goals.
- **Fields**:
  - `name`: The name of the user.
  - `id`: A unique identifier for the user (generated automatically).
  - `email`: The user's email address (validated).
  - `profilepic`: The URL to the user's profile picture.
  - `password`: The user's hashed password.
  - `role`: The role of the user (either `user`, `trainer`, or `admin`).
  - `mobile`: The user's mobile number (validated).
  - `preferences`: A list of fitness preferences (e.g., "yoga", "strength").
  - `goals`: A list of fitness goals (e.g., "weight loss", "muscle gain").
  - `availability`: The times when the user is available (morning, afternoon, evening).
  - `bookings`: A reference to the bookings associated with the user.

### 2. **Trainer Model**

- **Purpose**: Stores information about trainers, including their bio, specializations, and rating.
- **Fields**:
  - `userId`: A reference to the user associated with the trainer.
  - `trainerName`: The name of the trainer.
  - `trainerEmail`: The trainer's email address.
  - `specializations`: A list of specializations the trainer holds (e.g., yoga, strength).
  - `bio`: A short biography of the trainer.
  - `experience`: The number of years of experience the trainer has.
  - `certifications`: A list of certifications the trainer holds.
  - `profilePictureUrl`: The URL of the trainer’s profile picture.
  - `rating`: An object containing `averageRating` and `totalReviews` to track user reviews.
  - `availability`: An array defining the trainer's availability (with days and time slots).
  - `totalEarnings`: Total earnings from the trainer’s classes.
  - `canceledUserIds`: An array of user IDs who have canceled their sessions with the trainer.

### 3. **Class Model**

- **Purpose**: Represents fitness classes offered by trainers.
- **Fields**:
  - `trainerId`: A reference to the trainer conducting the class.
  - `classId`: A unique identifier for the class (generated automatically).
  - `classType`: The type of class (e.g., yoga, strength).
  - `className`: The name of the class.
  - `duration`: The duration of the class in minutes.
  - `timeSlot`: An object containing the day, start time, and end time for the class.
  - `classPic`: The URL to the class's image.
  - `capacity`: The maximum number of attendees for the class.
  - `price`: The price of the class.
  - `bookedCount`: The number of bookings for the class.
  - `classLink`: A URL link to the class.
  - `attendees`: A list of user IDs who have booked the class.
  - `status`: The current status of the class (e.g., `available`, `canceled`, `completed`).

### 4. **Booking Model**

- **Purpose**: Stores details about class bookings by users.
- **Fields**:
  - `userId`: A reference to the user making the booking.
  - `classId`: A reference to the class being booked.
  - `bookingStatus`: The status of the booking (e.g., `confirmed`, `canceled`).
  - `paymentStatus`: The payment status (e.g., `paid`, `unpaid`).
  - `refundStatus`: The refund status (e.g., `none`, `requested`).
  - `cancellationReason`: The reason for class cancellation (if applicable).
  - `bookingDate`: The date the booking was made.
  - `classDate`: The date of the class.
  - `classStatus`: The status of the class (e.g., `upcoming`, `completed`, `canceled`).

### 5. **Payment Model**

- **Purpose**: Stores information about payments for bookings.
- **Fields**:
  - `userId`: A reference to the user making the payment.
  - `bookingId`: A reference to the booking for which the payment was made.
  - `amount`: The amount paid.
  - `paymentMethod`: The payment method used (e.g., card, wallet).
  - `paymentStatus`: The status of the payment (e.g., `success`, `failed`).
  - `transactionId`: The unique transaction ID (e.g., from Razorpay).
  - `orderId`: The order ID associated with the payment.

### 6. **Review Model**

- **Purpose**: Stores reviews and ratings for trainers and classes.
- **Fields**:
  - `userId`: A reference to the user leaving the review.
  - `trainerId`: A reference to the trainer being reviewed.
  - `classId`: A reference to the class being reviewed.
  - `rating`: The rating given to the class or trainer.
  - `reviewText`: The text content of the review.

### 7. **MongoDB Connection**

- **Purpose**: Establishes the connection to the MongoDB database.
- **Code**: The connection is established via Mongoose, ensuring that the application communicates with the correct MongoDB instance.

### Database Schema Design

The application uses a **relational** approach to link data between collections. Some key relationships include:
- **Users** can book **Classes**.
- **Trainers** offer **Classes** and receive **Reviews**.
- **Bookings** are linked to **Payments**.
- **Reviews** are provided by **Users** for **Trainers** and **Classes**.

Each of the models is designed to support the primary functionality of the application, such as user management, class scheduling, bookings, payments, and reviews.


## 7.Controller and API Explanations

### Auth Controller

The User Controller handles user authentication and account management, including registration, login, and password management. The key operations are as follows:

1. **Create User**  
   - Checks if a user with the provided email already exists.  
   - Hashes the password before saving the user to the database.  
   - Sends a welcome email to the user upon successful registration.

2. **Login**  
   - Validates user credentials (email and password).  
   - Compares the entered password with the stored hashed password.  
   - Generates a JWT token for successful login and sets it in a secure HTTP-only cookie for subsequent requests.

3. **Forgot Password**  
   - Allows users to request a password reset by generating a unique reset token.  
   - Stores the reset token and expiry date in the database.  
   - Sends a password reset email with a link that includes the reset token.

4. **Reset Password**  
   - Validates the reset token and checks if it has expired.  
   - Hashes the new password and saves it to the database.  
   - Clears the reset token and expiry after the password is successfully reset.


### Payment Controller

The **Payment Controller** manages PayPal payment processing and booking creation. The key operations are:

1. **Create Payment**  
   - Initiates a payment request via PayPal's API for a specific class booking.  
   - Prepares a payment JSON object containing transaction details (amount, currency, description).  
   - Redirects the user to PayPal for payment approval.  
   - Returns the approval URL to the frontend for further processing.

2. **Payment and Booking Success**  
   - Handles the successful execution of a PayPal payment after the user is redirected back from PayPal.  
   - Verifies that the class is available and not already booked by the user.  
   - Checks if the class has reached its capacity.  
   - Creates a booking entry in the **Booking** model with the user, class, and payment details.  
   - Updates the **Class** and **User** models with booking information.  
   - Records the payment in the **Payment** model.  
   - Sends a booking confirmation email to the user with class details.

### Trainer Controller

1. **`createTrainerProfile`**
   - **Purpose:** Creates or updates a trainer's profile.
   - **Steps:**
     - Takes `userId`, `specializations`, `bio`, `experience`, `certifications`, and `profilePictureUrl` from the request body.
     - Checks if `userId` exists; if not, responds with a 400 error.
     - Uses `findOneAndUpdate` to either update the existing trainer's profile or create a new one using the `userId` as a reference.
     - Returns a success message along with the trainer data.

2. **`createClass`**
   - **Purpose:** Creates a new class associated with a trainer.
   - **Steps:**
     - Takes the class details from the request body.
     - Assumes the trainer's `userId` is available via `req.user.id`.
     - Creates a new class document in the database.
     - Responds with a success message and the newly created class.

3. **`editClass`**
   - **Purpose:** Edits an existing class and sends notifications.
   - **Steps:**
     - Uses `classId` from the URL parameters to find and update the class details.
     - Sends an email notification to attendees about the class update (including class name, date, time, etc.).
     - If the class is not found, responds with a 404 error.
     - Returns the updated class details.

4. **`viewBookedUsers`**
   - **Purpose:** Retrieves a list of users who have booked a specific class.
   - **Steps:**
     - Takes `classId` from the URL parameters.
     - Finds all bookings for that class using `Booking.find`.
     - For each booking, fetches the associated user details (`userId`).
     - Returns a list of users with booking and payment status.

5. **`cancelClass`**
   - **Purpose:** Cancels a class and processes refunds for users who booked it.
   - **Steps:**
     - Uses `classId` from the URL to find and update the class status to "canceled".
     - Finds all bookings related to the canceled class.
     - Updates the booking status and refund status to "canceled" and "processed".
     - Sends a cancellation and refund notification email to each affected user.

6. **`viewPostedClasses`**
   - **Purpose:** Retrieves all classes posted by the currently logged-in trainer.
   - **Steps:**
     - Extracts `trainerId` from the logged-in user's token (`req.user.id`).
     - Finds all classes associated with this trainer.
     - If no classes are found, responds with a 404 error.
     - Returns a list of classes posted by the trainer.

7. **`filterClasses`**
   - **Purpose:** Filters classes based on query parameters (category, date, time, price).
   - **Steps:**
     - Extracts filter criteria (`category`, `date`, `startTime`, `endTime`, `priceRange`) from the query parameters.
     - Builds a filter object for the database query based on the given parameters.
     - Returns the classes that match the filter criteria.
     - If no classes are found, responds with a 404 error.

8. **`searchClassesByName`**
   - **Purpose:** Searches for classes by their name.
   - **Steps:**
     - Extracts the `name` parameter from the query.
     - Searches for classes where the class name matches the query using a case-insensitive regex.
     - Returns the classes that match the search.
     - If no classes are found, responds with a 404 error.

9. **`viewReviewsByClassId`**
   - **Purpose:** Retrieves reviews for a specific class.
   - **Steps:**
     - Extracts `classId` from the URL parameters.
     - Finds all reviews associated with the given `classId`.
     - If no reviews are found, responds with a 404 error.
     - Returns a list of reviews for the class.

10. **`viewClassById`**
   - **Purpose:** Retrieves detailed information about a specific class.
   - **Steps:**
     - Extracts `classId` from the URL parameters.
     - Finds the class by `classId`.
     - If the class is not found, responds with a 404 error.
     - Returns the class details.

### User Controller

1. **`getUserInfoById`**
   - **Purpose**: Fetch the user's information based on the user ID from the JWT token.
   - **Steps**:
     - Retrieve the user ID from the request token (`req.user.id`).
     - Query the `User` model to fetch the user by their ID.
     - If the user is found, return the user object as JSON.
     - If the user is not found, return a 404 error with a "User not found" message.
   - **Error Handling**: Catch and log any errors, returning a 400 response with the error message.

2. **`editUserProfile`**
   - **Purpose**: Update the user's profile with the provided data.
   - **Steps**:
     - Extract user ID from `req.user`.
     - Use `User.findOneAndUpdate` to update the user's profile based on their ID and the data in `req.body`.
     - If the user is not found, return a 404 error.
     - If the user is found and updated, return a success message with the updated user data.
   - **Error Handling**: Catch and return any errors with a 400 response.

3. **`deleteUserAccount`**
   - **Purpose**: Delete the user's account.
   - **Steps**:
     - Use `User.findOneAndDelete` to remove the user by their ID from `req.user.id`.
     - If successful, return a success message.
   - **Error Handling**: Catch and return any errors with a 400 response.

4. **`viewAllClasses`**
   - **Purpose**: Fetch all classes that are currently available.
   - **Steps**:
     - Query the `Class` model for classes with a status of "available".
     - If no classes are found, return a 404 error.
     - If classes are found, return them as a JSON response.
   - **Error Handling**: Catch and return any errors with a 500 response.

5. **`bookClass`**
   - **Purpose**: Book a class for the user.
   - **Steps**:
     - Retrieve the `classId` from the request parameters.
     - Find the class using the `classId` and check if it is available.
     - Check if the user has already booked the class.
     - If the class has no capacity or the user is already booked, return a 400 error.
     - Create a new booking and update the class and user documents.
     - Send a booking confirmation email to the user.
     - Return a success message with the booking details.
   - **Error Handling**: Catch and return any errors with a 400 response.

6. **`viewBookedClasses`**
   - **Purpose**: View all classes booked by the user, including upcoming, historical, and recommended classes.
   - **Steps**:
     - Extract the user ID from the request.
     - Fetch all bookings for the user.
     - For each booking, retrieve the corresponding class details and build a list of booked classes.
     - Separate the classes into upcoming and historical.
     - Find recommended classes based on the user's preferences and goals, excluding the ones already booked.
     - Return a JSON response containing upcoming, history, and recommended classes.
   - **Error Handling**: Catch and return any errors with a 400 response.

7. **`cancelBooking`**
   - **Purpose**: Cancel a user's booking and process a refund if applicable.
   - **Steps**:
     - Retrieve the `classId` and `userId` from the request.
     - Find the booking based on the `classId` and `userId`.
     - Check if the booking exists and whether it's within the cancellation window (4 hours before class).
     - If valid, cancel the booking, process a refund, and update the class and user documents.
     - Send a cancellation email to the user.
     - Return a success message indicating the cancellation and refund.
   - **Error Handling**: Catch and return any errors with a 400 response.

8. **`searchClassesByName`**
   - **Purpose**: Search for classes by name or type.
   - **Steps**:
     - Extract the search term from the query string.
     - Use a case-insensitive regular expression to search for classes by name or class type.
     - If no classes match the search term, return a 404 error.
     - If matching classes are found, return them as a JSON response.
   - **Error Handling**: Catch and return any errors with a 500 response.

9. **`filterClasses`**
   - **Purpose**: Filter classes based on various criteria like date, time range, and price.
   - **Steps**:
     - Extract filter parameters (date, start time, end time, price range) from the query string.
     - Build a dynamic filter object based on the provided parameters.
     - Use the filter object to query the `Class` model and find matching classes.
     - If no classes match the filters, return a 404 error.
     - If matching classes are found, return them as a JSON response.
   - **Error Handling**: Catch and return any errors with a 500 response.

10. **`submitFeedback`**
   - **Purpose**: Submit feedback for a class with a rating and review.
   - **Steps**:
     - Retrieve the `classId` and feedback data (rating and review text) from the request.
     - Find the class and its associated trainer.
     - Create a new review document and associate it with the class and trainer.
     - Update the trainer's average rating based on the new review.
     - Return a success message with the review data.
   - **Error Handling**: Catch and return any errors with a 400 response.

11. **`viewAllTrainers`**
   - **Purpose**: View all trainers and their associated user details.
   - **Steps**:
     - Query the `Trainer` model and populate the `userId` field with the corresponding user details.
     - Return a JSON response containing all trainers and their associated user details.
   - **Error Handling**: Catch and return any errors with a 400 response.

12. **`viewTrainerById`**
   - **Purpose**: View a specific trainer's details by their `userId`.
   - **Steps**:
     - Use `req.params.userId` to find the trainer and populate the user details associated with the trainer.
     - Return the trainer's details as a JSON response.
   - **Error Handling**: Catch and return any errors with a 400 response.


## 8.Postman Documentation

[Postman Documentation link](https://documenter.getpostman.com/view/39260343/2sB34mjeBB)

Press the above link to view the API documentation.
