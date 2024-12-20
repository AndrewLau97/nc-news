# NC News

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)

---

## Overview

NC News App - https://andrew-l-nc-news.netlify.app/

NC News App is a front-end web application that interacts with the my backend server - My-NC-News, and is made to devlier dynamic content and functionality to users. This app uses Netlify to host and a range of different libaries and frameworks to design the UI to ensure a seamless and responsive user experience.
This application connects to - https://my-nc-news-js63.onrender.com/api to fetch and display data, as well as manage user interactions with the database.
The repo for the backend server - https://github.com/AndrewLau97/my-nc-news

---

## Features

- **Dynamic Content**: To be able to fetch and display data in real-time using API calls to the backend.
- **Responsive Design**: Design is able to be resized to be able to adapt to different screen sizes, such as mobiles or tablets.
- **State Management**: Efficient management of the applications state, setting the state at the lowest possible component while still being high enough to be utilised
- **Error Handling**: Contains error handling to provide user-friendly error messages dependant on what issue is currently happening

---

## Setup and Installation

### Prerequisites
- Node.js >= v22.9.0
- npm

### Installation Steps
1. **Clone the Repo**:
    ```bash
   git clone https://github.com/AndrewLau97/nc-news.git
   cd nc-news
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```

---

## Running the Application
### Development Mode
Run the application in development mode:
```bash
npm run dev
```

This app will be hosted on your localhost

---

## API Integration
The frontend communicates with the backend

### Example API Endpoints
| Method | Endpoint                                | Description                         |
|--------|-----------------------------------------|-------------------------------------|
| GET    | `/articles`                             | Fetch articles                      |
| DELETE | `/comments/comment_id`                  | Fetch articles data by ID           |
| POST   | `/articles/article_id/comments`         | Post article on article date by ID  |

---

## Project Structure
```
nc-news/
|-- public/               # Static assets
|-- src/
|   |-- components/       # Reusable UI components
|   |-- context/          # Global state management
|   |-- api.js/           # API calls and backend interaction
|   |-- utils.js/         # Utility functions
|   |-- wireframes/       # wireframe layout plan for the front-end ui design and paths
|   |-- App.jsx           # Main app component
|   |-- main.jsx          # Entry point
|-- package.json          # Dependencies and scripts
|-- README.md             # Project documentation
```

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)