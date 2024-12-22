import "./Header.scss";

const Header = () => {
  return (
    <div className="header flex-col">
      <h3 className="font-bold ">오늘은</h3>
      <h1 className="font-bold text-3xl">{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
