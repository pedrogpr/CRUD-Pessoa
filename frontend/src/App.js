import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Add from "./pages/Add"
import { useState } from "react";


function App() {

  const [pessoas, setPessoas] = useState([]);
  const [pessoaAtualizada, setPessoaAtualizada] = useState({});

  const onAdd = async (pessoa) => {
    await fetch('http://localhost:8080/pessoa', {
      method: 'POST',
      body: JSON.stringify(pessoa),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      }
    })
      .then(res => {
        if (res.status !== 201) {
          return
        } else {
          return res.json();
        }
      })
      .then(dados => {
        setPessoas(pessoas => [...pessoas, dados])
      })
      .catch(err => console.log(err))
  }

  const loadPessoa = async (id) => {
    await fetch(`http://localhost:8080/pessoa/${id}`)
      .then(res => res.json())
      .then(dados => setPessoaAtualizada(dados))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
          <Home onLoad={loadPessoa}/>
          } />
          <Route path="/adicionar" element={
            <Add onAdd={onAdd} props={pessoas} pessoaAlt={pessoaAtualizada} />
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
