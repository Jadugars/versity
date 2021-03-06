import Link from "next/link";
import GroupAvatar from "../components/groupAvatar";
import { useRouter } from "next/router";
function Groups(props) {
  const router = useRouter();
  let href = "";
  const CreateGroupClick = (e) => {
    e.preventDefault();
    router.push("/createGroup");
  };
  const JoinGroupClick = (e) => {
    e.preventDefault();
    router.push("/joinGroup");
  };
  //let groups = [];
  //const groups = props.fb.firebase.viewUserGroups();

  const list = [];
  /*
  async function componentDidMount() {
    const data = await props.fb.firebase.viewUserGroups();
    //const json = await response.json();
    //this.setState({ data: json });
    console.log("data", data);
    console.log("data", data.length);
    data.map((element) => (
      <GroupAvatar
        GroupName={element.name}
        GroupDescription={element.description}
      />
    ));
  }
  componentDidMount();*/
  //debugger;
  const groupList = props.fb.firebase.viewUserGroups();
  groupList.map((element) => {
    console.log(element, "element");

    <GroupAvatar
      GroupName={element.name}
      GroupDescription={element.description}
    />;
  });
  return (
    <div>
      <div className="min-h-screen justify-center  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className=" block text-align:center">
          <a
            href="/createGroup"
            onClick={CreateGroupClick}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Create Group
          </a>
        </div>
        <div className="pt-5">
          <a
            href="/joinGroup"
            onClick={JoinGroupClick}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Join Group
          </a>
        </div>
        <div className="pt-6 container bg-transparent text-4xl font-serif">
          Joined Groups
        </div>
        <div className="pt-6 grid grid-flow-row grid-cols-4 grid-rows-3 gap-10">
          {list}
        </div>
      </div>
    </div>
  );
}

export default Groups;
