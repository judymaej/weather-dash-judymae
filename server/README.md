# Weather Dashboard

A weather dashboard application that allows users to get real-time weather information using the OpenWeather API. The application is designed to display weather data for various cities, along with a history of weather searches.

## Features

- **Client-Side**:

  - Displays real-time weather information for a given city.
  - Shows weather history based on previous searches.
  - Built using **Vite** and **TypeScript** for frontend development.

- **Server-Side**:
  - Handles API calls to OpenWeather and stores weather search history.
  - Built with **Express.js** and **Node.js** on the server.

## External Resources Used

### OpenWeather API

- **Resource**: [OpenWeather API](https://openweathermap.org/api)
- **Purpose**: Provides weather data (current weather, historical data, etc.).
- **File Used**: The server-side routes in `server/src/routes/api/weatherRoutes.ts` make calls to this API to fetch weather data based on user input.

### Vite

- **Resource**: [Vite](https://vitejs.dev/)
- **Purpose**: Used as the build tool for the client-side React app, enabling fast development and efficient production builds.
- **File Used**: `client/package.json` for client-side setup and `vite.config.ts` for configuration.

### TypeScript

- **Resource**: [TypeScript](https://www.typescriptlang.org/)
- **Purpose**: Used for type-checking and improving development productivity on both client and server sides.
- **File Used**: All `.ts` files in both the server and client folders.

### Nodemon

- **Resource**: [Nodemon](https://www.npmjs.com/package/nodemon)
- **Purpose**: Automatically restarts the server during development when file changes are detected.
- **File Used**: `package.json` (with `npm run dev` and `npm run server:dev` commands).

### AI and Forums

- **AI**: I received help from AI-based resources, specifically for debugging, resolving technical issues, and obtaining insights on how to implement various features and handle challenges in the code.
- **Forums**: I also referred to developer forums (such as Stack Overflow) to clarify doubts, find solutions to errors, and gain guidance on best practices for implementing API calls and managing application deployment.

---

## Setup Instructions

### 1. **Clone the Repository**

```bash
git clone <repo_url>
cd weather-dash-judymae
```

### 2. Install Dependencies

Run the following commands for both the client and server sides:

```bash

# For the server side
cd server
npm install

# For the client side
cd ../client
npm install
```

### 3. Start the Development Server

Run the following command to start both the client and server in development mode:

```bash
npm run start:dev
```

### 4. Environment Variables

Make sure to set up the following environment variable:

```bash
OPENWEATHER_API_KEY=<your_api_key_here>
```

### 5. Building for Production

To build the app for production:

```bash
npm run build
```

### Known Issues

- The client-side of the app runs well, with no major issues. Users can interact with the interface to check the weather for different cities and view historical searches.

- The server-side has a persistent issue that prevents the deployment to Render from succeeding. This issue involves handling API calls and saving search history, which causes the application to crash on deployment. Given more time and support, I would investigate the root cause and work on fixing it.

### Future Improvements

- Fix the server-side persistence issue to ensure full functionality on both the client and server.

- Enhance UI and UX design with additional features, such as displaying weather forecasts for multiple days.

- Implement better error handling for failed API calls.
