import { ButtonUnstyled } from '@mui/base';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

export function Pessoa({ props, onDelete }) {

  const handleOnDelete = () => {
    onDelete(props.id);
    window.location.reload();
  }

  const onNavigate = () => {
    window.location.href += `adicionar/${props.id}`
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
          <Button onClick={onNavigate}>
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