import React, { useState } from 'react'
import Navbarin from './Navbarin'
import MainCon from './MainCon'
import axios from 'axios';
const Header = () => {

const [shortUrl,updateShortUrl] = useState("ShortUrl");
   

const getUrl = async (urlInput) => {
	
    try {
      const response = await axios.post("http://localhost:8080/generateShortUrl", {
        url: urlInput
      });
      
      updateShortUrl(response.data)
    } catch (error) {
      console.error(error);
    }
  }




  return (
    <div>
        <Navbarin/>
        <MainCon
        
        getUrlFn = {getUrl}
        shortUrl={shortUrl}
        />
    </div>
  )
}

export default Header
