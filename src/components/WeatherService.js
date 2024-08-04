import { DateTime } from "luxon";
const API_KEY = '8c52aecc569e498623c6cb94406ef4e1';
const Base_URl = 'https://api.openweathermap.org/data/2.5/';

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(Base_URl + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);
  return fetch(url).then((res) => res.json());
};

const iconUrlFormateCode = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

const formatToLocalTime = (
  secs,
  offset,
  format = "ccc dd LLL yyyy' | Local Time: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formateCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { feels_like, humidity, temp, temp_max, temp_min },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    humidity,
    temp_max,
    temp_min,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    icon: iconUrlFormateCode(icon),
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
  };
};

const formateForcastWeather = (secs, offset, data) => {
  //hourly
  const hourly = data.filter((f) => f.dt > secs)
    .map((f) => ({
      temp: f.main.tamp,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      icon: iconUrlFormateCode(f.weather[0].icon),
      date: f.dt_txt,
    }))
    .slice(0, 5);

  //daily
  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map((f) => ({
      temp: f.main.tamp,
      title: formatToLocalTime(f.dt, offset, "ccc"),
      icon: iconUrlFormateCode(f.weather[0].icon),
      date: f.dt_txt,
    }));

  return { hourly, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeathe = await getWeatherData(
    "weather",
    searchParams
  ).then(formateCurrent);

  const { dt, lat, lon, timezone } = formattedCurrentWeathe;

  const formattedForcastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((d) => formateForcastWeather(dt, timezone, d.list));

  return { ...formattedCurrentWeathe, ...formattedForcastWeather };
};

export default getFormattedWeatherData;
