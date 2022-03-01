import React from 'react';

const Header = (props) => {
  return (
    <>
      <header>
        <h1>{props.name}</h1>
        <ul className="menu">
          <li>{props.links}</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
