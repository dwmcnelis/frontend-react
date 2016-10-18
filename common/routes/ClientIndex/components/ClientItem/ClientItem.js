import React from 'react'
import Button from 'material-ui/Button'

const ClientItem = ({ client }) => (
  <Button href={`/client/${client.id}`} >{`${client.last_name}, ${client.first_name}`}</Button>
)

export default ClientItem
