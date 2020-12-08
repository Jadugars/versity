import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  height: 100vh;
`;

const Grid = styled.div`
  display: flex;
  box-sizing: content-box;
`;

const Day = styled.div`
  border: 1px solid blue;
  width: 400px;
  height: 2880px;
`;

const Event = styled.div`
  border: 1px solid red;
  width: 400px;
  height: 120px;
  position: relative;
  top: 300px;
  left: 0;
  box-sizing: border-box;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
`;

function Calendar() {
  return (
    <Container>
      <Header></Header>
      <Grid>
        <Day>
          <Event></Event>
        </Day>
        <Day>
          <Event></Event>
        </Day>
        <Day>
          <Event></Event>
        </Day>
        <Day>
          <Event></Event>
        </Day>
      </Grid>
    </Container>
  );
}

export default Calendar;
