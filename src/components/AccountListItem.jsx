import { useState } from "react";
import Button from "./Button";

const AccountListItem = ({ account, setAccounts }) => {
  const [amount, setAmount] = useState(0);

  const handleAccountDelete = (id) => {
    setAccounts((prevState) =>
      prevState.filter((account) => account.id !== id)
    );
  };

  const handleCashDeposit = (id, amount) => {
    if (amount < 0) {
      alert("neleisiu");
      return;
    }
    setAccounts((prevState) =>
      prevState.map((account) =>
        account.id === id
          ? { ...account, cash: account.cash + amount }
          : account
      )
    );
  };

  const handleCashWithdrawal = (id, amount) => {
    if (amount < 0 || amount > account.cash) {
      alert("neleisiu");
      return;
    }
    setAccounts((prevState) =>
      prevState.map((account) =>
        account.id === id
          ? { ...account, cash: account.cash - amount }
          : account
      )
    );
  };

  return (
    <tr>
      <td>{account.name}</td>
      <td>{account.surname}</td>
      <td>{account.cash}</td>
      <td>
        <input
          min={0}
          type="number"
          onChange={(e) => setAmount(+e.target.value)}
        />
        <Button
          onClick={() => handleCashDeposit(account.id, amount)}
          label="pridėti lėšų"
        />
        <Button
          onClick={() => handleCashWithdrawal(account.id, amount)}
          label="nuskaičiuoti lėšas"
        />
      </td>
      <td>
        <Button
          label="Ištrinti"
          onClick={() => handleAccountDelete(account.id)}
          disabled={account.cash > 0}
        />
      </td>
    </tr>
  );
};

export default AccountListItem;
