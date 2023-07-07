import React from "react";

export default function FormmatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = props.date.getFullYear();
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();

  return (
    <div>
      {day}, {month} {date}, {year}
    </div>
  );
}
