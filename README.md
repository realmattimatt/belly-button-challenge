# Belly Button Biodiversity Dashboard

## Project Overview
### This interactive dashboard explores the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs) were present in more than 70% of people, while the rest were relatively rare.

## Features:
### Dropdown Menu: 
* Select different test subjects to view their data

  Demographic Info Panel: Displays the selected individual's demographic information

* Bar Chart: Shows top 10 bacteria cultures found in the selected individual

* Bubble Chart: Visualizes all bacteria cultures found in the selected individual

## Technologies / Dependancies Needed and Used
* JavaScript

* D3.js for data handling

* Plotly.js for creating visualizations

* HTML/CSS for webpage structure and styling

* GitHub Pages for deployment

## How to Run
###
1. Visit the deployed application at: [[My GitHub Belly Button Challenge URL](https://github.com/realmattimatt/belly-button-challenge.git)]

2. Select a test subject ID from the dropdown menu to see their specific data

3. Explore the different visualizations and demographic information that update based on your selection


## Visualizations
### Bar Chart
![Top 10 Bacteria Cultures](images/bar_chart.png)

### Bubble Chart
![Bacteria Cultures Per Sample](images/bubble_chart.png)


## Data Source
The data used in this dashboard is sourced from the Belly Button Biodiversity dataset.


### Visualization Details
#### Bar Chart

* Displays top 10 OTUs found in the selected
individual

* Uses sample_values as values

* Uses otu_ids as labels

* Uses otu_labels as hovertext

#### Bubble Chart
* Displays all bacteria cultures found

* X values: otu_ids

* Y values: sample_values

* Marker size: sample_values

* Marker colors: otu_ids

* Text values: otu_labels

