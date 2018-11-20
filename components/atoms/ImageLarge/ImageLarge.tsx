import styled from 'styled-components'

const Container = styled.div`
  display: block;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  position: absolute;
  left: 0;
  top: 0;
  
  background-image: url(${(p: { src: string }) => p.src});
  background-size: cover;
  background-position: 20% 0;
`

const Text = styled.strong`
  display: block;
  width: 100%;
  
  color: white;
  font-family: sans-serif;
  font-size: 10rem;
  font-weight: 700;
  letter-spacing: 10px;
  text-align: center;
  text-shadow: 1px 5px 3px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const ImageLarge = ({ src, text }: { src: string, text: string }) => <Container src={src}>
  <Text>{ text }</Text>
</Container>
