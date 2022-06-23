import './App.css';
import Sidebar from './Components/Sidebar';
import { Pessoa } from './Components/Pessoa';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Table striped bordered hover
        style={{
          marginTop: 50,
          marginLeft: 50,
          marginRight: 50
        }}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <Pessoa />
        </tbody>
      </Table>
    </div>
  );
}

export default App;
