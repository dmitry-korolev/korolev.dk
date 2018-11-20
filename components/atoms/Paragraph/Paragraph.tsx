import styled from 'styled-components'
import { MainTheme } from '../../../utils/styles/getTheme/getTheme.h'

export const Paragraph = styled.p`
  font-size: ${(p: { theme: MainTheme }) => p.theme.sizes.content.fontSize};
  line-height: ${p => p.theme.sizes.content.lineHeight};
  margin-bottom: ${p => p.theme.sizes.content.marginBottom}
`
