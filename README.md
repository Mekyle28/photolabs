# PhotoLabs

PhotoLabs is a React-based single-page application (SPA) designed to provide users with a visually engaging experience for exploring and interacting with a curated collection of photos. 

## Features

- **Browse Photos:** Users can explore a diverse range of photos fetched dynamically from an external API.
- **Category Navigation:** Navigate through different photo categories (topics) to discover related images.
- **Detailed Photo View:** Click on any photo to view a larger version along with relevant details and related/similar photos.
- **Like Photos:** Users can like their favorite photos directly from the application interface.
- **Favorites Indicator:** A heart icon in the navigation bar displays a notification if there are liked photos.
- **Responsive Design:** Ensures a consistent and user-friendly experience across desktop and mobile devices.

## Technical Specifications

- **React:** Built using Create React App, ensuring a modern and efficient development environment.
- **Webpack:** Bundles JavaScript files for optimal performance in the browser.
- **Babel:** Transpiles modern JavaScript (ES6+) into compatible versions for broader browser support.
- **Express:** Provides the backend framework for handling API requests and business logic.
- **PostgreSQL:** Database used for storing and managing photo metadata.

## Images 
!["Main Page View"](https://github.com/Mekyle28/photolabs/blob/main/frontend/doc/photoLab-main-page.png%20.png?raw=true)


!["Modal View with Similar Photos"](https://github.com/Mekyle28/photolabs/blob/main/frontend/doc/photoLabs-modal.png?raw=true)

# Getting Started

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
