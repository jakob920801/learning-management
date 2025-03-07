import React from "react";

const Header = ({ title, subtitle, rightElement }: HeaderProps) => {
  return (
    <div className="header">
      <div>
        <h1 className="header__title">{title}</h1>
        <h2 className="header__subtitle">{subtitle}</h2>
      </div>
      {rightElement && <div>{rightElement}</div>}
    </div>
  );
};

export default Header;
