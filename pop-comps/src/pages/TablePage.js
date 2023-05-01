import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Apple", color: "red", quantity: 10 },
    { name: "Orange", color: "orange", quantity: 12 },
    { name: "Guava", color: "#0ed70e", quantity: 8 },
    { name: "Mango", color: "#ffdb08", quantity: 15 },
  ];

  return (
    <div>
      <h1 className="ui header">Table</h1>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
