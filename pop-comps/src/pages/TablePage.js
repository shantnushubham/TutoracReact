import { useState } from "react";
import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const data = [
    { name: "Apple", color: "red", quantity: 10 },
    { name: "Orange", color: "orange", quantity: 12 },
    { name: "Guava", color: "#0ed70e", quantity: 8 },
    { name: "Mango", color: "#ffdb08", quantity: 15 },
    { name: "Blueberry", color: "purple", quantity: 40 },
  ];

  const config = [
    {
      label: "Fruit",
      render: (fruit) => fruit.name,
      sortByKey: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => (
        <div className="color-box" style={{ background: fruit.color }} />
      ),
    },
    {
      label: "Quantity",
      render: (fruit) => fruit.quantity,
      sortByKey: (fruit) => fruit.quantity,
    },
  ];

  const keyFunction = (fruit) => fruit.name;

  // const data = [
  //   {
  //     city: "Hyderabad",
  //     famousDish: "Biryani",
  //     language: ["Urdu", "Telugu", "English", "Hindi"],
  //     state: "Telangana",
  //   },
  //   {
  //     city: "Kolkata",
  //     famousDish: "Ilish Maach",
  //     language: ["Bengali", "Hindi", "English"],
  //     state: "West Bengal",
  //   },
  //   {
  //     city: "New Delhi",
  //     famousDish: "Chhole Kulche",
  //     language: ["Hindi", "English", "Punjabi", "Haryanvi"],
  //     state: "UT",
  //   },
  //   {
  //     city: "Mumbai",
  //     famousDish: "Vada Pav",
  //     language: ["Hindi", "English", "Marathi", "Gujarati"],
  //     state: "Maharashtra",
  //   },
  // ];

  // const config = [
  //   { label: "City Name", render: (city) => city.city },
  //   { label: "State", render: (city) => city.state },
  //   { label: "Popular Dish", render: (city) => city.famousDish },
  //   {
  //     label: "Languages",
  //     render: (city) => {
  //       let languageString = ``;
  //       for (let language of city.language) {
  //         languageString = languageString + ", " + language;
  //       }
  //       return languageString.substring(2);
  //     },
  //   },
  // ];

  // const keyFunction = (city) => city.city;

  return (
    <div>
      <h1 className="ui header">Table</h1>
      <SortableTable data={data} config={config} keyFunction={keyFunction} />
    </div>
  );
};

export default TablePage;
