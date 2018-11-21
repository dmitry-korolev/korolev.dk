import styled from 'styled-components'
import { path } from 'ramda'

export const Heading = styled.div`
  font-family: ${path(['theme', 'font', 'headings'])};
  font-weight: 700;
  font-size: ${(p: any) => path(['theme', 'sizes', p.as || 'h1', 'fontSize'], p)};
  line-height: ${(p: any) => path(['theme', 'sizes', p.as || 'h1', 'lineHeight'], p)};
  
  
  margin-top: 0;
  margin-bottom: ${(p: any) => path(['theme', 'sizes', p.as || 'h1', 'marginBottom'], p)};
`
