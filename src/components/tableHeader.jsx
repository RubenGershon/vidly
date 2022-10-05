import React, { Component } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc") return <BsFillCaretUpFill />;
    return <BsFillCaretDownFill />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c) => (
            <th
              key={c.path || c.key}
              onClick={() => this.raiseSort(c.path)}
              style={{ cursor: "pointer" }}
            >
              {c.label} {this.renderSortIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
