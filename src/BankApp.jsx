import { useState } from "react";
import "./BankApp.scss";
import AddNewAccount from "./components/AddNewAccount";
import AccountListItem from "./components/AccountListItem";
import Header from "./components/Header";
import getTotalCash from "./functions/getTotalCash";
import sortClients from "./functions/sortClients";
import PopUp from "./components/PopUp";

function Frame() {
  const list = [
    {
      id: 1,
      name: "Bob",
      surname: "Goodman",
      cash: 0,
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
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState();

  const sortedAccounts = sortClients(accounts);

  const handlePopUp = (isOpen, type) => {
    setShowPopUp(isOpen);
    setPopUpType(type);
  };

  return (
    <div>
      {showPopUp && <PopUp setShowPopUp={setShowPopUp} type={popUpType} />}
      <Header
        totalAccounts={accounts.length}
        totalAmount={getTotalCash(accounts)}
      />
      <div className="frame">
        <AddNewAccount setAccounts={setAccounts} handlePopUp={handlePopUp} />
        <table>
          <tbody>
            {sortedAccounts.map((account) => (
              <AccountListItem
                account={account}
                setAccounts={setAccounts}
                handlePopUp={handlePopUp}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Frame;
