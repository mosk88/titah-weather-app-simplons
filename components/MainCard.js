import Image from "next/image";
import { codeToDescription, ctoF } from "../services/converters";
import styles from "./MainCard.module.css";
import {   getIconMap } from "../services/helpers";


export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
 
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{codeToDescription(description)}</p>
      <Image
        width="300px"
        height="300px"
        src={getIconMap(iconName)}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem == "metric"
          ? Math.round(weatherData.current.temperature_2m)
          : Math.round(ctoF(weatherData.current.temperature_2m))}
        °{unitSystem == "metric" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {unitSystem == "metric"
          ? Math.round(weatherData.current.apparent_temperature)
          : Math.round(ctoF(weatherData.current.apparent_temperature))}
        °{unitSystem == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
