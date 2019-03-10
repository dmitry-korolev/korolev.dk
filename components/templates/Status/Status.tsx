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

export const Status = () => {
  const age = ~~(calcAge('1988-04-21') / 12)
  const exp = calcAge('2011-01-01')
  const years = ~~(exp / 12)
  const months = ~~(exp % 12)

  return (
    <BaseContainer>
      <article>
        <GridContainer>
          <Header>
            <h1>Dima Korolev</h1>
          </Header>

          <Bio>
            <h4>Bio</h4>
            <p>{age} years old, {years}{months > 0 ? `+` : ''} years of programming experience.</p>
            <p>
              I am currently working at <a href="https://tinkoff.ru">Tinkoff</a>,
              the world's largest fully online bank, as a Frontend Team Lead.
            </p>
            <p>
              See more information at <a href="https://www.linkedin.com/in/dmitry-korolev/">my LinkedIn page</a>.
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
                <span>Phone:&nbsp;</span> <span>+7 (926) 211-08-93</span>
              </li>
            </List>
          </Contacts>
        </GridContainer>
      </article>
    </BaseContainer>
  )
}
