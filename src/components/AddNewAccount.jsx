import { useState } from "react";
import Button from "./Button";

const AddNewAccount = ({ setAccounts }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleAddAccount = (event) => {
    event.preventDefault();
    const newAccount = {
      id: 4, //uuid
      cash: 0,
      name,
      surname,
    };
    setAccounts((prevState) => [...prevState, newAccount]);
    setName("");
    setSurname("");
  };

  return (
    <form className="addToList" onSubmit={handleAddAccount}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="surname"
        placeholder="Enter Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />

      <Button
        disabled={!name || !surname}
        label="Add"
        //onClick={handleAddAccount}
      />
    </form>
  );
};

export default AddNewAccount;
