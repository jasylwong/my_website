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
        <Card.Text>
          {this.props.text}
        </Card.Text>
        <div class="card-links">
          <Button variant={this.props.border} href={this.props.href_app} target="_blank">The app!</Button>
          <Button variant={this.props.border} href={this.props.href_code} target="_blank">The code!</Button>
        </div>
      </Card.Body>
    </Card>
  )
  }
}

export default Project