const Table = ({ data }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Color</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((fruit) => {
          return (
            <tr key={fruit.name}>
              <td>{fruit.name}</td>
              <td>
                <div
                  className="color-box"
                  style={{ background: fruit.color }}
                ></div>
              </td>
              <td>{fruit.quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
