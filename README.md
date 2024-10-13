# LinkUni - File Sharing Application

LinkUni is a simple and efficient file sharing application that allows users to upload files to Amazon S3 and share them via unique links. This README provides an overview of the project, its features, and instructions for setting it up.

## Features

- File upload to Amazon S3
- Automatic file deletion after 15 days
- Secure file sharing via unique links
- Support for various file types (jpeg, jpg, png, webp, gif, pdf, doc, docx, xls, xlsx, svg, ppt, pptx)
- File size limit of 5MB

## Technologies Used

- Frontend: React.js
- Backend: Node.js with Express.js
- Database: MongoDB
- File Storage: Amazon S3

## Setup Instructions

1. Clone the repository
2. Install dependencies for both frontend and backend
3. Set up environment variables:
   - Create a `.env` file in the server directory
   - Add the following variables:
      - S3_SECRET_ACCESS_KEY=
      - S3_ACCESS_KEY_ID=
      - AWS_REGION=
      - MONGO_URI=
