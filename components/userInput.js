import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import ReactShortcut from "react-shortcut";

import "react-datepicker/dist/react-datepicker.css";

function UserInput() {
  const [text, setText] = useState("");
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const shortcutKeys = [
    "shift+a",
    "shift+b",
    "shift+c",
    "shift+d",
    "shift+e",
    "shift+f",
    "shift+g",
    "shift+h",
    "shift+i",
    "shift+j",
    "shift+k",
    "shift+l",
    "shift+m",
    "shift+n",
    "shift+o",
    "shift+p",
    "shift+q",
    "shift+r",
    "shift+s",
    "shift+t",
    "shift+u",
    "shift+v",
    "shift+w",
    "shift+x",
    "shift+y",
    "shift+z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const inputEl = useRef(null);
  const handleShortcutOpen = () => {
    setDialogIsOpen(true);
    inputEl.current.focus();
  };
  const handleShortcutClose = () => {
    setDialogIsOpen(false);
  };
  const handleCloseOnEsc = (e) => {
    if (e.keyCode === 27) {
      handleShortcutClose();
    }
  };

  return (
    <div className="mx-auto mt-4">
      <ReactShortcut keys={shortcutKeys} onKeysPressed={handleShortcutOpen} />
      <ReactShortcut keys={["esc"]} onKeysPressed={handleShortcutClose} />
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
                    htmlFor="first_name"
                    className="sr-only block text-sm font-medium text-gray-700"
                  >
                    Todo Item:
                  </label>
                  <input
                    type="text"
                    className="mt-1 px-2 py-3 focus:ring-green-500 border border-gray-300 shadow-sm rounded-lg focus:border-green-500 block w-full sm:text-sm"
                    placeholder="Start typing to add a new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    ref={inputEl}
                    onKeyDown={handleCloseOnEsc}
                  />
                </div>
                <button onClick={(e) => setDialogIsOpen(false)}>
                  <span className="sr-only">Close</span>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div className="flex items-center">
                <p>in</p>
                <div className="ml-2">
                  <label
                    htmlFor="timetable"
                    className="sr-only block text-sm font-medium text-gray-700"
                  >
                    Select Timetable:
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                  <label className="sr-only" htmlFor="startDate">
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
                  <label className="sr-only" htmlFor="startTime">
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
                  <label className="sr-only" htmlFor="endTime">
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
                onClick={(e) => handleSubmit(e)}
              >
                Create Task
              </button>
            </form>
          </div>
          <div
            className="absolute inset-0 bg-gray-100 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
        </div>
      )}
    </div>
  );
}

export default UserInput;
