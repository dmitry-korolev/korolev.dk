import i404 from './404.jpg'
import { ImageLarge } from '../../atoms/ImageLarge/ImageLarge'

export const NotFound = () => (
  <article>
    <ImageLarge src={i404} text='404'/>
    <p>
      К сожалению, по этому адресу ничего нет. Попробуйте поиск.
    </p>
  </article>
)
