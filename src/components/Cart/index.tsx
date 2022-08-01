import { Container } from './styles'
import cartImg from '../../assets/cart.svg'
export function Cart() {
  return (
    <Container>
      <header>
        <img src={cartImg} />
        <span>Cartão de crédito</span>
        <div></div>
        <p>Fecha em 01 JAN</p>
      </header>
      <main>
        <section>
          <div className='Limite'></div>
          <span>
            R$ 3.968,32
          <p>Limite disponível</p>
          </span>
        </section>
        <section>
          <div className='fatura'></div>
          <span>
            R$ 416,70
          <p>Fatura atual</p>
          </span>
        </section>
        <section>
          <div className='proximas'></div>
          <span>
          R$ 264,98
          <p>Próximas faturas</p>
          </span>
        </section>
      </main>
      <div className='progress'>
        <div className='verde'></div>
        <div className='azul'></div>
        <div className='laranja'></div>
      </div>
    </Container>
  )
}
