import { useRef } from "react";

const Form = (props) => {
  const passwordInputRef = useRef();
  const emailInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const passwordInput = passwordInputRef.current.value;
    const emailInput = emailInputRef.current.value;

    props.onFill({ emailInput, passwordInput });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Email
          <input
            type="email"
            className="border-2 rounded"
            ref={emailInputRef}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            className="border-2 rounded"
            ref={passwordInputRef}
          />
        </label>

        <button type="submit" className="rounded border-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
