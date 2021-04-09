var dataTable = data; 

// Console.log the UFO dataset
console.log(dataTable);

// Get a reference to the table body. I am selecting an element to the body before start appending
var tbody = d3.select("tbody");

function buildTable(single_UFO) {
  tbody.html("");

  single_UFO.forEach((data)=>{
    var row =tbody.append('tr');
    Object.values(data).forEach((record)=>{
      let cell = row.append('td');
      cell.text(record);

    });
  });

  
}

// This function triggers when the button is clicked.
function handleClick() {
  
  tbody.html("")
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element

  var inputValue = inputElement.property("value");
  console.log(inputValue);
  if (inputValue === "") {
    buildTable(dataTable);
    

  } else {
      var filteredData = dataTable.filter(ufoEvent => ufoEvent.datetime === inputValue);
      buildTable(filteredData);
    }

}

// Select the button

var button = d3.select("#filter-btn")

// Create event handlers or defines a function handleClick that takes no arguments.
button.on("click", handleClick);


//var filteredData = dataTable.filter(dataTable => dataTable.datetime === inputValue);
//console.log(filteredData);
buildTable(dataTable);

