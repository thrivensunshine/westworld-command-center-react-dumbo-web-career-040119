import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {props.areas.map(area =>{
        return <Area area={area} hosts={props.hosts}/>
      })}
    </Segment>
  )
}

export default WestworldMap
