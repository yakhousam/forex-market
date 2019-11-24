import React from "react";

const Header = () => {
  return (
    <header>
      Header
      <style jsx>{`
        grid-row: 1;
        grid-column: 1 / span 2;
        border: solid black thin;
      `}</style>
    </header>
  );
};

export default Header;
