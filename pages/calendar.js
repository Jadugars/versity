import Layout from "../components/layout";
import Calendar from "../components/calendar";
import UserInput from "../components/userInput";

function calendarPage() {
  return (
    <Layout>
      <UserInput />
      <Calendar />
    </Layout>
  );
}

export default calendarPage;
