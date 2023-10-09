import React from 'react'
import { Card } from 'react-bootstrap'

function Title({title,discription}) {
  return <>
 <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>${title}<i className="fa-solid fa-pen p-3" style={{color: "#19191a;"}}></i><i className="fa-solid fa-trash-can" style={{color: "#111212;"}}></i></Card.Title>
        
        <Card.Text>
      ${discription}
        </Card.Text>
     
      </Card.Body>
    </Card>
  </>
}

export default Title