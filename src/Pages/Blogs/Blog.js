import React from "react";
import { FaMarker } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="w-3/4 mx-auto container border-collapse mt-20">
      {/* 1. What is cors ? */}
      <p className="font-bold text-3xl ">1. What is cors ? </p>
      <p className="font-semibold mt-6 text-justify  ">
        CORS is a node. js package for providing a Connect/Express middleware
        that can be used to enable CORS with various options.Cross-Origin
        Resource Sharing (CORS) is an HTTP-header based mechanism that allows a
        server to indicate any origins (domain, scheme, or port) other than its
        own from which a browser should permit loading resources
      </p>

      {/* 2. Why are you using firebase? What other options do you have to
        implement authentication? */}
      <p className="font-bold text-3xl mt-10">
        2. Why are you using firebase? What other options do you have to
        implement authentication?
      </p>
      <p className="font-semibold mt-6 text-justify ">
        The Firebase Realtime Database lets you build rich, collaborative
        applications by allowing secure access to the database directly from
        client-side code. Data is persisted locally, and even while offline,
        realtime events continue to fire, giving the end user a responsive
        experience.
      </p>
      <p className="font-semibold mt-6 mb-4">
        What are options for implement authentication?
      </p>
      <p className="flex items-center gap-2">
        <FaMarker /> Single-Factor/Primary Authentication{" "}
      </p>
      <p className="flex items-center gap-2">
        <FaMarker />
        Two-Factor Authentication (2FA)
      </p>
      <p className="flex items-center gap-2">
        {" "}
        <FaMarker />
        Single Sign-On (SSO)
      </p>
      <p className="flex items-center gap-2">
        {" "}
        <FaMarker />
        Multi-Factor Authentication (MFA)
      </p>
      <p className="flex items-center gap-2">
        {" "}
        <FaMarker /> Password Authentication Protocol (PAP)
      </p>
      <p className="flex items-center gap-2">
        {" "}
        <FaMarker />
        Challenge Handshake Authentication Protocol (CHAP)
      </p>
      <p className="flex items-center gap-2">
        {" "}
        <FaMarker /> Extensible Authentication Protocol (EAP)
      </p>
      {/* How does the private route work? */}
      <p className="font-bold text-3xl mt-6">
        3. How does the private route work?
      </p>
      <p className="font-semibold mt-6 text-justify ">
        The private route component is similar to the public route, the only
        change is that redirect URL and authenticate condition. If the user is
        not authenticated he will be redirected to the login page and the user
        can only access the authenticated routes If he is authenticated (Logged
        in)
      </p>
      {/* What is Node? How does Node work? */}
      <p className="font-bold text-3xl mt-6">
        4. What is Node? How does Node work?
      </p>
      <p className="font-semibold text-xl mt-6">4.1.0 What is Node?</p>
      <p className="font-semibold mt-6 text-justify ">
        Node.js is an open-source, cross-platform, back-end JavaScript runtime
        environment that runs on a JavaScript Engine and executes JavaScript
        code outside a web browser, which was designed to build scalable network
        applications.
      </p>

      <p className="font-semibold text-xl mt-6">4.1.1 How does Node work?</p>
      <p className="font-semibold mt-6 mb-20 text-justify ">
        It is a used as backend service where javascript works on the
        server-side of the application. This way javascript is used on both
        frontend and backend. Node. js runs on chrome v8 engine which converts
        javascript code into machine code, it is highly scalable, lightweight,
        fast, and data-intensive.
      </p>
    </div>
  );
};

export default Blog;
