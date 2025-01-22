# Belly Button Biodiversity Dashboard

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies / Dependencies Needed and Used](#technologies--dependencies-needed-and-used)
4. [How to Run the Application](#how-to-run-the-application)
5. [Visualizations](#visualizations)
   1. [Bar Chart](#bar-chart)
   2. [Bubble Chart](#bubble-chart)
6. [Data Source](#data-source)
7. [Development Process](#development-process)
8. [Sources](#sources)
9. [License](#license)
10. [Project By](#project-by)


## **Project Overview**
![Dashboard Screenshot](images/dashboard_screenshot.png)


### This interactive dashboard explores the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs) were present in more than 70% of people, while the rest were relatively rare.

## Features:
### Dropdown Menu: 
* Select different test subjects to view their data

  Demographic Info Panel: Displays the selected individual's demographic information

* Bar Chart: Shows top 10 bacteria cultures found in the selected individual

* Bubble Chart: Visualizes all bacteria cultures found in the selected individual

## **Technologies / Dependencies Needed and Used:**
* **JavaScript**
* **D3.js** for data handling
* **Plotly.js** for creating visualizations
* **HTML/CSS** for webpage structure and styling
* **GitHub Pages** for deployment
* **VS Code Live Server Extension**


## **How to Run the Application:**
**READ ALL THE WAY THROUGH FIRST!**

1. **Clone the Repository:**
   * If you don't already have the project files, you can clone the repository using the following command:
     ```bash
     git clone https://github.com/realmattimatt/belly-button-challenge.git
     ```

2. **Open VS Code:** Launch Visual Studio Code on your computer.

3. **Open Project:** Open the project folder where your Belly Button Challenge application files are located.

4. **Install Live Server Extension (if not installed):**
   * Go to the Extensions view in VS Code (usually the last icon in the sidebar).
   * Search for "Live Server" in the Extensions Marketplace.
   * Click on "Install" to install the extension.

5. **Start Live Server:**
   * In VS Code, navigate to the HTML file that serves as the entry point for your application (e.g., `index.html` or similar).
   * Right-click anywhere within the HTML file editor or use the shortcut `Alt + L, Alt + O` (on Windows/Linux) or `Option + L, Option + O` (on macOS) to open the file with Live Server.
   * This action will start a local development server and automatically open your default web browser to preview the application.

6. **Access Deployed Application:**
   * Once the Live Server is running, you should see your application running in your web browser.
   * To access the deployed application (hosted on GitHub or another platform), open a new tab in your web browser.
   * Enter the URL provided where your Belly Button Challenge application is deployed (e.g., your GitHub Pages URL or any other deployment URL).

7. **Interact with the Application:**
   * On the deployed application page, there should be a dropdown menu to select a test subject ID.
   * Choose an ID from the dropdown to view specific data related to that test subject.
   * Explore the different visualizations and demographic information that update based on your selection from the dropdown menu.

8. **Or... If you read all the steps first. You can run from the last link in "Sources" here:**
   * [Sources](#sources)


## **Visualizations**
### **Bar Chart:**
![Top 10 Bacteria Cultures](images/bar_chart.png)

### **Bubble Chart:**
![Bacteria Cultures Per Sample](images/bubble_chart.png)


## **Data Source:**
The data used in this dashboard is sourced from the Belly Button Biodiversity dataset.


### **Visualization Details:**
#### **Bar Chart:**

* Displays top 10 OTUs found in the selected
individual

* Uses sample_values as values

* Uses otu_ids as labels

* Uses otu_labels as hovertext

#### **Bubble Chart:**
* Displays all bacteria cultures found

* X values: otu_ids

* Y values: sample_values

* Marker size: sample_values

* Marker colors: otu_ids

* Text values: otu_labels

### **Development Process:**
1. Set up GitHub repository and basic file structure
2. Created initial HTML layout
3. Implemented data loading using D3.js
4. Created dropdown menu and event handling
5. Developed visualization components
6. Added styling and finalized layout
7. Deployed to GitHub Pages
   
**
### **Sources:**

* **d3.js** on W3 Schools [d3.js](https://www.w3schools.com/js/js_graphics_d3js.asp)
* **Plotly.js** @ [Plotly.js](https://plotly.com/javascript/)
* **HTML** on W3 Schools [HTML](https://www.w3schools.com/html/)
* **CSS** on W3 Schools [CSS](https://www.w3schools.com/css/)
* Office hours / Bootcamp instructional team for guidance and support
* Xpert Learning Assistant
* Tutor Carlos Gattorno
* ChatGPT
* belly-button-challenge github page [Git hub pages](https://realmattimatt.github.io/belly-button-challenge/)


### **License:**
This project is licensed under the [GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007](./LICENSE) - see the LICENSE file for details here.

## **Project By:**
**Matthew Matti** – Developer, Creator of this Belly Button Biodiversity Dashboard

## **Contact:**
For any questions or feedback, feel free to reach out to me at [mattimatt@hotmail.com](mailto:mattimatt@hotmail.com).

![License](https://img.shields.io/badge/license-GPL%203-blue)
