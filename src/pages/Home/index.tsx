import { Cart } from '../../components/Cart'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { Options } from '../../components/Options'
import { Sidebar } from '../../components/Sidebar'
import { Container, Content } from './styles'

export function Home() {
  return (
    <Container>
      <Navbar />
      <Header />
      <Options />
      <Content>
        <Sidebar />
        <Cart />
      </Content>
    </Container>
  )
}
