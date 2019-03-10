import styled from 'styled-components'

const Container = styled.article`
  width: 100%;
  text-align: center;

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`

export const NotFound = () => (
  <Container>
    <h1 style={{
      fontSize: '10rem'
    }}>404</h1>
    <p>К сожалению, по этому адресу ничего нет. Попробуйте поиск.</p>
  </Container>
)
