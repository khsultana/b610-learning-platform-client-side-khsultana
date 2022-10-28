import React from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");
const CourseEnroll = () => {
  return (
    <div className="p-20 m-20 text-5xl text-violet-600 text-center font-serif font-bold">
      <h2>
        {" "}
        <button onClick={notify}>Make me a toast</button>
        <Toaster /> Successfully Enroll the Course
      </h2>
    </div>
  );
};

export default CourseEnroll;
