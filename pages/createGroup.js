import Layout from "../components/layout.js";
import CreateGroup from "../components/createGroup.js";

function createGroupPage(props) {
  return (
    <Layout>
      <CreateGroup firebase={props.firebase} />
    </Layout>
  );
}

export default createGroupPage;
