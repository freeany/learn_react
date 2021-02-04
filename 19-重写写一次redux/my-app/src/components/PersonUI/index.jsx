import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class PersonUI extends Component {
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
    const { persons, count } = this.props
    return (
      <div>
        <h1>从redux中获取count组件的求和数据{count}</h1>
        <div>
          姓名: <input ref={c => (this.nameInput = c)} type="text" />
          &nbsp; 年龄: <input ref={c => (this.ageInput = c)} type="text" />
          &nbsp;
          <button onClick={() => this.addPerson()}>添加</button>
        </div>
        <div>
          列表：
          <ul>
            {persons.map(person => (
              <li key={person.id}>
                {person.name} --- {person.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
