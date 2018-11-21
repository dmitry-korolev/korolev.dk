import styled from 'styled-components'
import { path } from 'ramda'

export const Paragraph = styled.p`
  font-size: ${path(['theme', 'sizes', 'content', 'fontSize'])};
  line-height: ${path(['theme', 'sizes', 'content', 'lineHeight'])};
  
  margin-top: 0;
  margin-bottom: ${path(['theme', 'sizes', 'content', 'marginBottom'])};
`
