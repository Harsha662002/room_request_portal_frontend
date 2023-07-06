import React from "react";

const Header = ({ clubName, picName }) => {
  return (
    <header className="flex items-end h-16 gap-20 px-8 pb-2 border-b border-black text-club-previous-requests-header-text">
      <h2 className="text-3xl">{clubName}</h2>
      <h2 className="text-3xl">{picName}</h2>
    </header>
  );
};

export default Header;
