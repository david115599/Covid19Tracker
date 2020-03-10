// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name} Confirmed Cases: {Total_Confirmed_cases} Recovered:{Recovered_cases} Deaths:{Deaths}";
polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];
//
polygonSeries.data = [{
  "id": "US",
  "name": "United States",
  "Total_Confirmed_cases": 100,
  "Recovered_cases": 100,
  "Deaths": 100
}, {
  "id": "FR",
  "name": "France",
  "Total_Confirmed_cases": 100,
  "Recovered_cases": 100,
  "Deaths": 100
},{
"id": "NY",
"name": "United States",
"Total_Confirmed_cases": 100,
"Recovered_cases": 100,
"Deaths": 100
}]
