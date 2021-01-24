import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function UserInput() {
  const [text, setText] = useState("");
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <div className="max-w-lg mx-auto mt-4">
      <div
        onClick={(e) => setDialogIsOpen(true)}
        className="text-gray-400 mt-1 px-4 py-3 flex justify-between w-full shadow-md sm:text-sm border-gray-300 rounded-md"
      >
        <p>Start typing to add a new todo</p>
        <FontAwesomeIcon icon={faPlusCircle} />
      </div>
      {dialogIsOpen && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white rounded-md z-10 shadow-lg p-4 w-2/4">
            <form>
              <div className="flex justify-between items-center">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first_name"
                    class="sr-only block text-sm font-medium text-gray-700"
                  >
                    Todo Item:
                  </label>
                  <input
                    type="text"
                    class="mt-1 px-2 py-3 focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm"
                    placeholder="Start typing to add a new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                  />
                </div>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <div className="flex items-center">
                <p>in</p>
                <div class="ml-2">
                  <label
                    for="country"
                    class="sr-only block text-sm font-medium text-gray-700"
                  >
                    Select Timetable:
                  </label>
                  <select
                    id="country"
                    name="country"
                    autocomplete="country"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  >
                    <option>Personal Timetable</option>
                    <option>2018-A</option>
                    <option>AKS</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div
            class="absolute inset-0 bg-white bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
        </div>
      )}
    </div>
  );
}

export default UserInput;
