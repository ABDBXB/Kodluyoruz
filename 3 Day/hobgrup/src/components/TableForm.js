import React from "react";

class TableForm extends React.Component {
  state = { id: 0, name: "", age: 0, city: "", school: "", language: "" };
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault();
    alert(this.state.name);
  }

  updateUser(event) {
    this.setState({
      [event.target.id]: [event.target.value],
    })
  }

  render() {
    return (
      <from>
        <input
          id="id"
          type="number"
          placeholder="ID"
          onChange={this.updateUser}
        ></input>

        <input
          id="name"
          type="text"
          placeholder="Name"
          onChange={this.updateUser}
        ></input>

        <input
          id="age"
          type="number"
          placeholder="Age"
          onChange={this.updateUser}
        ></input>

        <input
          id="city"
          type="text"
          placeholder="City"
          onChange={this.updateUser}
        ></input>

        <input
          id="school"
          type="text"
          placeholder="School"
          onChange={this.updateUser}
        ></input>

        <input
          id="language"
          type="text"
          placeholder="Language"
          onChange={this.updateUser}
        ></input>
        <button onClick={this.handleButtonClick}>Add</button>
      </from>
    );
  }
}

export default TableForm;
