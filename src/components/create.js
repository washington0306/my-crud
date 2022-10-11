
import { Button, Form } from 'semantic-ui-react';
import React, { useState, } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Create() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    


    const postData = () => {
        axios.post(`https://63442bb0242c1f347f80550c.mockapi.io/fakeData`, {
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
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>

                </Form.Field>
                <Form.Field>
                    <label>Sobre nome</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>

                </Form.Field>

                <Button onClick={postData} type='submit'>Postar</Button>

            </Form>
        </div>
    )
}