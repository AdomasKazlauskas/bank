function editList(current) {
  return (
    <tr>
      <td>
        <input type="text" name="name" value={current.name} />
      </td>
      <td>
        <input type="text" name="cash" value={current.cash} />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}

export default editList;
