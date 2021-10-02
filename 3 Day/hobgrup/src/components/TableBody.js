import React from "react";

class TableBody extends React.Component {
  render() {
    console.log("TableBody Rendered");
    const { rows } = this.props;
    return (
      <tbody>
        {rows.map((Person,index) => {
          return (
              
            <tr key={index}>
            <td>{Person.id}</td>
            <td>{Person.name}</td>
            <td>{Person.age}</td>
            <td>{Person.city}</td>
            <td>{Person.school}</td>
            <td>{Person.language}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
