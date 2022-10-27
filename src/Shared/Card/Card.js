import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const courseDetails = props.c;
  console.log(courseDetails);
  const { course_Id, title, photo, details } = courseDetails;

  return (
    <div className="card w-80 bg-base-100 shadow-xl m-3 rounded-none">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 30) + "..."}{" "}
            <Link to={`/courses/${course_Id}`}></Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded-none">
            <Link to={`/courses/${course_Id}`}>course Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
