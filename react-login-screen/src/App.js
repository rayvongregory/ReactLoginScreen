import React, { Component } from "react"
import Form from "./Form"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  // define functions here

  //render the component

  render() {
    return (
      <Form
        email_prompt="Enter your email"
        password_prompt="Enter your password"
      />
    )
  }
}

export default App
