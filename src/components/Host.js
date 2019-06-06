import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  return(

    <Card
      className="host selected"

      onClick={()=>props.handleClick(props.host.id)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
