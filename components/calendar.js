import * as dayjs from "dayjs";
const isToday = require("dayjs/plugin/isToday");
const isTomorrow = require("dayjs/plugin/isTomorrow");

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

  return (
    <div>
      <div className="flex items-baseline">
        <h2 className="text-xl">{dayTitle}</h2>
        <p className="pl-1 text-xs text-gray-500">{dayDescription}</p>
      </div>
      <ul className="max-w-lg pt-2">
        {props.events.map((event) => {
          return (
            <li className="flex justify-between items-center py-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="appearance-none rounded-full bg-green-50 h-4 w-4 text-gray-600 ring-2 ring-green-500 checked:bg-green-500 checked:border-transparent "
                />
                <span className="ml-2 text-gray-700">{event.title}</span>
              </label>
              <div className="flex items-baseline">
                {event.tags.map((tag) => {
                  return <p className="pl-2 text-sm text-gray-500">{tag}</p>;
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

function Calendar() {
  let eventDays = [
    {
      day: dayjs(),
      events: [
        {
          title: "Marketing",
          description: "",
          people: "Lina Neal",
          tags: ["Laboratory", "Exam", "RA236"],
        },
        {
          title: "Advertising photography",
          description: "",
          people: "Johnny Alwarez",
          tags: ["Project", "KM107"],
        },
        {
          title: "Mass Media",
          description: "",
          people: "Mina Schmidt",
          tags: ["Lecture", "KM107"],
        },
      ],
    },
    {
      day: dayjs().add(1, "day"),
      events: [
        {
          title: "Advertising photography",
          description: "",
          people: "Tillie Clarke",
          tags: ["Project", "KM107"],
        },
        {
          title: "Mass Media",
          description: "",
          people: "Mina Schmidt",
          tags: ["Lecture", "KM107"],
        },
      ],
    },
    {
      day: dayjs().add(2, "day"),
      events: [
        {
          title: "Marketing",
          description: "",
          people: "Loretta Park",
          tags: ["Laboratory", "MA101"],
        },
        {
          title: "Graphic Design",
          description: "",
          people: "Grace Santiago",
          tags: ["Seminar", "KM107"],
        },
      ],
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {eventDays.map((eventDay) => {
        return <TasksDay day={eventDay.day} events={eventDay.events} />;
      })}
    </div>
  );
}

export default Calendar;
