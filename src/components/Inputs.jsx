import React from "react";
import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import validator from 'validator'



function Inputs(props) {
    const [nuevoColaborador, setNuevoColaborador]=useState({nombre:"",correo:""})  
    const handleChange = (e,propiedad)=>{
        setNuevoColaborador({...nuevoColaborador,[propiedad]:e.target.value})

      }
      const handleClick = (e)=>{
        e.preventDefault()
        if (nuevoColaborador.nombre) {
            var email = nuevoColaborador.correo
            if (validator.isEmail(email)) {
                props.setColaboradores([...props.colaboradores, {...nuevoColaborador,id:Date.now()}]);
                document.getElementsByClassName("nombre")[0].value=''
                document.getElementsByClassName("correo")[0].value=''
                setNuevoColaborador({nombre:"",correo:""})
            } else {
                alert('Ingrese Un correo valido ')
            }        
                    
        }else{
            alert('El campo nombre no debe estar vacio')
        }        
      }

    
    
    return (
        <div className="inputs">
            <InputGroup className="mb-0">
                <FloatingLabel controlId="floatingInput" label="Colaborador" className="mb-0" >
                    <Form.Control className="nombre" type="text" placeholder="Nombre de Colaborador" name="nombre" 
                        onChange={(e)=> handleChange(e,"nombre")}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Email">
                    <Form.Control className="correo" type="email" placeholder="Email" name="correo" onChange={(e)=> handleChange(e,"correo")}/>
                </FloatingLabel>
                <Button className="mb-0" variant="primary" type="submit" onClick={(e)=> { handleClick(e) }}>Guardar</Button>
            </InputGroup>    
        </div>
    )
}

export default Inputs;