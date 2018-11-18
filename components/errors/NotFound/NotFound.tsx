import { Text, NotFoundContainer } from './NotFound.styled'
import i404 from './404.jpg'

export const NotFound = () => (
  <article>
    <NotFoundContainer>
      <img src={i404}/>
      <Text>404</Text>
    </NotFoundContainer>
    <p>
      К сожалению, по этому адресу ничего нет. Попробуйте поиск.
    </p>
  </article>
)
