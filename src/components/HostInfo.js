import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  state = {

    options: [
      {key: 1, text: "high plains", value: 8} ,
      {key: 2, text: "lowlands", value: 6},
    {key: 3, text: "under construction", value: 8} ,
  {key: 4, text: "pariah", value: 14} ,
{key: 5, text: "python pass", value: 14} ,
{key: 6, text: "badlands", value: 10}],
    value: "some_area"
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  }



  handleChange = (e, {value}) => {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  toggle = () => {
    this.props.validHost.active
  }

  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.validHost.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.validHost.gender } | {this.props.validHost.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}

              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={"Active"}

                  checked={true}

                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.state.value}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo


//this.props.validHost.active

// {key: "some_area" text: "Some Area" value: "some_area"}, {key: "another_area" text: "Another Area" value: "another_area"}

  // { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }

    // {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}

  // {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
