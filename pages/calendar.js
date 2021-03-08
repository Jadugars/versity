import Layout from "../components/layout";
import Calendar from "../components/calendar";
import UserInput from "../components/userInput";
import * as dayjs from "dayjs";
import { useEffect, useState } from "react";

function calendarPage() {
  let eventData = [
    {
      day: dayjs(),
      events: [
        {
          title: "Marketing",
          description: "",
          startTime: dayjs().hour(11).minute(0),
          endTime: dayjs().hour(12).minute(0),
          people: "Lina Neal",
          tags: ["Laboratory", "Exam", "RA236"],
        },
        {
          title: "Advertising photography",
          description: "",
          startTime: dayjs().hour(14).minute(30),
          endTime: dayjs().hour(16).minute(0),
          people: "Johnny Alwarez",
          tags: ["Project", "KM107"],
        },
        {
          title: "Mass Media",
          description: "",
          startTime: dayjs().hour(16).minute(0),
          endTime: dayjs().hour(17).minute(20),
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
          startTime: dayjs().hour(11).minute(0),
          endTime: dayjs().hour(12).minute(0),
          people: "Tillie Clarke",
          tags: ["Project", "KM107"],
        },
        {
          title: "Mass Media",
          description: "",
          startTime: dayjs().hour(12).minute(0),
          endTime: dayjs().hour(14).minute(0),
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
          startTime: dayjs().hour(12).minute(0),
          endTime: dayjs().hour(14).minute(0),
          people: "Grace Santiago",
          tags: ["Seminar", "KM107"],
        },
      ],
    },
  ];

  const [eventDays, setEventDays] = useState(eventData);

  const addTodo = (
    date,
    title,
    description,
    startTime,
    endTime,
    people,
    tags
  ) => {
    let dateIndex = eventDays.findIndex((el) => el.day.isSame(date));

    if (dateIndex != -1) {
      //date exists as a eventDay in the array
      let newEventDayData = eventDays.at(dateIndex).events;
      newEventDayData.push({
        title,
        description,
        startTime,
        endTime,
        people,
        tags,
      });
    }
  };

  addTodo(
    dayjs(),
    "Hello",
    "There",
    dayjs().hour(8).minute(0),
    dayjs().hour(9).minute(0),
    "Krona",
    ["General", "Kenobi"]
  );

  return (
    <Layout>
      <UserInput />
      <Calendar eventDays={eventDays} />
    </Layout>
  );
}

export default calendarPage;
