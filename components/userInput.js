import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function UserInput() {
  const [text, setText] = useState("");
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="mx-auto mt-4">
      <div
        onClick={(e) => setDialogIsOpen(true)}
        className="mx-auto max-w-lg text-gray-400 mt-1 px-4 py-3 flex justify-between w-full shadow-md sm:text-sm border-gray-300 rounded-md"
      >
        <p>Start typing to add a new todo</p>
        <FontAwesomeIcon icon={faPlusCircle} />
      </div>
      {dialogIsOpen && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white rounded-md z-10 shadow-lg p-4 min-w-1/2">
            <form className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex-grow">
                  <label
                    for="first_name"
                    class="sr-only block text-sm font-medium text-gray-700"
                  >
                    Todo Item:
                  </label>
                  <input
                    type="text"
                    class="mt-1 px-2 py-3 focus:ring-green-500 border border-gray-300 shadow-sm rounded-lg focus:border-green-500 block w-full sm:text-sm"
                    placeholder="Start typing to add a new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                  />
                </div>
                <button onClick={(e) => setDialogIsOpen(false)}>
                  <span className="sr-only">Close</span>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
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
              <div className="flex items-center space-x-2">
                <p>on</p>
                <div>
                  <label className="sr-only" for="startDate">
                    Date:
                  </label>
                  <DatePicker
                    name="startDate"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm "
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p>from</p>
                <div>
                  <label className="sr-only" for="startTime">
                    Start Time:
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
                <p>to</p>
                <div>
                  <label className="sr-only" for="endTime">
                    End Time:
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>
              <div>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm w-full"
                  placeholder="you@example.com"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md float-right px-3 py-2 mt-1 bg-green-500 text-white font-semibold"
              >
                Create Task
              </button>
            </form>
          </div>
          <div
            class="absolute inset-0 bg-gray-100 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
        </div>
      )}
    </div>
  );
}

export default UserInput;
