import { React, useEffect, useState } from "react";
import Checkbox from "./Chekcbox";
function Tasks() {
  const [isComplete, setIsComplete] = useState(false);
  const [selected1, setSelected1] = useState(
    localStorage.getItem("workout") === "true"
  );
  const [selected2, setSelected2] = useState(
    localStorage.getItem("meditation") === "true"
  );
  const [selected3, setSelected3] = useState(
    localStorage.getItem("neck") === "true"
  );

  useEffect(() => {
    if (selected1 & selected2 & selected3) setIsComplete(true);
    else setIsComplete(false);
  }, [selected1, selected2, selected3]);
  const reset = () => {
    localStorage.setItem("workout", false);
    localStorage.setItem("neck", false);
    localStorage.setItem("meditation", false);
  };
  return (
    <div>
      <div className=" justify-center flex mt-10  ">
        <form
          action=""
          className="flex flex-col items-center gap-5 absolute bottom-10  "
        >
          <Checkbox
            checked={selected1}
            id="workout"
            label="30 mins workout"
            onChange={(e) => {
              localStorage.setItem("workout", `${e.target.checked}`);
              setSelected1(e.target.checked);
              console.log(e.target.checked);
            }}
          />
          <Checkbox
            checked={selected2}
            id="meditation"
            label="10 mins meditation"
            onChange={(e) => {
              localStorage.setItem("meditation", `${e.target.checked}`);
              setSelected2(e.target.checked);
              console.log(e.target.checked);
            }}
          />
          <Checkbox
            checked={selected3}
            id="neck"
            label="2 sets neck training"
            onChange={(e) => {
              localStorage.setItem("neck", `${e.target.checked}`);
              setSelected3(e.target.checked);
              console.log(e.target.checked);
            }}
          />

          <h1 className="complete px-5 py-1 rounded-md text-2xl tracking-widest">
            {isComplete ? "ATTA BOY!" : "Are you a pussy?"}
          </h1>
          {isComplete && (
            <button onClick={reset} className="bg-white rounded-md px-3">
              Reset
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Tasks;
