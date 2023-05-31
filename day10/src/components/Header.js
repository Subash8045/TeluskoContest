import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';

const Header = () => {
  const [score, setScore] = useState(0);

  const cl = (id) => {
    if(questions[questionIndex].crt === id)
    setScore(score + 10);

  };

  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = [

  
  ];

  const onClickJoin = async() =>{
        const response = await axios.get("http://localhost:8080/addUser/"+code+"/"+name);
        
        if(code === 33) {
			
			
		}

        response.data.map((doc) =>{
            questions.push(doc)
        })
  }

  const [code,updateCode] = useState(0)
  const[name,updateName] = useState('')


  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert('Your score : '+score);
    }
  };

  const currentQuestion = questions[questionIndex];

  return (
    <div>
      <div className="input-group mb-3" style={{ width: '200px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Quiz Code"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={code}
          onChange={(e) => updateCode(e.target.value)}

        />
      </div>

      <div className="input-group mb-3" style={{ width: '200px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          aria-label="name"
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
      </div>

      <button type="button" className="btn btn-success" onClick={onClickJoin}>
        Join
      </button>

      {questions.length > 0 ? (
        <div key={currentQuestion.no}>
          <div style={{ fontSize: '40px', marginTop: '40px', marginBottom: '30px' }}>
            {currentQuestion.quest}
          </div>
          <div style={{ marginBottom: '30px' }}>
            <MDBBtn
              style={{ width: '200px' }}
              color='success'
              className="ms-2"
              onClick={()=>{cl(1)}}
            >
              {currentQuestion.ans1}
            </MDBBtn>
            <MDBBtn
              style={{ width: '200px' }}
              color='success'
              className="ms-2"
              onClick={()=>{cl(2)}}
            >
              {currentQuestion.ans2}
            </MDBBtn>
          </div>
          <div>
            <MDBBtn
              style={{ width: '200px' }}
              color='success'
              className="ms-2"
              onClick={()=>{cl(3)}}
            >
              {currentQuestion.ans3}
            </MDBBtn>
            <MDBBtn
              style={{ width: '200px' }}
              color='success'
              className="ms-2"
              onClick={()=>{cl(4)}}
            >
              {currentQuestion.ans4}
            </MDBBtn>
          </div>
        </div>
      ) : (
        <div>No questions available.</div>
      )}

      <button type="button" className="btn btn-primary mt-3" onClick={handleNextQuestion}>
        Next
      </button>

      <div style={{ marginTop: '20px' }}>Score: {score}</div>
    </div>
  );
};

export default Header;
