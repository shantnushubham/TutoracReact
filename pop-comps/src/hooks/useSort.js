import { useState } from "react";

const useSort = (config, data) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortByColumn, setSortByColumn] = useState(null);

  const sort = (label) => {
    if (sortByColumn && sortByColumn !== label) {
      setSortOrder("asc");
      setSortByColumn(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortByColumn(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortByColumn(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortByColumn(null);
    }
  };

  let updatedData = data;
  if (sortOrder && sortByColumn) {
    const { sortByKey } = config.find(
      (column) => column.label === sortByColumn
    );
    updatedData = [...data].sort((a, b) => {
      let valueA = sortByKey(a);
      let valueB = sortByKey(b);
      let weight = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * weight;
      }
      return (valueA - valueB) * weight;
    });
  }

  return {
    sortOrder,
    sortByColumn,
    updatedData,
    sort,
  };
};

export default useSort;
