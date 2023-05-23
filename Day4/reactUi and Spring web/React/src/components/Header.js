import React, { useState, useEffect } from 'react';
import Navbarin from './Navbarin.js';
import SearchButton from './SearchButton.js';
import CardCom from './CardCom.js';
import AddForm from './AddForm.js'
import axios from 'axios';

const Header = () => {
  const [products, updateProducts] = useState([]);
  const [activeButton, setActiveButton] = useState('Home');
  const[prodCount,updateProdCount] = useState({
    backDrawer:5,
    whiteDrawer:0,
    blackTable:0,
    whiteTable:0,
    brownDrawer:0,
    count:10
  })
  
  const getProd = async () =>{
		 
    
          const response = await axios.get("http://localhost:8080/get-all")
          updateProducts(response.data.map((prod) => ({
            id:prod.productId,
            type: prod.type,
            place: prod.place,
            warranty: prod.warranty,
            name: prod.name
          })))
	  }

useEffect(() => {
	  
	
try{
	    getProd();
	   updateCounterFn();
}
 catch(e)
    {
      alert(e)
    }
  }, []);

  const  addProduct =async(newProduct) => 
  {		
		newProduct.warranty = parseInt(newProduct.warranty)
		let prodId = 0
		await axios.post("http://localhost:8080/save-product",newProduct)
		.then((res) => {prodId = res.data})
		
		const prod = {
			
			id : prodId,
			name:newProduct.name,
			palce:newProduct.place,
			type:newProduct.type,
			warranty:newProduct.warranty,
			}
	    updateProducts([...products,prod]) 
	     updateCounterFn()


  }

  const deleteProduct = async(id) => {
	  
	  let url = "http://localhost:8080/delete/"
	  url = url.concat(id)
	  await axios.delete(url)
    updateProducts(prevProducts => prevProducts.filter(prod => prod.id !== id))
    updateCounterFn()
  }
  
 const updateCounterFn = async () => {
  let response = {};
  await axios.get("http://localhost:8080/get-counter")
    .then((res) => {
      response = res.data;
    })
    .catch((error) => {
      alert(error)
    });
    
  //  console.log(response)
  
  let temp = {
	 blackDrawer: response.black,
    whiteDrawer: response.white,
    blackTable: response.blackTable,
    whiteTable: response.whiteTable,
    brownDrawer: response.brown,
	 count:response.count
  }

  updateProdCount(temp);
  
  console.log(prodCount)
};


const getName = async (str) =>{
		 
    
          const response = await axios.get("http://localhost:8080/getBy-name/"+str)
          updateProducts(response.data.map((prod) => ({
            id:prod.productId,
            type: prod.type,
            place: prod.place,
            warranty: prod.warranty,
            name: prod.name
          })))
	  }

const getPlace = async (str) =>{
		 
    
          const response = await axios.get("http://localhost:8080/getBy-place/"+str)
          updateProducts(response.data.map((prod) => ({
            id:prod.productId,
            type: prod.type,
            place: prod.place,
            warranty: prod.warranty,
            name: prod.name
          })))
	  }

const getAny = async (str) =>{
		 
    
          const response = await axios.get("http://localhost:8080/getBy-any/"+str)
          updateProducts(response.data.map((prod) => ({
            id:prod.productId,
            type: prod.type,
            place: prod.place,
            warranty: prod.warranty,
            name: prod.name
          })))
	  }

const getWarn = async (str) =>{
		 
    
          const response = await axios.get("http://localhost:8080/getOutOfWaran")
          updateProducts(response.data.map((prod) => ({
            id:prod.productId,
            type: prod.type,
            place: prod.place,
            warranty: prod.warranty,
            name: prod.name
          })))
	  }




const search = (str) => {
	
	if(activeButton === "Home") getProd()
	else if(activeButton === "Name") getName(str)
	else if(activeButton === "Place") getPlace(str)
	else if(activeButton === "Warranty") getWarn()
	else getAny(str)
} 


  return (
    <div>
      <Navbarin
      activeButton = {activeButton}
      setActiveButton={setActiveButton}
      searchFn={search}
       />
      <CardCom 
      products={products}
      deleteFn={deleteProduct}
      />
      <AddForm 
      prodCount={prodCount}
      addFn={addProduct}
      
      />
    </div>
  );
};

export default Header;
