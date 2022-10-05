import Table from "react-bootstrap/Table";
import TableHeader from "./tableHeader";
import TableBody from "./TableBody";

const CustomTable = ({ columns, sortColumn, onSort, items }) => {
  return (
    <Table>
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody items={items} columns={columns} />
    </Table>
  );
};

export default CustomTable;
