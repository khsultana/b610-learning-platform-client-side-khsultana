import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseLink = () => {
  const user = useLoaderData();
  const course = user[0];
  const { photo, title, details } = course;
  return (
    <div>
      <div className="mt-20 mb-20 mx-auto container card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Views</div>
            <div className="badge badge-outline">Ratings</div>
          </div>
          <Link to="/courses">
            {" "}
            <button className="btn btn-success w-full rounded-none">
              Back to Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseLink;
