import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth Provider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const handleUserSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-lg ">
      <div className="navbar-start gap-4 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="faq">FAQ</Link>
        <Link to="/blog">Blog</Link>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={60}
        />
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl font-serif">
          Future Learn Digital
        </Link>
      </div>

      <div className="navbar-end">
        <div className="flex gap-3 items-center justify-center">
          <div>
            {user?.uid ? (
              <>
                <span className="py-3 m-3"> {user?.displayName}</span>
                <button
                  onClick={handleUserSignOut}
                  className="btn btn-outline rounded-none py-3"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="font-semibold p-3" to="/login">
                  <button className="btn btn-outline">Login</button>
                </Link>
                <Link className="font-semibold py-3" to="/register">
                  <button className="btn btn-outline">Register</button>
                </Link>
              </>
            )}
          </div>
          <p>
            {user?.photoURL ? (
              <img
                className="rounded-full"
                style={{ height: "40px" }}
                src={user.photoURL}
              ></img>
            ) : (
              <FaUser></FaUser>
            )}
          </p>
        </div>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
