# Interactive World Map with World Bank API

This project is an Angular web application that displays an interactive SVG world map and shows real-time country data from the World Bank API. The map highlights countries on hover and displays key information in a side panel when selected.

## Features

**Interactive SVG Map:** Highlights countries on hover.

**World Bank API Integration:** Displays country name, capital city, region, income level, and additional data.

**Angular Routing:** Default route redirects to /map.

**Two-Column Layout:** Map on the left, country data on the right.

**Reusable Angular Components:** Clean separation of logic and UI.

**HTTPClient Service:** Handles API calls and data retrieval efficiently.

## Technologies Used

Angular: 20.3.2

TypeScript

HTML / CSS

World Bank API

SVG Graphic

## Project Screenshots
<img src="https://github.com/ashlynmo/Interactive-World-Map/blob/main/Screenshots/World%20Map.png" alt="World Map">

**Example of Selected Country & Info from API:**

<img src="https://github.com/ashlynmo/Interactive-World-Map/blob/main/Screenshots/World%20Map%20-%20Country%20Selected.png" alt="World Map Country Selected">

## Project Requirements
Throughout your career in software engineering, you will be asked to enhance website functionality using JavaScript programming in conjunction with existing frameworks, assets, and web content. For this assessment, you will enhance a website using the Angular JavaScript framework and an application programming interface (API) by creating a visual interface for a scalable vector graphics (SVG) map.

### Scenario
Your task is to present a map of the world in an SVG format so that each country is highlighted upon a mouse event. Then you will convert the SVG map into an interactive Angular component and connect the application to an API service to provide the country information.

### Requirements
**B.**   Using the "SVG Map" web link, provide the world map visual interface for this project in your application.


**C.**   Using the "World Bank API" web link, identify each of the following six properties for each country:

•    country name (e.g., Chad)

•    country capital (e.g., N'Djamena)

•    country region (e.g., Sub-Saharan Africa)

•    income level (e.g., low income)

•    two additional country properties of your choice


**D.**   Using Angular routing, configure the root component to redirect automatically from the default URL to a URL of your choice (i.e., /map, /home, /index, /main).

Note: Your default route may not be left blank.


**E.**  Create an HTML layout with two columns: one column for the map itself and one column to show the required country information from the API in part C.


**F.**   Using event binding, convert the SVG map into an interactive Angular component.

1.   Connect the SVG file to a mouse event handler to transmit data to the component for processing.


**G.**   Generate an API service using HTTPClient to make HTTP calls and include the following methods:

•    one method within the service that accepts a two-letter country code as an input parameter that returns additional information gathered from the API for the selected country

•    one method within the component that will trigger the service method when a country is selected and set a local variable that will receive the information about the country for display in the appropriate column of the HTML page
