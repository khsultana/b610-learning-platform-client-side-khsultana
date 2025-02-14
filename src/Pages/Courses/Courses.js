import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../Shared/Card/Card";

const Courses = () => {
  const courseId = useLoaderData();
  console.log(courseId);

  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    fetch("https://future-learn-digital-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCourseList(data));
  }, []);
  return (
    <div className=" p-5">
      <h2 className="text-2xl">Total List Of Courses :{courseList.length}</h2>
      <div className="lg:flex">
        <div className="sm:w-full lg:w-1/5">
          {courseList.map((course) => (
            <p key={course.id}>
              <Link to={`/courses/${course.id}`}>
                <button className="btn btn-outline rounded-none m-1 w-56">
                  {course.name}
                </button>
              </Link>
            </p>
          ))}
        </div>
        {/* card */}

        <div className=" lg:w-4/5 lg:grid lg:grid-cols-3 sm:w-full sm:grid sm:grid-cols-1 ">
          {courseId.map((c) => (
            <Card key={c._id} c={c}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
