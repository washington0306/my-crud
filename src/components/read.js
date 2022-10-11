import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './index.css';

export default function Read() {

    const [APIData, setAPIData] = useState([]);
    useEffect(()=>{
        axios.get(`https://63442bb0242c1f347f80550c.mockapi.io/fakeData`)
        .then((response)=>{
            setAPIData(response.data);
        })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
     }

     const onDelete = (id) => {
        axios.delete(`https://63442bb0242c1f347f80550c.mockapi.io/fakeData/${id}`)
        .then(()=>{
            getData();
        })
        }

      const getData = () => {
        axios.get(`https://63442bb0242c1f347f80550c.mockapi.io/fakeData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }


    return (
        <div className='Header'>
            
                <h1>React Crud</h1>
                <Link to='/create'>Adicionar</Link>                
           

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Sobre nome</Table.HeaderCell>
                        <Table.HeaderCell>Atualizar</Table.HeaderCell>
                        <Table.HeaderCell>Excluir</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data)=> {
                        return(
                           <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                    <Button onClick={() => setData(data)}>Atualizar</Button>
                                    </Table.Cell>
                                </Link>

                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Excluir</Button>
                                </Table.Cell>
                                                        
                            </Table.Row>     
                        )
                                    
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}