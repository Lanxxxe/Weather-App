# Weather App

A modern and responsive weather application built using **React.js**, **Vite**, and **WeatherAPI**. This app provides current weather information, and weather conditions for your desired cities.

## Features

- **Search for Cities**: Look up current weather details for any city.
- **Weather Details**:
  - Current temperature, humidity, and condition.
- **Dynamic Icons**: Displays appropriate weather icons based on conditions.
- **Dark Mode**: Toggle between light and dark modes.

## Technologies Used

- **Frontend**: React.js, Vite, Tailwind CSS
- **API**: [WeatherAPI](https://www.weatherapi.com/)
- **Icons**: Heroicons, Weather Icons

## Installation

### Prerequisites

- Node.js (>= 16)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Lanxxxe/Weather-App.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your WeatherAPI key:
   - Create an account on [WeatherAPI](https://www.weatherapi.com/).
   - Obtain your API key.
   - Create a `.env` file in the root of the project:
     ```env
     VITE_API_KEY=your_api_key_here
     ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Type the name of a city in the search bar and press the **Search** button.
2. View the current weather, including:
   - Temperature
   - Humidity
   - Condition icon
3. Toggle dark mode by clicking the sun/moon icon in the header.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Acknowledgements

- [WeatherAPI](https://www.weatherapi.com/)
- [Heroicons](https://heroicons.com/)
- [Tailwind CSS](https://tailwindcss.com/)
