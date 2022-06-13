import React, { Component } from "react"
import axios from "axios"
import Form from "./Form"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  // define functions here

  componentDidMount = () => {
    axios
      .get("/")
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
