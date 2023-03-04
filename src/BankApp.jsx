import { useState } from "react";
import "./BankApp.scss";
import AddNewAccount from "./components/AddNewAccount";
import AccountListItem from "./components/AccountListItem";

function Frame() {
  const list = [
    {
      id: 1,
      name: "Bob",
      surname: "Goodman",
      cash: "2450",
    },
    {
      id: 2,
      name: "Josh",
      surname: "O'Doneal",
      cash: "15422",
    },
    {
      id: 3,
      name: "Bosh",
      surname: "Brown",
      cash: "1422",
    },
  ];
  const [accounts, setAccounts] = useState(list);

  return (
    <div className="frame">
      <AddNewAccount setAccounts={setAccounts} />
      <table>
        {accounts.map((account) => (
          <AccountListItem account={account} setAccounts={setAccounts} />
        ))}
      </table>
    </div>
  );
}

export default Frame;
