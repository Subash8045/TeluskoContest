import React from 'react'

const Navbarin = ({getHome}) => {


  const onClickHome = () =>{
    getHome()
  }
  return (
    <div className="d-flex justify-content-between" style={{marginTop:'10px'}}>
        <div style={{marginLeft:'70px'}}>
            <strong style={{color:'black',marginTop:'5px'}}>
        <i class="fas fa-microscope" style={{marginRight:'5px'}}></i>   
        QuizApp
        </strong>
        </div>
        <div style={{marginLeft:'50px'}}>
        <button type="button" class="btn btn-light" data-mdb-ripple-color="dark" onClick={onClickHome}>Home</button>
        <button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Create</button>
        <button type="button" class="btn btn-secondary " 
        style={{backgroundColor:'#2E7D32',color:'white',marginRight:'70px',marginLeft:'30px'}}>Telusko</button>
        </div>
    </div>

  )
}

export default Navbarin