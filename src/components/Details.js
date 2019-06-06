import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  const renderHostDetails = () => {
    if (props.validHost){
      return <HostInfo areas={props.areas} validHost={props.validHost[0]} />
    }
    else {
      renderSomething()
    }
  }


  return(
    <Segment id="details" className="HQComps">
      {renderHostDetails()}
    </Segment>
  )
}

export default Details
