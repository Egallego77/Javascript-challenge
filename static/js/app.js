// Console.log the UFO dataset
console.log(data);


// Get a reference to the table body. I am selecting an element to the body before start appending
var tbody = d3.select("tbody");


// Use a traditional loop for a list of dictionaries. We comment it out after testing it is working

//for (var i=0; i < data.length; i++) {
    //var record = data[i];
  //console.log(record)

  //var row = tbody.append('tr')
  //row.append('td').text(record.datetime)
  //row.append('td').text(record.city)
  //row.append('td').text(record.state)
  //row.append('td').text(record.country)
  //row.append('td').text(record.shape)
 //row.append('td').text(record.durationMinutes)
  //row.append('td').text(record.comments)
//}

// For each element of data it will apply some function (buildTable)
// Use a Javastyle loop for a list of dictionaries.

data.forEach(buildTable);

function buildTable(single_UFO) {
  var row =tbody.append('tr')
  row.append('td').text(single_UFO.city)
  row.append('td').text(single_UFO.datetime)
  row.append('td').text(single_UFO.state)
  row.append('td').text(single_UFO.country)
  row.append('td').text(single_UFO.durationMinutes)
  row.append('td').text(single_UFO.comments)
}

// Select the button
var button =d3.select("#filter-btn");

// Select the form
var form =d3.select("#form-control");

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
