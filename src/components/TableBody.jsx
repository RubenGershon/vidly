import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };
  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map((item) => (
          <tr key={uuidv4()}>
            {columns.map((column) => (
              <td key={uuidv4()}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
