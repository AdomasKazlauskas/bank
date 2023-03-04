import Button from "./Button";

const AccountListItem = ({ account, setAccounts }) => {
  const handleAccountDelete = (id) => {
    setAccounts((prevState) =>
      prevState.filter((account) => account.id !== id)
    );
  };

  return (
    <tr>
      <td>{account.name}</td>
      <td>{account.surname}</td>
      <td>{account.cash}</td>
      <td>
        <input type="number" />
        <Button onClick={setAccounts} label="pridėti lėšų" />
        <Button label="nuskaičiuoti lėšas" />
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
