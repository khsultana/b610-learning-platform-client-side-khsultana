import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/Auth Provider/AuthProvider";

const RightSide = () => {
  const { signInProvider } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" flex flex-col items-center gap-4 m-8 justify-center ">
      <button
        onClick={handleGoogle}
        className="btn btn-success btn-outline flex items-center gap-6 w-80"
      >
        <FaGoogle></FaGoogle>Sign In With Google{" "}
      </button>
      <button className="btn  btn-outline flex items-center gap-6 w-80 ">
        <FaGithub></FaGithub>Sign In With GitHub{" "}
      </button>
    </div>
  );
};

export default RightSide;
