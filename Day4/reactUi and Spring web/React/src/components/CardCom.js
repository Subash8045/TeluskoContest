import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardCom = ({ products, deleteFn }) => {
  const onClickDeleteButton = (id) => {
    deleteFn(id);
  };

  return (
    <div style={{ height: '500px', overflow: 'auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products?.map((product) => (
          <div key={product.id}>
            <Card style={{ width: '18rem', margin: '10px' }} border="primary">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="mb-2">
                  <strong>Type:</strong> {product.type}
                </Card.Text>
                <Card.Text className="mb-2">
                  <strong>Place:</strong> {product.place}
                </Card.Text>
                <Card.Text className="mb-0">
                  <div className="d-flex justify-content-between">
                     <strong>
					  
					  <span style={{ color: product.warranty < 2023 ? 'red' : 'green' }}>
						Warranty:{product.warranty}
					  </span>
					</strong>
					<Button
                      variant="primary"
                      className="rounded-5 w-40 h-50"
                      onClick={() => onClickDeleteButton(product.id)}
                    >
                      delete
                    </Button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCom;
