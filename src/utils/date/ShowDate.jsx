import getDate from "./getDate";

const ShowDate = () => {
  const weatherData = new Date().getTime() / 1000;
  return (
    <div>
      {getDate(weatherData, "time", false)} -{" "}
      {getDate(weatherData, "date", false)}
    </div>
  );
};

export default ShowDate;
