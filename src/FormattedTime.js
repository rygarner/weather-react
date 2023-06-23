import React from "react";

export default function FormattedTime(props) {
  const formattedTime = props.date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    hourCycle: "h12",
  });

  return <div>{formattedTime}</div>;
}
