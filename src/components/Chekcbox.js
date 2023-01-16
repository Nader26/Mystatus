import React from "react";
const Checkbox = ({
  checked,
  label,
  id,
  disabled,
  ariaInvalid,
  ariaLabelledby,
  onChange,
}) => {
  return (
    <>
      <div className="flex gap-3 ">
        <input
          type="checkbox"
          checked={checked}
          id={id}
          className=" "
          disabled={disabled}
          onChange={onChange}
          aria-invalid={ariaInvalid}
          aria-labelledby={ariaLabelledby}
        />
        <label htmlFor={id} className="">
          {label}
        </label>
      </div>
    </>
  );
};
export default Checkbox;
