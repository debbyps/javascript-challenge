// from data.js
let tableData = data,
    // button = d3.select("#filter-btn"),
    // form = d3.select("#form");
    tbody = d3.select("tbody");
 

// get all data from CSV and put it into a table
tableData.forEach((sighting) => {
    console.log(sighting);
    var datarow = tbody.append("tr");
});


//get all data from table but only display the filtered data per user input
