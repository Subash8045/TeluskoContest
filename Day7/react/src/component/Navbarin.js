import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

const Navbarin = () => {
  return (
    <div>

      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1'>ShortUrl</MDBNavbarBrand>
          <div className='d-flex justify-content-between'>

          <MDBBtn  outline color='success'>
            TELUSKO
         </MDBBtn>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Navbarin