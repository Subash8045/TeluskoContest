import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState} from 'react';

const AddForm = ({ prodCount ,addFn}) => {

  //stats logic

  let width1 = (prodCount.blackDrawer / prodCount.count) * 100;
  width1 = parseInt(width1).toString().concat("%");

  let width2 = (prodCount.whiteDrawer / prodCount.count) * 100;
  width2 = parseInt(width2).toString().concat("%");

  let width3 = (prodCount.blackTable / prodCount.count) * 100;
  width3 =parseInt(width3).toString().concat("%");

  let width4 = (prodCount.whiteTable / prodCount.count) * 100;
  width4 = parseInt(width4).toString().concat("%");

  let width5 = (prodCount.brownDrawer / prodCount.count) * 100;
  width5 = parseInt(width5).toString().concat("%");

  const[name,updateName] = useState("");
  const[place,updatePlace] = useState("");
  const[type,updateType] = useState("");
  const[warranty,updateWarranty ]= useState("");


  const  onClickInputButton = () =>{
    
    if(!name || !type || !place || !warranty)
    {
      alert("Please add Product")
      return
    }

    let prod = {
        name:name,
        type:type,
        place:place,
        warranty:warranty
    }
    addFn(prod)
    updateName("")
    updatePlace("")
    updateType("")
    updateWarranty("")
  }


  return (
    <div className="d-flex justify-content-between">
      <div>
  <Card style={{ width: '65rem' }}>
    <Card.Body>
      <Card.Title style={{ color: 'blue', fontSize: '30px', marginBottom: "20px" }}>
        Stats
      </Card.Title>
      <Card.Text className="mb-2" style={{ fontSize: '15px' }}>
        Black Drawer: {width1}
      </Card.Text>

      <div
        style={{ height: '15px', background: 'blue', width: width1, marginBottom: "25px" }} className="rounded-5"
      ></div>
      <Card.Text className="mb-2" style={{ fontSize: '15px' }}>
        White Drawer: {width2}
      </Card.Text>

      <div
        style={{ height: '15px', background: 'blue', width: width2, marginBottom: "25px" } } className="rounded-5"
      ></div>

      <Card.Text className="mb-2" style={{ fontSize: '15px' }}>
        Black Table: {width3}
      </Card.Text>

      <div
        style={{ height: '15px', background: 'blue', width: width3, marginBottom: "25px" }}  className="rounded-5"
      ></div>

      <Card.Text className="mb-2" style={{ fontSize: '15px' }}>
        White Table: {width4}
      </Card.Text>

      <div
        style={{ height: '15px', background: 'blue', width: width4, marginBottom: "25px" }} className="rounded-5"
      ></div>

      <Card.Text className="mb-2" style={{ fontSize: '15px' }}>
        Brown Table: {width5}
      </Card.Text>

      <div
        style={{ height: '15px', background: 'blue', width: width5, marginBottom: "28px" }} className="rounded-5"
      ></div>
    </Card.Body>
  </Card>
</div>


      <div style={{ width: '300px', marginLeft: '10px', marginRight: '10px' }}>
        <hr className="mt-0" />
        <div style={{ color: 'blue', textAlign: 'center' }}>ADD PRODUCT</div>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" 
            value={name} onChange={(e) => updateName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" placeholder="Type" 
            value={type} onChange={(e) => updateType(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Place</Form.Label>
            <Form.Control type="text" placeholder="Place" 
                        value={place} onChange={(e) => updatePlace(e.target.value)}
                        />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Warranty</Form.Label>
            <Form.Control type="text" placeholder="Warranty" 
            value={warranty} onChange={(e) => updateWarranty(e.target.value)}/>
          </Form.Group>

          <Button variant="primary"  style={{ marginLeft: '200px' }} onClick={onClickInputButton}>
            Add
          </Button>
        </Form>

        <hr className="mt-2" />
      </div>
    </div>
  );
};

export default AddForm;
