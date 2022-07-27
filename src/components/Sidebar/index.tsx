import { CaretRight } from 'phosphor-react'
import { menuItem } from '../../assets/MenuItem'
import { Container, Content, Div, Img, Text, DivItem, Button } from './styles'

export function Sidebar() {
  return (
    <Container>
      <Content>
        {
          menuItem.map((item) => {
            return (
              <Div key={item.id}>
                <DivItem>
                  <Img src={item.icon} />
                  <Text>{item.name}</Text>
                </DivItem>
                <Button>
                  <CaretRight size={24} color="#7A7A80" />
                </Button>
              </Div>
            )
          })
        }
      </Content>
    </Container>
  )
}
