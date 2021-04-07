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








// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element

  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);
  

}
// Select the form
var form =d3.select("#form-control");
form.on("change",runEnter);

// Select the button
d3.select("#filter-btn").on("click",runEnter);

buildTable(dataTable);
  //YOUR_CODE_HERE
    // Apply `filter` to the table data to only keep the
    
  // rows where the `datetime` value matches the filter value
    //YOUR_CODE_HERE
  

  // Rebuild the table by calling you buildTable() function and passing in your filteredData variable
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  //YOUR_CODE_HERE;


// Attach an event to listen for the form button #filter-btn to be clicked, it should call your handleClick function
//YOUR_CODE_HERE;

// Build the table with your buildTable function when the page loads
//YOUR_CODE_HERE;
