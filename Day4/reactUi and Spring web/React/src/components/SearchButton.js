import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const SearchButton = ({activeButton, setActiveButton,searchFn}) => {
	
	const[activeButtonLocal,setLocal] = useState("Home");

  const handleClick = (buttonName) => {
	      setActiveButton(buttonName);
		setLocal(buttonName);
	  if(buttonName === "Home") searchFn("Home")
    
    
  };

  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        variant="light"
        onClick={() => handleClick('Home')}
        style={{
          color: activeButtonLocal === 'Home' ? 'blue' : 'inherit',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        Home
      </Button>{' '}
      <Button
        variant="light"
        onClick={() => handleClick('Place')}
        style={{
          color: activeButtonLocal === 'Place' ? 'blue' : 'inherit',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        Place
      </Button>{' '}
      <Button
        variant="light"
        onClick={() => handleClick('Type')}
        style={{
          color: activeButtonLocal === 'Type' ? 'blue' : 'inherit',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        Type
      </Button>{' '}

      <Button
        variant="light"
        onClick={() => handleClick('Warranty')}
        style={{
          color: activeButtonLocal === 'Warranty' ? 'blue' : 'inherit',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        Warranty
      </Button>{' '}
      <Button
        variant="light"
        onClick={() => handleClick('Any')}
        style={{
          color: activeButtonLocal === 'Any' ? 'blue' : 'inherit',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        Any
      </Button>{' '}
    </div>
    </div>
  );
};

export default SearchButton;
