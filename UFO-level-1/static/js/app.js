// from data.js
let tableData = data,
    button = d3.select("#filter-btn"),
    form = d3.select("#form");

// YOUR CODE HERE!
// Complete the event handler function for the form
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    let inputElement = d3.select("#datetime"), 
        inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    const filteredData = tableData.filter(ufodata => ufodata.datetime === inputValue);
    console.log(filteredData);

    let dates = filteredData.map(ufosighting => ufosighting.datetime)
    let cities = filteredData.map(ufosighting => ufosighting.city)
    let states  = filteredData.map(ufosighting => ufosighting.state)
    let countries = filteredData.map(ufosighting => ufosighting.country)
    let shapes = filteredData.map(ufosighting => ufosighting.shape)
    let durMins = filteredData.map(ufosighting => ufosighting.durationMinutes)
    let commenting = filteredData.map(ufosighting => ufosighting.comments)

    console.log("datetimes: ",dates)
    console.log("cities: ",cities)
    console.log("states: ",states)
    console.log("countries: ",countries)
    console.log("shapes: ",shapes)
    console.log("durMins: ",durMins)
    console.log("commenting: ",commenting)

    dates.append("td").text(datetime);

}; 
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);