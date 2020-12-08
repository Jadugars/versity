import styled from "styled-components";

 
const Container = styled.div`
  
  height: 100vh;
`;

const Grid = styled.div`
display: flex;
width: calc(100%-100px);
height: calc(100%-100px);
`;

const Day = styled.div`
  border: 1px solid red;
  width: 20vw;
  height: 2880px;
  background: blue;
`;

const Event = styled.div`
  border: 1px solid green;
  background: red;
  width: 300px;
  height: 120px;
  position: relative;
  top: 300px;
  left: 0;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`;

const DayHeader = styled.div`
border: 1px solid red;
text-align: center;
display: flex;
width: 300px;
height: 100px;
background: yellow;
`;
const Timings = styled.div`
border-top-color: 1px solid red;
width: 100px;
height: calc(100vh - 100px);
`;

const Hour = styled.div`
  border: 1px solid red;
  height: 120px;
  width: 100px;
  background: green;
`;
const Block = styled.div`
background: pink;
width: 100px;
height: 100px;
`;


function Calendar() {
  return (
  
    <Container>
      <Header>
        <Block></Block>
        <DayHeader>Monday</DayHeader>
        <DayHeader>Tuesday</DayHeader>
        <DayHeader>Wedday</DayHeader>
        <DayHeader>Thursday</DayHeader>
        <DayHeader>Friday</DayHeader>
        <DayHeader>Saturday</DayHeader>
        <DayHeader>Sunday</DayHeader>
        Header</Header>
      <div class="flex">
      <Timings> 
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>
        <Hour></Hour>Time
      </Timings>
      <Grid>
        <Day> 
          Day1</Day>
        <Day> Day2</Day>
        <Day> Day3</Day>
        <Day> Day2</Day>
        <Day> Day3</Day>
        <Day> Day2</Day>
        <Day> Day3</Day>
      </Grid>
      </div>
    </Container>
  );
}

export default Calendar;
