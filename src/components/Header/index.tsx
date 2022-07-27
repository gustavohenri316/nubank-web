import {
  Container,
  Infos,
  Span,
  Text,
  Content,
  Div,
  Button,
  Warnings,
  TextWarnings
}
  from './styles'
import { Eye, EyeSlash } from 'phosphor-react'
import { useState } from 'react'

export function Header() {
  const [appear, setAppearValue] = useState(true)


  function handleClick() {
    setAppearValue(false)
    if (appear === false) {
      setAppearValue(true)
    }
  }
  return (
    <Container>
      <Infos>
        <Text>Olá, Gustavo H Gonçalves </Text>
        <Content>
          <Div>
            <Text>Conta</Text>
            <Button onClick={handleClick}>
              {
                appear === true ?
                  <Eye size={13} color="#FFFFFF" />
                  :
                  <EyeSlash size={13} color="#FFFFFF" />
              }
            </Button>
          </Div>
          <Span>
            {appear === true ? 'R$ 12.545,47' : '••••••'}
          </Span>
        </Content>
      </Infos>
      <Warnings>
        <TextWarnings>
          Veja os descontos que preparamos
          para você no <a>Shopping Nubank</a>
        </TextWarnings>
      </Warnings>
      <Warnings>
        <TextWarnings>
          <a> 25% de desconto</a> em empréstimo
          com portabilidade de salário
        </TextWarnings>
      </Warnings>
    </Container>
  )
}
