import React, { useState ,useEffect} from 'react'
import Navbarin from './Navbarin.js'
import TopicCon from './TopicCon.js'
import DraftCon from './DraftCon.js'
import PlayCon from './PlayCon.js'
import axios from 'axios';

const Header = () => {



    const[oldQuiz,updateOldQuiz] = useState([
    ])
    
    const[ind,updateInd] = useState(0)
    
    const[questId,setQuestId] = useState(0)
    
    const[code,setCode] = useState(0)
	const[name,setName] = useState('')
    const codeGeneratorfn = async()=>{
		const response = await axios.get("http://localhost:8080/addQuiz");
		setCode(response.data)
	}
    
  useEffect(() => {
    const getRefs = async () =>{

      

          const response = await axios.get("http://localhost:8080/getQuizRef",
          
          );
          updateOldQuiz(response.data.map((doc) => ({
			no:doc.no,
			name:doc.name,
			id:doc.id
          })))
    }
    try
    {
		getRefs()
    }
    catch(e)
    {
      alert(e)
    }
    
  },[])
    

    const [questions,updateQuestions] = useState([
     

    ])

    const [players,updatePlayers] = useState([

])

const [flag,setFlag] = useState(true)


const goPlay = (id,namer) =>
{
    setFlag(false)
    codeGeneratorfn(id)
    setQuestId(id)
    setName(namer)
    playConStart()
}

const getHome = () => {
    setFlag(true)
}

const [counter,setCounter] = useState(5000)

const [question,updateQuestion] = useState({})


const getQuestion = ()=> {
	
	console.log(ind,questions)
	if(ind < questions.length){
	const d ={
	no: questions[ind].no,
    quest: questions[ind].question,
    ans1: questions[ind].ans1,
    ans2: questions[ind].ans2,
    ans3: questions[ind].ans3,
    ans4: questions[ind].ans4,
    crt: questions[ind].crt}
    updateQuestion(d)
    updateInd(ind+1)}
	
}

const playConStart = async () => {
  try {
	  console.log(questId)
    const response = await axios.get("http://localhost:8080/getQuestions/1" );
    console.log(response.data);
    const data = response.data.map((doc) => ({
      no: doc.no,
      quest: doc.question,
      ans1: doc.ans1,
      ans2: doc.ans2,
      ans3: doc.ans3,
      ans4: doc.ans4,
      crt: doc.crt,
    }));
    updateQuestions(data);
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
};




  return (
    <div>
        <Navbarin getHome={getHome}/>
    {flag && (
      <>
        
        <TopicCon />
        <DraftCon 
        oldQuiz={oldQuiz} 
        goPlay={goPlay}
        />
      </>
    )}
    {!flag && (
      <>
        <PlayCon 
        question={questions}
         players={players} 
         counter={counter}
         getHome={getHome}
         code={code}
         name={name}
         getQuestion={getQuestion}
         />
      </>
    )}
  </div>
  )
}

export default Header
