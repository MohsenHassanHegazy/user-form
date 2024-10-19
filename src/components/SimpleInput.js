import react, { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [validName, setValidName] = useState(false);
  const [first, setFirst] = useState(true);

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    setFirst(false);
    if (enteredName.trim() === "") {
      setValidName(false);
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setValidName(true);
  };
  const clas = first || validName ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={SubmitHandler}>
      <div className={clas}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {!first && !validName && <p className="error-text">name cant be empty</p>}
    </form>
  );
};

export default SimpleInput;
