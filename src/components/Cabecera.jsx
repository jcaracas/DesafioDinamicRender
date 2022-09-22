import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Cabecera() {
    return (
        <div className="listArea">
            <ListGroup horizontal>
                <ListGroup.Item className="col2" variant="primary">Nombres</ListGroup.Item>
                <ListGroup.Item className="col2" variant="primary">Email</ListGroup.Item>
                <ListGroup.Item className="col1" variant="primary">Acciones</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Cabecera;