import React from "react";

class TableHead extends React.Component {
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((Column) => {
            return <th>{Column}</th>;
          })}
        </tr>
      </thead>
    );
  }
}
export default TableHead;
