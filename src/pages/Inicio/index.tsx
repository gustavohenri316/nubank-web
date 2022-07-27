import { Container, Button, Img } from './styles'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Inicio() {
  return (
    <Container>
      <Img src={logoImg} />
      <Link to='/login'>
        <Button>
          Entrar
        </Button>
      </Link>
    </Container>
  )
}
