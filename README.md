# Weather App for Public Transport Displays

This Weather App is designed to display weather information on screens in public transport stations and vehicles across various medium-sized cities in France. It uses the Open-Meteo API to retrieve weather data and presents it in an easy-to-read format.

## Features

- Data Retrieval: Implemented functionality to fetch weather data from the Open-Meteo API based on the configured city's latitude and longitude.

- Data Processing: The received data is processed to extract relevant weather metrics such as temperature, humidity, etc.

- Display Update: The processed data is then displayed on the interface, and the app is set to fetch new data every hour.


## Screenshot

![Weather App Screenshot](public/icons/screenShot.png.png)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mosk88/titah-weather-app-simplons
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Customize the `cityWeatherConfiguration.json` file in the public directory with the following structure:

   ```json
   {
     "city": "Oullins",
     "country": "France",
     "latitude": "45.717",
     "longitude": "4.803"
   }
   ```

   Replace the values with the appropriate information for your target city. Ensure this file is placed in the `public` folder of your project.

4. Start the development server:
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.


## Configuration

To change the target city or location, update the `cityWeatherConfiguration.json` file in the `public` folder with the new city name, country, latitude, and longitude.

## Logical Functioning of Data Retrieval

1. API Request: The app makes an API request to Open-Meteo using the city's geographical coordinates.

2. Data Processing: The received data is processed to extract relevant weather metrics such as temperature, humidity, etc.

3. Display Update: The processed data is then displayed on the interface, and the app is set to fetch new data every hour.

## Usage

The app automatically loads the weather information for the configured city at startup and refreshes the data every hour to ensure the displayed information is up-to-date.

## Identified Improvements

1. Enhanced UI/UX: Improve the design to be more visually appealing and user-friendly.

2. Additional Metrics: Add more weather metrics such as precipitation, and UV index.

3. Multi-language Support: Implement support for multiple languages to cater to a diverse audience.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
