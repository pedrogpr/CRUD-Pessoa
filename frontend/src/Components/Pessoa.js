import { Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

export function Pessoa({ props, onDelete, onLoad }) {

  const handleOnDelete = () => {
    onDelete(props.id);
    window.location.reload();
  }

  const handleOnLoadContato = () => {
    onLoad(props.id);
    window.location.href += 'adicionar'
  }

  //let url = window.location.href + 'adicionar'

  return (
    <>
      <tr>
        <td>{props.nome}</td>
        <td>{props.telefone}</td>
        <td>{props.email}</td>
        <td>{props.cpf}</td>
        <td>
            <Button onClick={handleOnLoadContato}>
              Alterar
            </Button>
          <Button style={{ marginLeft: 12 }} variant="danger" onClick={handleOnDelete}>
            Excluir
          </Button>
        </td>
      </tr>
      <tr>
        <td
          colSpan={2}
          style={{ fontWeight: 'bold', textAlign: 'center' }}>
          Endereço
        </td>
        <td colSpan={2}>
          {
            props.endereco + ',  ' +
            props.bairro + ',  ' +
            props.cidade + ',  ' +
            props.estado
          }
        </td>
      </tr>
    </>
  )
}