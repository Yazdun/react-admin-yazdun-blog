import React from 'react'
import { Container } from '../../elements'

export const Http = ({ title, info }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{info}</p>
    </Container>
  )
}
