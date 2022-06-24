import { Pessoa } from '../components/Pessoa';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(onLoad) {

  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    await fetch('http://localhost:8080/pessoa')
      .then(res => res.json())
      .then(dados => setPessoas(dados))
      .catch(err => console.log(err))
  }

  const onDelete = async (id) => {
    await fetch(`http://localhost:8080/pessoa/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status !== 200) {
          return;
        } else {
          setPessoas(pessoas.filter(pessoa => {
            return pessoa.id !== id;
          }))
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div style={{
      marginTop: 50,
      marginLeft: 100,
      marginRight: 100
    }}>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th rowSpan={3}>Opções</th>
          </tr>
        </thead>
        <tbody>
          {
            pessoas.map(pessoa => (
              <Pessoa props={pessoa} key={pessoa.id}
                onDelete={onDelete} onLoad={onLoad} />
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Home