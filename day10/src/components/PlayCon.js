import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const PlayCon = ({ question, players, counter, getHomeQuiz, code, name, getQuestion }) => {



  const cl = () => {
    console.log('hai');
  };

  const onClickStartButton = () => {
	getQuestion()
  };



  return (
    <div className='d-flex justify-content-between'>
      <div style={{ marginLeft: '70px' }}>
        <div style={{ fontSize: '50px' }}>Quiz Name {name}</div>
        <div style={{ marginLeft: '6px' }} className='d-flex'>
          <div style={{ marginTop: '3px' }}>Quiz Code {code}</div>
        </div>
        <MDBBtn
          style={{ marginTop: '40px' }}
          className='me-1'
          color='success'
          onClick={onClickStartButton}
        >
          Start
        </MDBBtn>
         
<>
  {question.map((q, index) => (
    <div key={index}>
      <div style={{ fontSize: '40px', marginTop: '40px', marginBottom: '30px' }}>
        {q.quest}
      </div>
      <div style={{ marginBottom: '30px' }}>
        <MDBBtn
          style={{ width: '200px' }}
          color={q.crt === 1 ? 'success' : 'danger'}
          className='ms-2'
          onClick={cl}
        >
          {q.ans1}
        </MDBBtn>
        <MDBBtn
          style={{ width: '200px' }}
          color={q.crt === 2 ? 'success' : 'danger'}
          className='ms-2'
          onClick={cl}
        >
          {q.ans2}
        </MDBBtn>
      </div>
      <div>
        <MDBBtn
          style={{ width: '200px' }}
          color={q.crt === 3 ? 'success' : 'danger'}
          className='ms-2'
          onClick={cl}
        >
          {q.ans3}
        </MDBBtn>
        <MDBBtn
          style={{ width: '200px' }}
          color={q.crt === 4 ? 'success' : 'danger'}
          className='ms-2'
          onClick={cl}
        >
          {q.ans4}
        </MDBBtn>
      </div>
    </div>
  ))}
</>

        
      </div>
      <div>
        <MDBTable style={{ width: '18rem' }}>
          <MDBTableHead>
            <tr>
              <th scope='col'>No</th>
              <th scope='col'>Name</th>
              <th scope='col'>Place</th>
              <th scope='col'>Points</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {players.map((player, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{player.name}</td>
                <td>{player.place}</td>
                <td>{player.point}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
};

export default PlayCon;
