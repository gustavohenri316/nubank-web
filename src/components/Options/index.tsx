import { OptionsItens } from '../../assets/Options'
import { Container, Button, Content, Img, Text } from './styles'

export function Options() {
  return (
    <Container>
      {
        OptionsItens.map((item) => {
          return (
            <Content key={item.id}>
              <Button>
                <Img src={item.img} />
              </Button>
              <Text>{item.title}</Text>
            </Content>
          )
        })
      }

    </Container>
  )
}
