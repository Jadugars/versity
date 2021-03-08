import * as dayjs from "dayjs";
import { useEffect, useState } from "react";
const isToday = require("dayjs/plugin/isToday");
const isTomorrow = require("dayjs/plugin/isTomorrow");
import mapSort from "mapsort";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

function TasksDay(props) {
  let dayTitle = "Loading";
  let dayDescription = props.day.format("dddd, D MMM");

  if (props.day.isToday()) {
    dayTitle = "Today";
  } else if (props.day.isTomorrow()) {
    dayTitle = "Tomorrow";
  } else {
    dayTitle = props.day.format("dddd");
    dayDescription = props.day.format("D MMM");
  }

  const eventsWithTime = props.events.filter((event) => event.startTime);
  const eventsWithoutTime = props.events.filter((event) => !event.startTime);
  const sortedEvents = mapSort(
    eventsWithTime,
    (el) => el.startTime,
    (aTime, bTime) => {
      if (aTime.isBefore(bTime)) {
        return -1;
      } else if (bTime.isBefore(aTime)) {
        return 1;
      }
      return 0;
    }
  );
  const finalEventsList = sortedEvents.concat(eventsWithoutTime);

  return (
    <div>
      <div className="flex items-baseline">
        <h2 className="text-xl">{dayTitle}</h2>
        <p className="pl-1 text-xs text-gray-500">{dayDescription}</p>
      </div>
      <ul className="max-w-lg pt-2">
        {finalEventsList.map((event, i) => {
          return (
            <li
              className="flex justify-between items-center py-2"
              key={`task${i}`}
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="appearance-none rounded-full bg-green-50 h-4 w-4 text-gray-600 ring-2 ring-green-500 checked:bg-green-500 checked:border-transparent "
                />
                <span className="ml-2 text-gray-700">{event.title}</span>
                {event.startTime && (
                  <span className="ml-2 text-sm text-gray-500">
                    {event.startTime.format("H:mm a")} to{" "}
                    {event.endTime.format("H:mm a")}
                  </span>
                )}
              </label>
              <div className="flex items-baseline">
                {event.tags.map((tag, i) => {
                  return (
                    <p className="pl-2 text-sm text-gray-500" key={`tag${i}`}>
                      {tag}
                    </p>
                  );
                })}
                <div className="ml-2 h-3 w-3 rounded-full bg-gray-300"></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Calendar({ eventDays }) {
  return (
    <div className="p-6 space-y-8">
      {eventDays.map((eventDay, i) => {
        return (
          <TasksDay
            day={eventDay.day}
            events={eventDay.events}
            key={`taskDay${i}`}
          />
        );
      })}
    </div>
  );
}

export default Calendar;
