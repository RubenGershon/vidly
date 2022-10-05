import ListGroup from "react-bootstrap/ListGroup";

const CustomListGroup = ({
  groups,
  selectedGroup,
  textProperty = "name",
  valueProperty = "_id",
  onGroupSelect,
}) => {
  console.log("List Group -render");

  return (
    <ListGroup as="ul">
      {groups.map((group) => (
        <ListGroup.Item
          onClick={() => onGroupSelect(group)}
          active={selectedGroup[valueProperty] === group[valueProperty]}
          style={{ cursor: "pointer" }}
          as="li"
          key={group[valueProperty]}
        >
          {group[textProperty]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CustomListGroup;
