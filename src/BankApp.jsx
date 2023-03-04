import { useState } from "react";
import "./BankApp.scss";
import AddNewAccount from "./components/AddNewAccount";
import AccountListItem from "./components/AccountListItem";
import Header from "./components/Header";
import getTotalCash from "./functions/getTotalCash";

function Frame() {
  const list = [
    {
      id: 1,
      name: "Bob",
      surname: "Goodman",
      cash: 2450,
    },
    {
      id: 2,
      name: "Josh",
      surname: "O'Doneal",
      cash: 15422,
    },
    {
      id: 3,
      name: "Bosh",
      surname: "Brown",
      cash: 1422,
    },
  ];
  const [accounts, setAccounts] = useState(list);

  return (
    <div>
      <Header
        totalAccounts={accounts.length}
        totalAmount={getTotalCash(accounts)}
      />
      <div className="frame">
        <AddNewAccount setAccounts={setAccounts} />
        <table>
          <tbody>
            {accounts.map((account) => (
              <AccountListItem account={account} setAccounts={setAccounts} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Frame;
