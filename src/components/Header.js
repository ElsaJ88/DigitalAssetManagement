import "../styles/App.css";

export const Header = () => {
  return (
    <>
      <div className="header-text">
        {" "}
        <img
          className="logo"
          src="https://raw.githubusercontent.com/ElsaJ88/DigitalAssetManagement/main/src/assets/logo3.png"
          alt="Subway Logo"
        />
        <div className="color1">Digital</div>
        <div className="color2">Assets</div>{" "}
      </div>{" "}
      <img
        className="rgn"
        src="https://www.rgn.nl/wp-content/uploads/2022/08/Group-1.svg"
        alt="RGN Logo"
      />
    </>
  );
};
