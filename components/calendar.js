import { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import CustomScroll from "react-custom-scroll";

const Container = styled.div`
  height: calc(100vh - 100px);
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-grow: 1;
`;

const Timings = styled.div`
  width: 10%;
  position: relative;
`;

const Days = styled.div`
  width: 90%;
`;

const Time = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  border-top: 1px solid black;
  width: 100%;
  height: ${(props) => props.height}px;
`;

const Day = styled.div`
  border: 1px solid red;
  width: ${(props) => props.width}%;
  position: relative;
`;

const Event = styled.div`
  border: 1px solid blue;
  position: absolute;
  width: 100%;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
`;

const Spacer = styled.div`
  width: 10%;
  height: 100%;
`;

const DaysHeader = styled.div`
  width: 90%;
  display: flex;
`;

const DayName = styled.div`
  width: ${(props) => props.width}%;
  border: 1px solid red;
`;

let eventData = [
  {
    interval: 120,
    start: 0,
    day: 2,
  },
  {
    interval: 120,
    start: 0,
    day: 0,
  },
  {
    interval: 120,
    start: 180,
    day: 0,
  },
  {
    interval: 60,
    start: 240,
    day: 1,
  },
];

function Calendar() {
  const calendar = useRef(null);
  const [heightOfMinute, setHeightOfMinute] = useState(0);
  const numOfHours = 12;
  const numOfHoursToShow = 6;
  const numOfDays = 3;
  useLayoutEffect(() => {
    setHeightOfMinute(calendar.current.clientHeight / numOfHoursToShow / 60);
    console.log(heightOfMinute);
  });

  const timings = [];
  for (let i = 0; i < numOfHours; ++i) {
    timings.push(
      <Time top={i * (heightOfMinute * 60)} height={heightOfMinute * 60}>
        {i + 1}pm{" "}
      </Time>
    );
  }

  const days = [];
  for (let i = 0; i < numOfDays; ++i) {
    let events = eventData
      .filter((event) => event.day == i)
      .map((event) => {
        return (
          <Event
            top={event.start * heightOfMinute}
            height={event.interval * heightOfMinute}
          >
            Event
          </Event>
        );
      });

    days.push(<Day width={100 / numOfDays}>{events}</Day>);
  }

  const daysHeader = [];
  for (let i = 0; i < numOfDays; ++i) {
    daysHeader.push(<DayName width={100 / numOfDays}>Monday</DayName>);
  }

  return (
    <div className="h-screen w-full flex flex-col">
      <Header>
        <Spacer>GMT +5</Spacer>
        <DaysHeader>{daysHeader}</DaysHeader>
      </Header>
      <Container ref={calendar}>
        <Timings>{timings}</Timings>
        <Days className="flex">{days}</Days>
      </Container>
    </div>
  );
}

export default Calendar;
