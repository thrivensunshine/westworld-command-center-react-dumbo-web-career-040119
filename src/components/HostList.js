import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(host => {

        return <Host id={host.id} key={host.id} host={host}  handleClick={props.handleClick}/>
      })}
    </Card.Group>
  )
}

export default HostList
