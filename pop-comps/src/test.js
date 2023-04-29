const dropdown = document.querySelector(".dropdown")

const handleClick = (e) => {
  if (dropdown.contains(e.target)) {
    console.log("Inside dropdown")
  } else {
    console.log("OUTSIDE Dropdown");
  }
}

document.addEventListener("click", handleClick, false)
