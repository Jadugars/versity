import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function Avatar() {
  return (
    <div className="relative w-10 h-10">
      <img
        className="inline-block object-center h-10 w-10 rounded-full transform transition duration-200 ease-in-out hover:scale-110"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div className="absolute bottom-0 right-0 h-2 w-2 my-2 mr-1">
        <FontAwesomeIcon
          icon={faCog}
          className="text-white text-lg border-green-800 border-2 rounded-lg bg-green-800"
        />
      </div>
    </div>
  );
}

export default Avatar;
