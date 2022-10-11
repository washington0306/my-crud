import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Update() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://63442bb0242c1f347f80550c.mockapi.io/fakeData/${id}`, {
            firstName,
             lastName,
        }).then(()=>{
            navigate('/')
        })
    }


    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                        <label>Nome</label>
                        <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Sobre nome</label>
                        <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Field>
                    
                      <Button type='submit' onClick={updateAPIData}>Atualizar</Button>  
                    
                    
            </Form>
        </div>
    )
}