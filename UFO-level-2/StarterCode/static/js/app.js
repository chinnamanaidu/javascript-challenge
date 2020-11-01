// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

var tdata = d3.select("table");
tdata.attr("class", "table table-striped");
// Create the function to run for both events

var selInc = d3.select(".panel-body");
selTitle = selInc.append("select");
selTitle.attr("id", "opts");
selOpt = selTitle.append("option");
selOpt.attr("value","datetime");
selOpt.text("datetime");
selOpt1 = selTitle.append("option");
selOpt1.attr("value","city");
selOpt1.text("city");
selOpt2 = selTitle.append("option");
selOpt2.attr("value","state");
selOpt2.text("state");
selOpt3 = selTitle.append("option");
selOpt3.attr("value","country");
selOpt3.text("country");
selOpt3 = selTitle.append("option");
selOpt3.attr("value","shape");
selOpt3.text("shape");

//datetime, city, state, country, shape, durationMinutes, comments
//selInc.append("<select id = \"opts\"><option value=\"ds1\">data1</option><option value=\"ds2\">data2</option><option value=\"ds3\">data3</option></select> ");


function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  //var filterData = people.filter(function(person) {
  //  return person.datetime === inputValue;
 // });
 console.log("user input value");
 console.log(inputValue);
  //var inlineFilter = tableData.filter(person =>person.datetime == inputValue);

  console.log("selTitle option chosen chosen value");
  console.log(selTitle.property("value"));

  var chosenVal = selTitle.property("value");
  var inlineFilter = [];
  if (chosenVal == "city")
  inlineFilter = tableData.filter(person =>person.city.toUpperCase() == inputValue.toUpperCase());
  else if (chosenVal == "state")
  inlineFilter = tableData.filter(person =>person.state.toUpperCase() == inputValue.toUpperCase());
  else if (chosenVal == "country")
  inlineFilter = tableData.filter(person =>person.country.toUpperCase() == inputValue.toUpperCase());
  else if (chosenVal == "shape")
  inlineFilter = tableData.filter(person =>person.shape.toUpperCase() == inputValue.toUpperCase());
  else 
  inlineFilter = tableData.filter(person =>person.datetime == inputValue);
  
  console.log(inlineFilter);

 var list = d3.select("tbody");

 list.html("");
 /*
  
 inlineFilter.forEach(([datetime, city, state, country, shape, durationMinutes, comments]) => {
    var rd = list.append("tr");
    rd.append("td").text(datetime);
    rd.append("td").text(city);
    rd.append("td").text(state);
    rd.append("td").text(country);
    rd.append("td").text(shape);
    rd.append("td").text(durationMinutes);
    rd.append("td").text(comments);
});
*/

for (i =0; i<inlineFilter.length; i++) {
    var rd = list.append("tr");
    rd.append("td").text(inlineFilter[i].datetime);
    rd.append("td").text(inlineFilter[i].city);
    rd.append("td").text(inlineFilter[i].state);
    rd.append("td").text(inlineFilter[i].country);
    rd.append("td").text(inlineFilter[i].shape);
    rd.append("td").text(inlineFilter[i].durationMinutes);
    rd.append("td").text(inlineFilter[i].comments);

}

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  //d3.select("h1>span").text(inputValue);

}