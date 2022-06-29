import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home"
import Add from "./pages/Add"
import { useState } from "react";


function App() {

  const [pessoas, setPessoas] = useState([]);

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

  const onUpdate = async (pessoaAtualizada) => {
    await fetch(`http://localhost:8080/pessoa/${pessoaAtualizada.id}`, {
      method: 'PUT',
      body: JSON.stringify(pessoaAtualizada),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      }
    })
      .then(res => {
        setPessoas(pessoas.filter(pessoa => {
          return pessoa.id !== pessoaAtualizada.id;
        }))
        return res.json();
      })
      .then(dados => {
        setPessoas(pessoas => [...pessoas, dados])
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <Home />
          } />
          <Route path="/adicionar" element={
            <Add onAdd={onAdd} />
          } />
          <Route path="/adicionar/:id" element={
            <Add onUpdate={onUpdate} />
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
