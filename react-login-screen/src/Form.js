import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.validateInfo = this.validateInfo.bind(this)
    this.error = this.error.bind(this)
  }

  // define functions here

  error = (string) => {
    const form = document.getElementById("form")
    const p = document.createElement("p")
    const btn = document.getElementById("btn")
    p.innerText = string
    form.appendChild(p)
    btn.disabled = true
    setTimeout(() => {
      form.removeChild(p)
      btn.disabled = false
    }, 2000)
  }

  success = () => {
    const form = document.getElementById("form")
    const p = document.createElement("p")
    const btn = document.getElementById("btn")
    p.innerText = "You win! You get to access the page that doesn't exist! :)"
    p.classList.add("success")
    form.appendChild(p)
    btn.disabled = true
  }

  validateInfo = (e) => {
    e.preventDefault()
    const { value: emailValue } = document.getElementById("email")
    const { value: passwordValue } = document.getElementById("password")
    if (emailValue.trim() === "")
      return this.error("Please enter a valid email address")
    if (passwordValue.trim() === "")
      return this.error("Please enter a password")
    this.success()
  }

  // render the component

  render() {
    return (
      <form id="form">
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" placeholder={this.props.email_prompt} />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          placeholder={this.props.password_prompt}
        />
        <button id="btn" onClick={this.validateInfo}>
          Submit
        </button>
      </form>
    )
  }
}

export default Form
