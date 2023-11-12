import React, {useRef, useImperativeHandle} from "react";
import classes from "./InputDiv.module.css";

const InputDiv = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }
  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  })

  return (
    <React.Fragment>
      <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
        <label htmlFor={props.htmlFor}>{props.label}</label>
        <input
          ref={inputRef}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </React.Fragment>
  );
});

export default InputDiv;
