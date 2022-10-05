import Form from "react-bootstrap/Form";

const basicInput = ({
  label,
  type,
  placeholder,
  required = true,
  value,
  error,
  onChange,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
};

export default basicInput;
