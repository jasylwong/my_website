import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Project extends Component {
  render() {
  return (
    <Card style={{ width: '18rem' }} border={this.props.border} bg={this.props.bg}>
      <Card.Header as="h5">{this.props.title}</Card.Header>
      <Card.Img variant="top" src={this.props.image} />
      <Card.Body>
        {/* <Card.Title>{this.props.title}</Card.Title> */}
        <Card.Text>
          {this.props.text}
        </Card.Text>
        <div class="card-links">
          <Button variant={this.props.border} href={this.props.href_app}>The app!</Button>
          <Button variant={this.props.border} href={this.props.href_code}>The code!</Button>
        </div>
      </Card.Body>
    </Card>
  )
  }
}

export default Project