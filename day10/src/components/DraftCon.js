import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

const DraftCon = ({oldQuiz,goPlay}) => {

  const onClickStart = (id,name) =>{
      goPlay(id+1,name)
  }

  return (
<div className='d-flex flex-row justify-content-center' style={{marginTop:'30px'}}>
      {oldQuiz.map((quiz) => (
      
      <div key={quiz.id}>
  <MDBCard style={{margin:'30px',width:'15rem',background:'#00E676'}}>
    <MDBCardBody>
      <MDBCardTitle>{quiz.name}</MDBCardTitle>
      <MDBCardText>
        No of Questions
      </MDBCardText>
      <div className='d-flex justify-content-between'>
      <MDBCardText style={{fontSize:'40px'}}>
        {quiz.no}
      </MDBCardText>
      <MDBBtn color='success' style={{height:'36px',marginTop:'15px'}} onClick={()=>{onClickStart(quiz.id,quiz.name)}}>start</MDBBtn>
      </div>
    </MDBCardBody>
  </MDBCard>
</div>
    
    ))}
  </div>
  )
}

export default DraftCon
