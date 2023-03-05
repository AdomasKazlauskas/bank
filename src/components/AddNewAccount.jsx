import { useState } from "react";
import { writeToLocalStorage } from "../functions/localStorage";
import Button from "./Button";

const AddNewAccount = ({ accounts, setAccounts, handlePopUp }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleAddAccount = (event) => {
    event.preventDefault();
    const newAccount = {
      id: Math.random(), //uuid
      cash: 0,
      name,
      surname,
    };
    const updatedAccounts = [...accounts, newAccount];

    setAccounts(updatedAccounts);
    writeToLocalStorage("accounts", updatedAccounts);

    setName("");
    setSurname("");
    handlePopUp(true, "create");
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

      <Button disabled={!name || !surname} label="Add" type="submit" />
    </form>
  );
};

export default AddNewAccount;
