// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    // let sampleValueDesired = 940; may need to delete this line. 
    let metadata = data.metadata;
    //    console.log("Metadata array:", metadata);
    // Find the metadata object for the desired sample
    // We use find() because we want exactly one object that matches our sample id
    // Note: sample is passed in as a string, but metadata.id is a number, so we use parseInt()
    let resultArray = metadata.find(sampleObj => sampleObj.id === parseInt(sample));
    //    console.log("Selected sample metadata:", resultArray);
    // Select the metadata display panel
    let panel = d3.select("#sample-metadata");
    
    // Clear any existing metadata
    panel.html("");

    Object.entries(resultArray).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}
    
    // Use d3 to select the panel with id of `#sample-metadata`
    d3.select("#sample-metadata").html("");

     // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
  function displayMetadata(result, PANEL) {
      // Clear any existing metadata first
    PANEL.html("");
      
      // Create a container for our metadata
    for (let key in result) {
      // Format the value based on what type of data it is
      let value = result[key];
      let displayValue = value;
          
      // Special formatting for certain types of data
      if (key === "age") {
          displayValue = `${value} years`;
      } else if (key === "wfreq") {
          displayValue = `${value} times per week`;
      }
          
          // Create and append the formatted text
      PANEL.append("h6")
          .text(`${key.toUpperCase()}: ${displayValue}`)
          .style("margin", "5px 0"); // Add some spacing between lines
  }
}
  function buildCharts(sample) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      // Get the samples array from the data
      let samples = data.samples;
      
      // Find the matching sample object
      let resultArray = samples.find(sampleObj => sampleObj.id === sample);
      
      // Get the necessary arrays for plotting
      let otu_ids = resultArray.otu_ids;
      let otu_labels = resultArray.otu_labels;
      let sample_values = resultArray.sample_values;
      
      // Let's add some console logs to understand our data
      // console.log("Sample values:", sample_values);
      // console.log("OTU IDs:", otu_ids);
      // console.log("OTU Labels:", otu_labels);
  
      // Create the yticks for the bar chart by mapping the top 10 otu_ids
      // We slice first, then map, to get only the top 10
      let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

      // Create the trace for the bar chart
      let barData = [{
        x: sample_values.slice(0, 10).reverse(),
        y: yticks,
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
    }];

    // Create the layout for the bar chart
    let barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 }
    };

    // Plot the bar chart
    Plotly.newPlot("bar", barData, barLayout);

    // Create the trace for the bubble chart
    let bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }
    }];


// Create the layout for the bubble chart
    let bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      hovermode: 'closest',
      xaxis: { title: "OTU ID" },
      margin: { t: 30 }
    };

    // Plot the bubble chart
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
  });
} 


// Function to run on page load
function init() { 
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {   

    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");
    names.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample);
    });

    // Get the first sample from the list
    let initialSample = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(initialSample);
    buildMetadata(initialSample);
  }).catch(error => console.error("Error initializing dashboard:", error));
}
  
// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard

init();

