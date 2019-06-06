import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import Headquarters from './components/Headquarters'
import WestworldMap from './components/WestworldMap'


class App extends Component {

  state = {
    areas: [],
    hosts:[],
    validHost: ""
  }

  componentDidMount() {
    this.FetchAreas()
    this.FetchHosts()
  }

FetchAreas = () => {
  fetch("http://localhost:4000/areas")
  .then(res => res.json())
  .then(areas =>{
    this.setState({
      areas: areas
    })
  })
}

FetchHosts = () => {
  fetch("http://localhost:4000/hosts")
  .then(res=> res.json())
  .then(hosts =>{
    this.setState({
      hosts: hosts,
      clicked: false
    })
  })
}
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  handleClick = (hostId) => {
    let activeHost = this.state.hosts.filter(host => host.id === hostId)

    this.setState({
      validHost: activeHost
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap hosts={this.state.hosts} areas={this.state.areas} />
        <Headquarters validHost={this.state.validHost} hosts={this.state.hosts} clicked={this.state.clicked}  handleClick={this.handleClick}
          areas={this.state.areas}/>





        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      </Segment>
    )
  }
}

export default App;
