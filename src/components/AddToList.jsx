import { useRef } from "react";

function AddToList({ setList }) {
  const nameRef = useRef();
  const surnameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const surname = event.target.elements.surname.value;
    const newList = {
      id: 4,
      name,
      surname,
    };
    setList((prevList) => {
      return prevList.concat(newList);
    });
    nameRef.current.value = "";
    surnameRef.current.value = "";
  }

  return (
    <form className="addToList" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
      <input
        type="text"
        name="surname"
        placeholder="Enter Surname"
        ref={surnameRef}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToList;
