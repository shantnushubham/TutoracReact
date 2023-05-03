import Table from "./Table";
import useSort from "../hooks/useSort";

const SortableTable = (props) => {
  const { config, data } = props;

  const { sortOrder, sortByColumn, sort, updatedData } = useSort(config, data);

  const showIcon = (label) => {
    if (sortByColumn !== label) {
      return <i className="sort down icon" />;
    } else if (sortByColumn === label && sortOrder === "desc") {
      return <i className="sort icon" />;
    } else if (sortByColumn === label && sortOrder === "asc") {
      return <i className="sort up icon" />;
    }
  };

  const updatedConfig = config.map((rowConfig) => {
    if (!rowConfig.sortByKey) {
      return rowConfig;
    }
    return {
      ...rowConfig,
      header: () => {
        return (
          <th
            style={{ background: "black", color: "white" }}
            onClick={() => {
              sort(rowConfig.label);
            }}
          >
            {rowConfig.label} {showIcon(rowConfig.label)}
          </th>
        );
      },
    };
  });

  // if a column has not been touched, then show sort icon
  // if a column has been touched and is descending, then show sort icon

  return <Table {...props} config={updatedConfig} data={updatedData} />;
};

export default SortableTable;
