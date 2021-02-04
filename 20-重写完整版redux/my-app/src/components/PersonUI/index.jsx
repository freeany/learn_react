import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Person extends Component {
  addPerson() {
    const { addPerson } = this.props
    const name = this.nameInput.value
    const age = this.ageInput.value
    const person = {
      id: nanoid(),
      name,
      age
    }
    addPerson(person)
  }
  render() {
    const { count, persons } = this.props
    return (
      <div>
        <h1>从redux中拿到的count{count}</h1>
        <input ref={c => (this.nameInput = c)} type="text" />
        &nbsp;
        <input ref={c => (this.ageInput = c)} type="text" />
        &nbsp;
        <button onClick={() => this.addPerson()}>添加</button>
        <ul>
          {persons.map(person => (
            <li key={person.id}>
              {person.name} -- {person.age}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
