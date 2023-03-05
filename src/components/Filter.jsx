import Button from "./Button";

const FilterButton = ({ accounts, setDisplayedAccounts }) => {
  const handleFilterWithCash = () => {
    const accountsWithCash = accounts.filter((account) => account.cash > 0);
    setDisplayedAccounts(accountsWithCash);
  };

  const handleFilterWithoutCash = () => {
    const accountsWithoutCash = accounts.filter(
      (account) => account.cash === 0
    );
    setDisplayedAccounts(accountsWithoutCash);
  };

  const handleFilterClearing = () => {
    setDisplayedAccounts(accounts);
  };

  return (
    <div>
      <Button onClick={handleFilterWithCash} label="Pilnos" />
      <Button onClick={handleFilterWithoutCash} label="Tuščios" />
      <Button onClick={handleFilterClearing} label="Visos" />
    </div>
  );
};

export default FilterButton;
