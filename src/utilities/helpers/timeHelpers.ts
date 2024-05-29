import moment from "moment-timezone";

export const getTimeZone = () => {
  const location = moment.tz.guess();

  const isOffset = moment.tz(location).format("z").includes("-") || moment.tz(location).format("Z").includes("+");

  const timeZone = isOffset ? "UTC " + moment.tz(location).format("z") : moment.tz(location).format("z");

  return timeZone;
};

export const getToday = () => {
  return moment().format("MM/DD/YYYY");
};

export const getTimeOfTheDayMorningOrAfternoon = () => {
  const currentHour = moment().hour();
  return currentHour <= 12 ? "Morning" : "Afternoon";
};
