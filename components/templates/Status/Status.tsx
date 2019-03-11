import styled from 'styled-components'

const BaseContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  
  padding: var(--baseSpacing);

  display: flex;
  align-items: center;
  
  & article {
    width: 100%;
  }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(max-content, max-content);
    grid-gap: var(--baseSpacing);
`

const Header = styled.header`
  grid-column: span 4;
  
  //display: flex;
  //align-items: center;

  h1 {
    font-variant: small-caps;
  }
`

const Avatar = styled.img`
  height: calc(var(--baseSpacing) * 6);
  margin-bottom: var(--baseSpacing);
  border: 5px black solid;
  
  display: none;
  
  @media screen and (min-width: 780px) {
    display: initial;
  }
`

const Bio = styled.section`
  grid-column: span 4;
`

const Contacts = styled.section`
  grid-column: span 4;
  
  @media screen and (min-width: 780px) {
    grid-column: span 3;
  }
`

const List = styled.ul`
  list-style-type: none;
  
  > li {
    width: 100%;
    
    @media screen and (min-width: 590px) {
        display: flex;
        justify-content: space-between;
    }
    
    &>* {
      display: block;
    }
  }
`

const calcAge = (date: string) => ((Date.now() - +new Date(date)) / 2629800000)
const getAge = (date: string) => `${~~(calcAge(date) / 12)} years`
const getExp = (date: string) => {
  const exp = calcAge(date)
  const years = ~~(exp / 12)
  const months = ~~(exp % 12)

  return `${years} years${months > 0 ? ` and ${months} month${months > 1 ? 's' : ''}` : ''}`
}

export const Status = () => {
  const age = getAge('1988-04-21')
  const exp = getExp('2011-01-01')
  return (
    <BaseContainer>
      <article>
        <GridContainer>
          <Header>
            <h1>Dima Korolev</h1>
          </Header>

          <Bio>
            <h4>Bio</h4>
            <p><span title="Born at 1988, April 21">{age}</span> old, <span title="Starting from 2011">{exp}</span> of professional experience.</p>
            <p>
              I am currently working at <a href="https://tinkoff.ru">Tinkoff</a>,
              the world's largest fully online bank, as a Frontend Team Lead.
            </p>
            <p>
              See more information at my <a href="https://www.linkedin.com/in/dmitry-korolev/">LinkedIn</a> and <a
              href="https://github.com/dmitry-korolev">GitHub</a> pages.
            </p>
          </Bio>

          <Avatar src='/static/avatar.png' alt='My avatar' />

          <Contacts>
            <h4>Contacts</h4>
            <List>
              <li>
                <span>Telegram:&nbsp;</span> <a href="https://t.me/dimakorolev">@dimakorolev</a>
              </li>
              <li>
                <span>E-Mail:&nbsp;</span> <a href="mailto:dima@korolev.dk">dima@korolev.dk</a>
              </li>
              <li>
                <span>Phone:&nbsp;</span> <a href="tel:+79262110893">+7 (926) 211-08-93</a>
              </li>
            </List>
          </Contacts>
        </GridContainer>
      </article>
    </BaseContainer>
  )
}
