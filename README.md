

# Pdf_Extractor

Pdf_Extractor is a web application designed to facilitate the extraction of specific pages from PDF documents stored in Wasabi Cloud Storage. It utilizes JSON Web Tokens (JWT) for encryption, enabling secure file uploads and downloads. Users can upload PDFs to Wasabi Cloud Storage and select specific pages to download as a separate PDF document.

## Features

- **Secure Uploads**: Pdf_Extractor uses JSON Web Tokens (JWT) for encryption, ensuring secure file uploads to Wasabi Cloud Storage.
- **Selective Page Extraction**: Users can select specific pages from uploaded PDFs to download as a separate PDF document.
- **Integration with Wasabi Cloud Storage**: Seamless integration with Wasabi Cloud Storage for storing and retrieving PDF documents.
- **User Authentication**: Secure user authentication system to access the application's features.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Storage**: Wasabi Cloud Storage
- **Encryption**: JSON Web Tokens (JWT)

## Usage

1. **Clone the Repository**: Clone the Pdf_Extractor repository to your local machine.

   ```bash
   git clone https://github.com/username/Pdf_Extractor_Frontend.git
   git clone https://github.com/username/Pdf_Extractor_Backend.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies for both the frontend and backend.

   ```bash
   cd Pdf_Extractor_Frontend
   npm install

   cd Pdf_Extractor_Frontend
   npm init -y
   ```

3. **Set Up Environment Variables**: Set up environment variables for the backend server. Create a `.env` file in the root directory and specify the following variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   WASABI_ACCESS_KEY=<your_wasabi_access_key>
   WASABI_SECRET_KEY=<your_wasabi_secret_key>
   WASABI_BUCKET=<your_wasabi_bucket>
   ```

4. **Run the Application**: Start both the frontend and backend servers.

   ```bash
   # In the Pdf_Extractor_Frontend and Pdf_Extractor_Frontend directory
   npm run dev

   ```

5. **Live Link** : https://65ea2cfa8cb096709279e3ac--candid-concha-f6c7e3.netlify.app/home

6. **Register Page**:
   <img width="960" alt="Screenshot 2024-03-08 025053" src="https://github.com/MVKarthikReddy/Pdf_Extractor_Backend/assets/101353332/94256170-2513-4d9d-a067-06fde95f4301">
7.**Login Page**:
   <img width="960" alt="Screenshot 2024-03-08 025034" src="https://github.com/MVKarthikReddy/Pdf_Extractor_Backend/assets/101353332/2cbb3673-f39c-4b4d-a141-1ac25f771793">
   **Home Page**:
<img width="960" alt="Screenshot 2024-03-08 025130" src="https://github.com/MVKarthikReddy/Pdf_Extractor_Backend/assets/101353332/879be99b-7d10-4fb6-bcc9-9376f4a3e8a3">
<img width="960" alt="Screenshot 2024-03-08 025148" src="https://github.com/MVKarthikReddy/Pdf_Extractor_Backend/assets/101353332/560447a7-69fa-4eef-b801-77718b31a913">
<img width="960" alt="Screenshot 2024-03-08 025213" src="https://github.com/MVKarthikReddy/Pdf_Extractor_Backend/assets/101353332/bd6c525c-160e-4b78-8fd2-06b0c2a57fa8">
<img width="960" alt="Screenshot 2024-03-08 025234" src="https://github.com/MVKarthikReddy/Pdf_Extractor_Backend/assets/101353332/6959c5a7-b281-4e3e-a643-7effe5b80f60">
