// put the data.js into a variable and use d3 to select different objects
let tableData = data,
    tbody = d3.select("tbody"),
    button = d3.select("#filter-btn"),
    form = d3.select("#form");
 

// get all data from table data and put it into a table by creating an object which can then be split out to a value key pair
tableData.forEach((sighting) => {
    console.log(sighting);
    let datarow = tbody.append("tr");

    Object.entries(sighting).forEach(([key,value]) => {
        console.log(key,value);
        let box = datarow.append("td");
        box.text(value);
    });

});

//select which rows to display based on filter from date form entry
const runEnter = () => {

    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    let inputElement = d3.select("#datetime"), 
        inputValue = inputElement.property("value");
  
    console.log(inputValue);

    const filteredData = tableData.filter(ufodata => ufodata.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((ufoFiltered) => {
            let datarow = tbody.append("tr");

            Object.entries(ufoFiltered).forEach(([key, value]) => {
                console.log(key, value);
                let box = datarow.append("td");
                box.text(value);
            });
        });

}; 
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
