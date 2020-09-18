import React, { useState } from "react"

import { getUserInfosRequest } from "../api/userRequest"
import { Input } from "../Components/Input"
import { Button } from "../Components/Button"
import { Form } from "../Components/Form"

export const GithubUserForm = ({ setUserInfos }) => {
  const [errors, setErrors] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()
    setErrors("")
    const token = event.target.token.value
    const name = event.target.name.value

    if (!name || !token) {
      setErrors("All fields are mandatory")
    }

    try {
      const list = await getUserInfosRequest(token, name)
      setUserInfos(list)
    } catch (error) {
      setErrors("An error just occured. Please check your credentials")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" autocomplete="on" name="name" placeholder="Enter your name" />
      <Input type="password" name="token" autocomplete="on" placeholder="Enter your github access token" />
      <Button type="submit">See your stats</Button>
      { errors && <p>{errors}</p>}
    </Form>
  )
}
