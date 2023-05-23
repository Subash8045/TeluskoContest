import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchButton from './SearchButton';
import { useState} from 'react';


const Navbarin = ({activeButton, setActiveButton,searchFn}) => {
	
	const [searchLocal,setSearchLocal] = useState("");
	
	const  onClickInputButton = () =>{
		
	
    
    if(!searchLocal &&  activeButton !== "Warranty")
    {
      alert("Please enter some text to search")
      return
    }
	searchFn(searchLocal)
	setSearchLocal("")
  }
	
	
  return (
    <div>
    <Navbar  expand="lg">
    <Container fluid>
    <Navbar.Brand href="#" style={{ color: 'blue' }} >Product Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <SearchButton activeButton={activeButton} setActiveButton={setActiveButton} searchFn={searchFn}/>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            value={searchLocal}
            aria-label="Search"
            onChange={(e) => setSearchLocal(e.target.value)}
          />
          <Button variant="primary" className="rounded-0 w-50 h-50" onClick={onClickInputButton}>search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <hr className='mt-0 '/>

  </div>

  );
};

export default Navbarin;
