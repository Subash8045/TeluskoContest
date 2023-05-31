import React from 'react'

const TopicCon = () => {
  return (
    <div className="text-center" style={{fontSize:'40px',color:'black',marginTop:'70px'}}>
        <strong class="display-5" style={{fontWeight:'bold'}}>Create Quiz, Play With your Friends</strong>
        <div style={{fontSize:'18px',color:'grey',marginTop:'20px'}}>
            This quiz app lets you to create quiz and play with your friends.
            This is the part
            </div>
            <div style={{fontSize:'18px',color:'grey'}}>
            of challenge which is live in you tube channel called Telusko
            </div>
            
            <div className='d-flex justify-content-center' style={{marginTop:'30px'}}>
            <button type="button" class="btn btn-info"  style={{marginRight:'20px',background:'#2E7D32'}}>Create Quiz</button>
            <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Previous Quiz below</button>
              </div>


    </div>
  )
}

export default TopicCon