// put the data.js into a variable and use d3 to select the tbody
let tableData = data,
    // button = d3.select("#filter-btn"),
    // form = d3.select("#form");
    tbody = d3.select("tbody");
 

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

//get all data from table but only display the filtered data per user input
