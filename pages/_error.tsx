import React from 'react'
import { NextContext } from 'next'

// Components
import { NotFound } from '../components/errors/NotFound/NotFound'

export default class Error extends React.Component<{ statusCode: number }> {
  static getInitialProps({ res, err }: NextContext) {
    const statusCode = res ? res.statusCode : err ? (err as any).statusCode : null
    return { statusCode }
  }

  render() {
    if (this.props.statusCode === 404) {
      return <NotFound />
    }

    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}
