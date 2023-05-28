import React from 'react'
import {
  MDBInputGroup
} from 'mdb-react-ui-kit';

import { MDBBadge } from 'mdb-react-ui-kit';

import { MDBBtn } from 'mdb-react-ui-kit';

import img from './img.jpg'

import { useState } from 'react';

const MainCon = ({getUrlFn,shortUrl}) => {

  const [urlInput , setUrlInput] = useState("");

  const getUrlLocal = () =>{
    getUrlFn(urlInput)
  }



  return (

    <div className='d-flex justify-content-between'>



    <div style={{fontSize:'32px',marginLeft:'100px',marginTop:"30px"}}>
      
      <strong>
      Upset With Long Link<br/>
      TRY Shorter Link<br/>
      East To Send<br/><br/>
      </strong>
      <div style={{fontSize:'14px'}}>
      enter the longer url in this box and get the shorter url.This project<br/>
      is part of challenge which is live in you tube channel called Telusko<br/>
      you can also participate and learn nwe thing daily...  <br/><br/>
      </div>
      <div style={{width:'400px'}} className='d-flex justify-content-between'>
      <MDBInputGroup >
      <input className='form-control ' type='text' placeholder='Url' value={urlInput} 
       onChange={(e) => setUrlInput(e.target.value)}/>
    </MDBInputGroup>
    <MDBBtn  outline color='success' style={{marginLeft:'10px'}}  onClick={getUrlLocal}>
          GENERATE
         </MDBBtn>
      </div>

      <MDBBadge color='success' light style={{marginTop:'30px'}} 
     
      > {shortUrl}</MDBBadge>

      </div>

      <div style={{width:'550px',height:'550px'}}>
      <img src={img} />

      </div>

      </div>
  )
}

export default MainCon
