import styled from 'styled-components'

const Container = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
`

const Text = styled.strong`
  bottom: 60px;
  color: white;
  display: block;
  font-family: sans-serif;
  font-size: 10rem;
  font-weight: 700;
  letter-spacing: 10px;
  position: absolute;
  text-align: center;
  text-shadow: 0 5px 1px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  width: 100%;
`


export const ImageLarge = ({ src, text }: { src: string, text: string }) => <Container>
  <img src={ src } />
  <Text>{ text }</Text>
</Container>
