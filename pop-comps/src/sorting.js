let arr = [
  { name: "John", salary: 150000 },
  { name: "Monica", salary: 2000000 },
  { name: "Avnish", salary: 2500000 },
  { name: "Shrey", salary: 120000 },
];

function getSortingValue(employee) {
  return employee.salary;
}

let order = "desc";

arr.sort((a, b) => {
  let A = getSortingValue(a);
  let B = getSortingValue(b);
  let weight = order === "asc" ? 1 : -1;
  if (typeof A === "string") {
    return A.localeCompare(B) * weight;
  }
  return (A - B) * weight;
});

console.log(arr);
