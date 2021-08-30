To launch the application:

1. Create an empty folder and open it in your code editor (for example VS code)
2. Install Node.js (https://nodejs.org)
3. Clone the repository (or download ZIP):
    - Code > HTTPS > Copy Link
    - Open terminal (in VS code - Ctrl+Shift+` or Terminal > New Terminal)
    - Write: $ git clone https://github.com/ArgentoKit/weather-app.git (You must have Git installed (https://git-scm.com/downloads))
4. Install project dependencies with the command npm install
5. You need 2 API Keys, so create file .env in project and write:
    - REACT_APP_GEOCODING_KEY={YOUR_API_KEY} - https://console.cloud.google.com/marketplace/product/google/geocoding-backend.googleapis.com (create account => create new project => add geocodingAPI => create api key)
    - REACT_APP_API_KEY={YOUR_API_KEY} = https://openweathermap.org/api/one-call-api (create account => create api key)
7. Start project with the command npm start
8. Done, the project will open at the link http://localhost:3000

