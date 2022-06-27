import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import './Add.css';

function Add({ onAdd, onUpdate }) {

  const [pessoaAtualizada, setPessoaAtualizada] = useState({});

  const { id } = useParams();
  const idNumber = id ? Number.parseInt(id, 10) : null

  useEffect(() => {
    if (idNumber !== null)
      fetchData();
  }, [])

  const fetchData = async () => {
    await fetch(`http://localhost:8080/pessoa/${idNumber}`)
      .then(res => res.json())
      .then(dados => setPessoaAtualizada(dados))
      .catch(err => console.log(err))
  }

  const handleOnAdd = (e) => {
    onAdd({
      nome: e.target.nome.value,
      telefone: e.target.telefone.value,
      email: e.target.email.value,
      cpf: e.target.cpf.value,
      endereco: e.target.endereco.value,
      bairro: e.target.bairro.value,
      cidade: e.target.cidade.value,
      estado: e.target.estado.value
    })
  }

  const handleOnUpdate = (e) => {
    onUpdate({
      id: pessoaAtualizada.id,
      nome: e.target.nome.value,
      telefone: e.target.telefone.value,
      email: e.target.email.value,
      cpf: e.target.cpf.value,
      endereco: e.target.endereco.value,
      bairro: e.target.bairro.value,
      cidade: e.target.cidade.value,
      estado: e.target.estado.value
    });
  }

  const handleOnOption = (e) => {
    if (idNumber) {
      handleOnUpdate(e);
    } else {
      handleOnAdd(e);
    }
  }

  return (
    <div style={{
      marginTop: 50,
      marginLeft: 200,
      marginRight: 200
    }}>
      <Form onSubmit={handleOnOption}>
        <div className="separador">
          <Form.Group className="mb-3" controlId="formNome">
            <Form.Label>{idNumber !== null ? pessoaAtualizada.nome : "Nome"}</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome" name="nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTelefone">
            <Form.Label>{idNumber !== null ? pessoaAtualizada.telefone : "Telefone"}</Form.Label>
            <Form.Control type="text" placeholder="Digite o telefone" name="telefone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{idNumber !== null ? pessoaAtualizada.email : "E-mail"}</Form.Label>
            <Form.Control type="email" placeholder="Digite o e-mail" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCpf">
            <Form.Label>{idNumber !== null ? pessoaAtualizada.cpf : "CPF"}</Form.Label>
            <Form.Control type="text" placeholder="Digite o CPF" name="cpf" />
          </Form.Group>
        </div>

        <div className="separador" style={{ marginLeft: 5 + '%' }}>
          <Form.Group className="mb-3" controlId="formEndereco">
            <Form.Label>{idNumber !== null ? pessoaAtualizada.endereco : "Endereço"}</Form.Label>
            <Form.Control type="text" placeholder="Digite o endereço" name="endereco" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBairro">
            <Form.Label>{idNumber !== null ? pessoaAtualizada.bairro : "Bairro"}</Form.Label>
            <Form.Control type="text" placeholder="Digite o bairro" name="bairro" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCidade">
            <Form.Label>{idNumber !== null ? pessoaAtualizada.cidade : "Cidade"}</Form.Label>
            <Form.Control type="text" placeholder="Digite a cidade" name="cidade" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEstado">
            <Form.Label>{idNumber !== null ? pessoaAtualizada.estado : "Estado"}</Form.Label>
            <Form.Control type="text" placeholder="Digite o estado" name="estado" />
          </Form.Group>
        </div>

        <div className="centro">
          <Button style={{ marginTop: 12 }} variant="success" type="submit"
            onSubmit={handleOnAdd} disabled={idNumber ? true : false}>
            Adicionar
          </Button>
          <Button style={{ marginLeft: 12, marginTop: 12 }} type="submit"
            onSubmit={handleOnUpdate} disabled={idNumber ? false : true}>
            Salvar
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Add