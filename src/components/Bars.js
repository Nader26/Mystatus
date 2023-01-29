import { useState, useRef } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Bars() {
  const [Physicality, setPhysicality] = useState(false);
  const [PhysicalityValue, setPhysicalityValue] = useState(
    localStorage.getItem("PhysicalityValue") || 25
  );
  const [mentality, setMentality] = useState(false);
  const [mentalityValue, setMentalityValue] = useState(
    localStorage.getItem("mentalityValue") || 25
  );
  const [smv, setSmv] = useState(false);
  const [smvValue, setSmvValue] = useState(
    localStorage.getItem("smvValue") || 25
  );
  const PhysicalityValueRef = useRef(null);
  const MentalityValueRef = useRef(null);
  const SMVValueRef = useRef(null);
  return (
    <div>
      <div className="w-[80%] m-auto flex flex-col justify-between gap-14">
        <div>
          <div className="text-center text-xl mb-2 tracking-wide">
            Physicality
          </div>
          <div className=" ">
            <div className="flex items-center gap-5 flex-wrap">
              <svg
                onClick={() => {
                  setPhysicality(!Physicality);
                }}
                className="w-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                ></path>
              </svg>

              {Physicality && (
                <div>
                  <form action="">
                    <input
                      type="number"
                      className="w-12 rounded-md"
                      ref={PhysicalityValueRef}
                    />
                    <button
                      type="submit"
                      className="mx-5 bg-black text-white rounded-md px-5 py-1"
                      onClick={() => {
                        localStorage.setItem(
                          "PhysicalityValue",
                          PhysicalityValueRef.current.value
                        );
                      }}
                    >
                      submit
                    </button>
                  </form>
                </div>
              )}
            </div>
            <ProgressBar completed={PhysicalityValue} animateOnRender={true} />
          </div>
        </div>
        <div>
          <div className="text-center text-xl mb-2 tracking-wide">
            Mentality
          </div>
          <div className="flex items-center gap-5">
            <svg
              onClick={() => {
                setMentality(!mentality);
              }}
              className="w-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              ></path>
            </svg>

            {mentality && (
              <div>
                <form action="">
                  <input
                    type="number"
                    className="w-12 rounded-md"
                    ref={MentalityValueRef}
                  />
                  <button
                    type="submit"
                    className="mx-5 bg-black text-white rounded-md px-5 py-1"
                    onClick={() => {
                      localStorage.setItem(
                        "mentalityValue",
                        MentalityValueRef.current.value
                      );
                    }}
                  >
                    submit
                  </button>
                </form>
              </div>
            )}
          </div>
          <ProgressBar completed={mentalityValue} animateOnRender={true} />
        </div>
        <div>
          <div className="text-center text-xl mb-2 tracking-wide">SMV</div>
          <div className="flex items-center gap-5">
            <svg
              onClick={() => {
                setSmv(!smv);
              }}
              className="w-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              ></path>
            </svg>

            {smv && (
              <div>
                <form action="">
                  <input
                    type="number"
                    className="w-12 rounded-md"
                    ref={SMVValueRef}
                  />
                  <button
                    className="mx-5 bg-black text-white rounded-md px-5 py-1"
                    type="submit"
                    onClick={() => {
                      localStorage.setItem(
                        "smvValue",
                        SMVValueRef.current.value
                      );
                    }}
                  >
                    submit
                  </button>
                </form>
              </div>
            )}
          </div>
          <ProgressBar completed={smvValue} animateOnRender={true} />
        </div>
      </div>
    </div>
  );
}

export default Bars;
