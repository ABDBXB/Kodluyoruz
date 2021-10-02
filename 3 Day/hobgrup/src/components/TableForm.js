import React from "react";

class TableForm extends React.Component {
  state = { name: "" };

  render() {
    return (
      <from>
        <input type="number" placeholder="ID"></input>
        <input
          type="text"
          placeholder="Name"
          onChange={(evet) => {
            this.setState({ name: evet.target.value });
          }}
        ></input>
        <input type="number" placeholder="Age"></input>
        <input type="text" placeholder="City"></input>
        <input type="text" placeholder="School"></input>
        <input type="text" placeholder="Language"></input>
        <button>Add</button>
      </from>
    );
  }
}

export default TableForm;
