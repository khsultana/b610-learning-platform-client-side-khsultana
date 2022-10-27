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
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCourseList(data));
  }, []);
  return (
    <div className=" p-5">
      <h2 className="text-2xl">Total List Of Courses :{courseList.length}</h2>
      <div className="flex">
        <div className="w-1/5">
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

        <div className="w-4/5  grid grid-cols-3 ">
          {courseId.map((c) => (
            <Card key={c._id} c={c}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
