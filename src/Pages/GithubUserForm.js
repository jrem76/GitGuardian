import React, { useState } from "react"

const GithubUserForm = () => {
  const [errors, setErrors] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    setErrors("")
    const token = event.target.token.value
    const name = event.target.name.value

    if (!name || !token) {
      setErrors("Les champs sont obligatoires")
    }

    console.log({
      token,
      name
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Enter your name" />
      <input name="token" type="text" placeholder="Enter your github access token" />
      <input type="submit" value="See your stats" />
      { errors && <p>{errors}</p>}
    </form>
  )
}

export {
  GithubUserForm,
}