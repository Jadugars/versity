import Layout from "../components/layout.js";
import Groups from "../components/groups.js";

function groupsPage(props) {
  return (
    <Layout>
      <Groups fb={props} />
    </Layout>
  );
}

export default groupsPage;
