const Header = ({ totalAccounts, totalAmount }) => {
  return (
    <header className="header-container">
      <div>emblema</div>
      <div>
        <div>Klientai: {totalAccounts}</div>
        <div>Pinigai: {totalAmount}</div>
      </div>
    </header>
  );
};

export default Header;
