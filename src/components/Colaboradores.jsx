import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function Colaboradores(props) {
    
    return (
        <div className="listArea">
            <div className="list">
                <ListGroup>
                    <ListGroup horizontal key={props.id}>
                        <ListGroup.Item className="col2">{props.name}</ListGroup.Item>
                        <ListGroup.Item className="col2">{props.email}</ListGroup.Item>
                        <ListGroup.Item className="col1">
                            <Button className="m-0" variant="outline-secondary" type="submit" >Editar</Button>
                            <Button className="m-0" variant="outline-danger" type="submit" >Eliminar</Button>
                        </ListGroup.Item>
                    </ListGroup>   
                </ListGroup>  
            </div>
        </div>        
    )
}

export default Colaboradores;