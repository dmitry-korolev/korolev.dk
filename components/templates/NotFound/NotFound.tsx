import i404 from './404b.jpg'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { ImageLarge } from '../../atoms/ImageLarge/ImageLarge'

export const NotFound = () => (
  <article>
    <ImageLarge src={i404} text='404'/>
    <Paragraph>
      К сожалению, по этому адресу ничего нет. Попробуйте поиск.
    </Paragraph>
  </article>
)
