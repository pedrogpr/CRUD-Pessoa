import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import './Add.css';
import { validar } from "../utils/validacao";

function Add({ onAdd, onUpdate }) {

  //const [pessoaAtualizada, setPessoaAtualizada] = useState({});

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [endereco, setEndereco] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [mostrar, setMostrar] = useState(false)

  const { id } = useParams();
  const idNumber = id ? Number.parseInt(id, 10) : null

  useEffect(() => {
    if (idNumber !== null)
      fetchData();
  }, [])

  const fetchData = async () => {
    await fetch(`http://localhost:8080/pessoa/${idNumber}`)
      .then(res => res.json())
      .then(dados => {
        setNome(dados.nome)
        setTelefone(dados.telefone)
        setEmail(dados.email)
        setCpf(dados.cpf)
        setEndereco(dados.endereco)
        setBairro(dados.bairro)
        setCidade(dados.cidade)
        setEstado(dados.estado)
      })
      .catch(err => console.log(err))
  }

  const handleOnAdd = (e) => {

    if (!validar(e.target.cpf.value)) {
      alert("Insira um número de cadastro válido!")
      e.preventDefault();
      return;
    } else {
      setMostrar(true)
      onAdd({
        nome: nome,
        telefone: telefone,
        email: email,
        cpf: cpf,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado
      }, e)
    }
  }

  const handleOnUpdate = (e) => {

    if (!validar(e.target.cpf.value)) {
      alert("Insira um número de cadastro válido!")
      e.preventDefault();
      return;
    } else {
      setMostrar(true)
      onUpdate({
        id: idNumber,
        nome: nome,
        telefone: telefone,
        email: email,
        cpf: cpf,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado
      }, e);
    }
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
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome" name="nome"
              value={nome} onChange={e => setNome(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Digite o telefone" name="telefone"
              value={telefone} onChange={e => setTelefone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite o e-mail" name="email"
              value={email} onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="Digite o CPF" name="cpf"
              value={cpf} onChange={e => setCpf(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className="separador" style={{ marginLeft: 5 + '%' }}>
          <Form.Group className="mb-3" controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" placeholder="Digite o endereço" name="endereco"
              value={endereco} onChange={e => setEndereco(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBairro">
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" placeholder="Digite o bairro" name="bairro"
              value={bairro} onChange={e => setBairro(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="Digite a cidade" name="cidade"
              value={cidade} onChange={e => setCidade(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEstado">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" placeholder="Digite o estado" name="estado"
              value={estado} onChange={e => setEstado(e.target.value)}
            />
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

      {mostrar && (
        <div className="centro-cadastro">
          <Alert variant="success">
            <strong>{ idNumber ? "Cadastro alterado com sucesso!" : "Cadastro adicionado com sucesso!"}</strong>
          </Alert>
        </div>
      )}
      
    </div>
  )
}

export default Add