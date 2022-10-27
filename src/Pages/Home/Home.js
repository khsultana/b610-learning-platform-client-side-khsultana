import React from "react";

const Home = () => {
  return (
    <div>
      <div className="lg:w-auto sm:mx-auto">
        <div className="sm:container sm:mx-auto sm:flex-row lg:flex justify-between">
          <div>
            <h2 className="text-4xl font-bold m-8">Welcome! </h2>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Site Views</div>
              <div className="stat-value">9,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-1 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-6">
          <div className="rounded-none card w-96 bg-slate-200 text-black ">
            <div className="card-body">
              <h2 className="card-title">Tell us about yourself!</h2>
              <progress className="progress w-56"></progress>
              <p>
                {" "}
                Courses from many providers to help you find the best courses on
                almost any subject, wherever they exist.
              </p>
            </div>
          </div>

          <div className="rounded-none card w-96 bg-slate-200 text-black">
            <div className="card-body">
              <h2 className="card-title">About Courses!</h2>
              <progress className="progress w-56"></progress>
              <p>
                {" "}
                Rankings Best Online Courses of All Time Best Online Courses of
                the Year (2022 Edition) .
              </p>
            </div>
          </div>
          <div className="w-48">
            <textarea
              className="textarea textarea-accent"
              placeholder="About Course"
            ></textarea>
          </div>
        </div>

        {/* Find your next course. */}

        <div className="sm:grid sm:grid-cols-1 lg:flex  lg:justify-center lg:items-center mt-10 mb-10">
          <div>
            <img
              style={{ width: "600px" }}
              src="https://assets.materialup.com/uploads/897dce47-abf1-4013-b1cf-32352470830d/preview.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 m-6  ">
            <h2 className="text-4xl font-bold mb-5"> Find your next course.</h2>

            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-full"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
              </div>
            </div>

            <p>Or browse by subject or university</p>

            <h2 className="font-semibold mb-2">Popular courses</h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex w-40 items-center gap-1 rounded-xl border-2">
                <div>
                  <img
                    className="rounded-2xl"
                    style={{ width: "32px", height: "32px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVW4n8uIJRAZFbyEsLvjVB7cvMVQfSOMGVA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div>Free Certificate</div>
              </div>
              {/* 2 */}
              <div className="flex w-40 items-center gap-1 rounded-xl border-2">
                <div>
                  <img
                    className="rounded-xl"
                    style={{ width: "32px", height: "32px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVW4n8uIJRAZFbyEsLvjVB7cvMVQfSOMGVA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div>Free Certificate</div>
              </div>
              {/* 3 */}
              <div className="flex w-40 items-center gap-1 rounded-xl border-2">
                <div>
                  <img
                    className="rounded-xl"
                    style={{ width: "32px", height: "32px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVW4n8uIJRAZFbyEsLvjVB7cvMVQfSOMGVA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div>Free Certificate</div>
              </div>{" "}
              {/* 4 */}
              <div className="flex w-40 items-center gap-1 rounded-xl border-2">
                <div>
                  <img
                    className="rounded-xl"
                    style={{ width: "32px", height: "32px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVW4n8uIJRAZFbyEsLvjVB7cvMVQfSOMGVA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div>Free Certificate</div>
              </div>
              {/* 5 */}
              <div className="flex w-40 items-center gap-1 rounded-xl border-2">
                <div>
                  <img
                    className="rounded-xl"
                    style={{ width: "32px", height: "32px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVW4n8uIJRAZFbyEsLvjVB7cvMVQfSOMGVA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div>Free Certificate</div>
              </div>
              {/* 6 */}
              <div className="flex w-40 items-center gap-1 rounded-xl border-2">
                <div>
                  <img
                    className="rounded-xl"
                    style={{ width: "32px", height: "32px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVW4n8uIJRAZFbyEsLvjVB7cvMVQfSOMGVA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div>Free Certificate</div>
              </div>{" "}
            </div>
          </div>

          {/* Popular courses */}
        </div>

        <h2 className="text-indigo-500 font-bold text-4xl text-center mt-10 mb-3">
          Find the best courses, wherever they exist
        </h2>

        <div className="sm:grid sm:grid-cols-1 lg:flex lg:justify-center lg:items-center shadow-lg">
          <div className="w-1/2 m-6">
            <h2 className="text-4xl font-bold mb-5">Learn without limits</h2>
            <p>
              Start, switch, or advance your career with more than 5,200
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
            <div className="flex gap-4 mb-5 mt-20">
              <button className="btn  btn-info">Join Free</button>
              <button className="btn btn-outline btn-success">
                Join to Premium
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://discovertemplate.com/wp-content/uploads/wc-document-uploads/1/DT_G17_-Education-Animated-GIF-Icon-Pack.gif"
              alt=""
            />
          </div>
        </div>
        {/* Footer up  */}
        <div className="sm:w-48 sm:grid sm:grid-cols-1 sm:mx-auto lg:w-auto lg:flex lg:justify-between lg:m-5 lg:mt-20 lg:shadow-lg">
          <div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Pick the best Courses</span>
                <span className="label-text-alt"> label</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select One Course
                </option>
                <option> Computer Science: Programming with a Purpose</option>
                <option>Python for Everybody</option>
                <option>
                  Introduction to Computer Science and Programming
                </option>
                <option>IBM Full Stack Software Developer Professional</option>
                <option>Fundamentals of Computing</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
