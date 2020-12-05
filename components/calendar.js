import styled from "styled-components";
import dayjs from "dayjs";

const GridContainer = styled.div`
  width: (100vw - 202px);
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(${(props) => props.numOfDays}, 400px);
  grid-template-rows: 50px repeat(${(props) => props.numOfHours}, 100px);
  column-gap: 25px;
`;

const Weekdays = styled.div`
  grid-area: 1 / 2 / 2 / 9;
  height: 100px;
`;

const Weekday = styled.div`
  align-self: end;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  grid-area: ${(props) =>
    `${props.rowStart} / ${props.columnStart} / ${props.rowEnd} / ${props.columnEnd}`};
`;

const Time = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
  place-self: start end;
  grid-area: ${(props) =>
    `${props.rowStart} / ${props.columnStart} / ${props.rowEnd} / ${props.columnEnd}`};
`;

const Day = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  background-image: repeating-linear-gradient(
    55deg,
    rgba(238, 238, 238, 0.2),
    rgba(238, 238, 238, 0.2) 10px,
    rgba(221, 221, 221, 0.8) 1px,
    rgba(221, 221, 221, 0.8) 11px
  );
  grid-area: ${(props) =>
    `${props.rowStart} / ${props.columnStart} / ${props.rowEnd} / ${props.columnEnd}`};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${(props) => props.numOfHours * 60}, 1fr);
`;

const Event = styled.div`
  border: 1px solid red;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
`;

const events = [
  {
    title: "IHCI",
    subTitle: "Farheen",
    tags: [
      { title: "Laboratory", color: "yellow" },
      { title: "CS302", color: "red" },
    ],
    start: dayjs().hour(3),
    end: dayjs().hour(4),
  },
];

function Calendar(props) {
  let numberOfDays = 7;
  let numberOfHours = 12;
  let hourOffset = -2;
  let dayOffset = -1;

  let Header = [];
  let Days = [];
  for (let i = 0; i < numberOfDays; ++i) {
    let date = dayjs().add(i + dayOffset, "day");
    Header.push(
      <Weekday rowStart={1} rowEnd={2} columnStart={i + 2} columnEnd={i + 3}>
        <p className="font-bold uppercase">{date.format("dddd")}</p>
        <p className="text-gray-400">{date.format("DD.MM.YYYY")}</p>
      </Weekday>
    );

    Days.push(
      <Day
        rowStart={2}
        rowEnd={numberOfHours + 2}
        columnStart={i + 2}
        columnEnd={i + 3}
        numOfHours={numberOfHours}
      >
        {events.map((event) => {
          let minutes = 90;
          return (
            <Event rowStart={1} rowEnd={minutes + 1}>
              <div>
                <p className="font-bold text-blue-500">{event.title}</p>
                <p className="text-gray-500">{event.subTitle}</p>
              </div>
              <div>
                {event.tags.map((tag) => {
                  return (
                    <div
                      className={`mr-2 inline text-xs px-3 py-0.5 bg-${tag.color}-400 text-white rounded`}
                    >
                      {tag.title}
                    </div>
                  );
                })}
              </div>
            </Event>
          );
        })}
      </Day>
    );
  }

  let RowHeader = [];
  for (let i = 0; i < numberOfHours; ++i) {
    let startingHour = dayjs().add(i + hourOffset, "hours");
    RowHeader.push(
      <Time rowStart={2 + i} rowEnd={3 + i} columnStart={1} columnEnd={2}>
        {startingHour.format("HH:00")}
      </Time>
    );
  }

  return (
    <GridContainer className="mx-3 my-3 h-screen overflow-scroll">
      <CalendarGrid numOfHours={numberOfHours} numOfDays={numberOfDays}>
        {Header}
        {RowHeader}
        {Days}
      </CalendarGrid>
    </GridContainer>
  );
}

export default Calendar;
/*
 */
