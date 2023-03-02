import { useRef } from "react";

function AddToList({ setList }) {
  const nameRef = useRef();
  const cashRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const cash = event.target.elements.cash.value;
    const newList = {
      id: 4,
      name,
      cash,
    };
    setList((prevList) => {
      return prevList.concat(newList);
    });
    nameRef.current.value = "";
    cashRef.current.value = "";
  }

  return (
    <form className="addToList" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
      <input type="text" name="cash" placeholder="Enter amount" ref={cashRef} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToList;
