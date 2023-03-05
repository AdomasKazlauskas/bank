import { useEffect, useState } from "react";
import "./BankApp.scss";
import AddNewAccount from "./components/AddNewAccount";
import AccountListItem from "./components/AccountListItem";
import Header from "./components/Header";
import getTotalCash from "./functions/getTotalCash";
import sortClients from "./functions/sortClients";
import PopUp from "./components/PopUp";
import { readFromLocalStorage } from "./functions/localStorage";

function Frame() {
  const [accounts, setAccounts] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState();

  useEffect(() => {
    const accountFromStorage = readFromLocalStorage("accounts");
    setAccounts(accountFromStorage);
  }, []);

  const sortedAccounts = sortClients(accounts);

  const handlePopUp = (isOpen, type) => {
    setShowPopUp(isOpen);
    setPopUpType(type);
  };

  return (
    <div>
      {showPopUp && false && (
        <PopUp setShowPopUp={setShowPopUp} type={popUpType} />
      )}
      <Header
        totalAccounts={accounts.length}
        totalAmount={getTotalCash(accounts)}
      />
      <div className="frame">
        <AddNewAccount
          setAccounts={setAccounts}
          accounts={accounts}
          handlePopUp={handlePopUp}
        />
        <table>
          <tbody>
            {sortedAccounts.map((account) => (
              <AccountListItem
                accounts={accounts}
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
