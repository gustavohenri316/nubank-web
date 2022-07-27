import { 
  Container, 
  Button, 
  Img,
  A,
  Form,
  Input,
  Label 
} from './styles'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <Container>
      <Img src={logoImg} />
        <Form>
          <Label>CPF</Label>
          <Input type='text' id='CPF'/>
          <Label>Senha</Label>
          <Input type='password' />
      <Link to='/home'>
          <Button>
            Entrar
          </Button>
      </Link>
          <A>Esqueci minha senha</A>
        </Form>
    </Container>
  )
}