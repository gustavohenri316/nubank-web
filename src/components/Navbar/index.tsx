import { Container, Img, Button } from './styles'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
export  function Navbar() {
  return (
    <Container>
      <Img src={logoImg}/>
      <Link to='/'>
      <Button>Acessar outra conta</Button>
      </Link>
    </Container>
  )
}
