import { Component } from 'react'
import { Status } from '../components/templates/Status/Status'

export default class extends Component<{ userAgent: string }> {
  render() {
    return (
      <Status />
    )
  }
}
