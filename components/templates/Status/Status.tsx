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

  & > :first-child {
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

const Contacts = styled.div`
  grid-column: span 4;
  
  @media screen and (min-width: 780px) {
    grid-column: span 3;
  }
`

const SkillsLeft = styled.div`
  grid-column: span 4;
  
  @media screen and (min-width: 750px) {
    grid-column: span 2;
  }
`

const SkillsRight = styled.div`
  grid-column: span 4;
  
  @media screen and (min-width: 750px) {
    grid-column: span 2;
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

// const calcAge = (date: string) => ((Date.now() - +new Date(date)) / 31557600000)

export const Status = () => {
  // const age = ~~calcAge('1988-04-21')
  // const exp = calcAge('2011-01-01').toFixed(2)

  return (
    <BaseContainer>
      <article>
        <GridContainer>
          <Header>
            <h1>Dima Korolev</h1>
            <h5>Frontend team&nbsp;leader @&nbsp;Tinkoff.ru</h5>
          </Header>

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

          <SkillsLeft>
            <h4>Dev skills</h4>
            <List>
              <li>
                Javascript
              </li>
              <li>
                React
              </li>
              <li>
                HTML
              </li>
              <li>
                CSS
              </li>
            </List>
          </SkillsLeft>

          <SkillsRight>
            <h4 >Team skills</h4>
            <List>
              <li>
                Team management
              </li>
              <li>
                Agile
              </li>
              <li>
                Developer relations
              </li>
              <li>
                Teaching
              </li>
            </List>
          </SkillsRight>
        </GridContainer>
      </article>
    </BaseContainer>
  )
}
