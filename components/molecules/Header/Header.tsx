import styled from 'styled-components'
import Link from 'next/link'
import { Heading } from '../../atoms/Heading/Heading'
import { HeaderProps } from './Header.h'

const HeaderContainer = styled.header`
  & ${Heading}:first-child {
    font-variant: small-caps;
    margin-bottom: 0;
  }
`

const levels: {
  1: {
    t: 'h1',
    s: 'h2'
  },
  2: {
    t: 'h2',
    s: 'h3'
  }
} = {
  1: {
    t: 'h1',
    s: 'h2'
  },
  2: {
    t: 'h2',
    s: 'h3'
  }
}

export const Header = ({ title, link, subtitle, level = 2 }: HeaderProps) => {
  const { t, s } = levels[level]

  return <HeaderContainer>
    <Heading as={t}>
      { link ? <Link href={link}>
        <a>{ title }</a>
      </Link> : title }
    </Heading>
    { subtitle && <Heading as={s}>
      { subtitle }
    </Heading> }
  </HeaderContainer>
}
