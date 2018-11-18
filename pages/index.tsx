import { Component } from 'react';
import styled from 'styled-components'
import { NextDocumentContext } from "next/document";

const Title = styled.h1`
  color: red;
`

export default class extends Component<{ userAgent: string }> {
  static async getInitialProps({ req }: NextDocumentContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        <Title>Hello World {this.props.userAgent}</Title>
      </div>
    )
  }
}

