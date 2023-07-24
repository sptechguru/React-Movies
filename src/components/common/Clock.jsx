import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, seCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    seCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="pt-2">
      <h4 className="text-right mx-10">
        <span className="bg-red-100 text-white-800 text-1xl text-white font-semibold mt-2 px-2.5 py-2 rounded dark:bg-red-900 dark:text-white-300 mx-2 py-2 ">{ctime}</span>{" "}
      </h4>
      </div>
  );
};

export default Clock;
