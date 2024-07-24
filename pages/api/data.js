export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m&hourly=visibility&daily=sunrise,sunset&timeformat=unixtime&timezone=auto&forecast_days=1`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
