import React from 'react';
import '../stylesheets/Area.css'
import Host from './Host'

const Area = (props) => (



  <div className='area' id={props.area.name}>
    <h3 className='labels'>{props.area.name.replace("_", " ")}</h3>

    {props.hosts.map(host => {
      if(host.area === props.area.name){
        return <Host host={host}/>
      }
    })
  }

  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
