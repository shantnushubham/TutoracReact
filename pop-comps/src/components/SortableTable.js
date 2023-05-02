import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
  const { config, data } = props;

  const [sortOrder, setSortOrder] = useState(null);
  const [columnToSort, setColumnToSort] = useState(null);

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setColumnToSort(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setColumnToSort(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setColumnToSort(null);
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
              handleClick(rowConfig.label);
            }}
          >
            {rowConfig.label}
          </th>
        );
      },
    };
  });

  const updatedData = data;
  if (sortOrder && columnToSort) {
    const { sortByKey } = config.find(
      (column) => column.label === columnToSort
    );
    updatedData.sort((a, b) => {
      let valueA = sortByKey(a);
      let valueB = sortByKey(b);
      let weight = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * weight;
      }
      return (valueA - valueB) * weight;
    });
  }

  return <Table {...props} config={updatedConfig} data={updatedData} />;
};

export default SortableTable;
