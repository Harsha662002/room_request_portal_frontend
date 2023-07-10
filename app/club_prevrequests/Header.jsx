import React from "react";

const Header = ({ clubName, picName }) => {
  return (
    <header className="flex items-end justify-between h-16 px-8 pb-2 border-b border-black md:gap-20 md:justify-normal text-club-previous-requests-header-text">
      <h2 className="text-lg sm:text-xl md:text-3xl">{clubName}</h2>
      <h2 className="text-lg sm:text-xl md:text-3xl">{picName}</h2>
    </header>
  );
};

export default Header;
