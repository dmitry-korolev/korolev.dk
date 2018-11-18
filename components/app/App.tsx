import { HTMLProps } from 'react'
import styled from 'styled-components'

import { Variables } from '../style/Variables'
import { Common } from '../style/Common'

const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: var(--size__site-width);
  position: relative;
  transition: left 0.3s ease-out;
`

export const AppContainer = ({ children }: HTMLProps<any>) => {
  return <>
    <main id='app'>
      <Container>
        { children }
      </Container>
    </main>
    <Variables />
    <Common />
  </>
}
