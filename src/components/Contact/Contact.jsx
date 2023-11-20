export const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};