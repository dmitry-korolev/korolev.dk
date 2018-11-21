import { Component } from 'react';
import { NextContext } from 'next'
import { Paragraph } from '../components/atoms/Paragraph/Paragraph'
import { Header } from '../components/molecules/Header/Header'


export default class extends Component<{ userAgent: string }> {
  static async getInitialProps({ req }: NextContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <>
        <Header
          title='Пингвин Рыба Есть'
          subtitle='dmitry@korolev.dk'
          level={1}
        />
        <Paragraph>Hello World {this.props.userAgent}</Paragraph>
        <Paragraph>Hello World {this.props.userAgent}</Paragraph>
        <Paragraph>Hello World {this.props.userAgent}</Paragraph>

        <Header
          title={`Hello world ${this.props.userAgent}`}
          subtitle={`Hello world ${this.props.userAgent}`}
          level={2}
        />
        <Paragraph>Hello World {this.props.userAgent}</Paragraph>
        <Paragraph>Hello World {this.props.userAgent}</Paragraph>
        <Paragraph>Hello World {this.props.userAgent}</Paragraph>
      </>
    )
  }
}

