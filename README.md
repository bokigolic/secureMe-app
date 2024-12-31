# SecureMe - Password Manager Web Application

[Live Demo](https://secured.bojangolic.com/)

## Overview

SecureMe is a secure, responsive web application designed to store and manage passwords, personal information, and sensitive data. It is built using React and incorporates modern web development best practices, including progressive web app (PWA) support, offline functionality, service workers, and a clean, user-friendly design.

This application was built to help users safely store their passwords and personal information in a convenient, encrypted platform, accessible both online and offline.

## Features

- **Password Management**: Store, search, filter, and manage your passwords with ease. Each entry can have a site, password, and category, with options to delete or edit.
- **Add Personal Information**: Add personal details, such as contact information, and store them securely.
- **Image Upload**: Users can upload images for each entry to enhance personal or business records.
- **Progressive Web App (PWA)**: The app is fully functional offline and can be installed on any device for easy access.
- **Service Worker**: The app uses a service worker to cache content, making it available offline and improving performance.
- **Responsive Design**: Optimized for mobile devices, with a fully responsive layout.
- **QR Code Generation**: Generate QR codes for passwords, which can be scanned and quickly accessed on mobile devices.
- **Authentication**: Secure login system with optional PIN verification for extra protection.

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - Workbox for Service Workers
  - CSS3, Flexbox, and CSS Animations
  - PWA Capabilities
- **Backend**:
  - Local Storage (For saving passwords and personal info)
- **Tools & Libraries**:
  - Webpack for bundling and building
  - Babel for JavaScript transpiling
  - Service Workers for offline access and caching
  - Workbox for advanced caching and service worker management
  - QRCode.js for QR code generation

## Deployment

This app has been deployed using HostGator. The build folder can be uploaded to any server or hosted service.

1. Build the application for production:
   ```bash
   npm run build
   ```
2. Deploy the contents of the build/ folder to your preferred hosting provider.

## File Structure

• public/: Static files like icons, manifest, etc.
• src/: All the React components, utilities, and assets.
• src/service-worker.js: Service worker file for caching and offline functionality.
• webpack.config.js: Configuration for Webpack, used to bundle the app.
• package.json: Project configuration file including dependencies and scripts.

### Known Issues

• QR Code Size: The QR code generation might have a limitation in size if a long password or data is used.
• PWA Installation: Some mobile browsers might require the app to be installed directly through their respective browser settings.
Contributing
We welcome contributions to make this project even better. If you would like to contribute, please fork the repository and submit a pull request.
Steps to Contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a new Pull Request.
   Contact
   For more information or questions, feel free to reach out to me directly at:
   • Email: golichbojan@gmail.com
   • Website: Bojan Golic
   License
   This project is licensed under the MIT License - see the LICENSE file for details.
