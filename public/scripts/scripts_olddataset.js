var d = new Date();
var buttonval = "0";
var countryList = [
  {"name": "Afghanistan", "code": "AF"},
  {"name": "land Islands", "code": "AX"},
  {"name": "Albania", "code": "AL"},
  {"name": "Algeria", "code": "DZ"},
  {"name": "American Samoa", "code": "AS"},
  {"name": "AndorrA", "code": "AD"},
  {"name": "Angola", "code": "AO"},
  {"name": "Anguilla", "code": "AI"},
  {"name": "Antarctica", "code": "AQ"},
  {"name": "Antigua and Barbuda", "code": "AG"},
  {"name": "Argentina", "code": "AR"},
  {"name": "Armenia", "code": "AM"},
  {"name": "Aruba", "code": "AW"},
  {"name": "Australia", "code": "AU"},
  {"name": "Austria", "code": "AT"},
  {"name": "Azerbaijan", "code": "AZ"},
  {"name": "Bahamas", "code": "BS"},
  {"name": "Bahrain", "code": "BH"},
  {"name": "Bangladesh", "code": "BD"},
  {"name": "Barbados", "code": "BB"},
  {"name": "Belarus", "code": "BY"},
  {"name": "Belgium", "code": "BE"},
  {"name": "Belize", "code": "BZ"},
  {"name": "Benin", "code": "BJ"},
  {"name": "Bermuda", "code": "BM"},
  {"name": "Bhutan", "code": "BT"},
  {"name": "Bolivia", "code": "BO"},
  {"name": "Bosnia and Herzegovina", "code": "BA"},
  {"name": "Botswana", "code": "BW"},
  {"name": "Bouvet Island", "code": "BV"},
  {"name": "Brazil", "code": "BR"},
  {"name": "British Indian Ocean Territory", "code": "IO"},
  {"name": "Brunei Darussalam", "code": "BN"},
  {"name": "Bulgaria", "code": "BG"},
  {"name": "Burkina Faso", "code": "BF"},
  {"name": "Burundi", "code": "BI"},
  {"name": "Cambodia", "code": "KH"},
  {"name": "Cameroon", "code": "CM"},
  {"name": "Canada", "code": "CA"},
  {"name": "Cape Verde", "code": "CV"},
  {"name": "Cayman Islands", "code": "KY"},
  {"name": "Central African Republic", "code": "CF"},
  {"name": "Chad", "code": "TD"},
  {"name": "Chile", "code": "CL"},
  {"name": "China", "code": "CN"},
  {"name": "Christmas Island", "code": "CX"},
  {"name": "Cocos (Keeling) Islands", "code": "CC"},
  {"name": "Colombia", "code": "CO"},
  {"name": "Comoros", "code": "KM"},
  {"name": "Congo", "code": "CG"},
  {"name": "Congo, The Democratic Republic of the", "code": "CD"},
  {"name": "Cook Islands", "code": "CK"},
  {"name": "Costa Rica", "code": "CR"},
  {"name": 'Cote D"Ivoire', "code": "CI"},
  {"name": "Croatia", "code": "HR"},
  {"name": "Cuba", "code": "CU"},
  {"name": "Cyprus", "code": "CY"},
  {"name": "Czech Republic", "code": "CZ"},
  {"name": "Denmark", "code": "DK"},
  {"name": "Djibouti", "code": "DJ"},
  {"name": "Dominica", "code": "DM"},
  {"name": "Dominican Republic", "code": "DO"},
  {"name": "Ecuador", "code": "EC"},
  {"name": "Egypt", "code": "EG"},
  {"name": "El Salvador", "code": "SV"},
  {"name": "Equatorial Guinea", "code": "GQ"},
  {"name": "Eritrea", "code": "ER"},
  {"name": "Estonia", "code": "EE"},
  {"name": "Ethiopia", "code": "ET"},
  {"name": "Falkland Islands (Malvinas)", "code": "FK"},
  {"name": "Faroe Islands", "code": "FO"},
  {"name": "Fiji", "code": "FJ"},
  {"name": "Finland", "code": "FI"},
  {"name": "France", "code": "FR"},
  {"name": "French Guiana", "code": "GF"},
  {"name": "French Polynesia", "code": "PF"},
  {"name": "French Southern Territories", "code": "TF"},
  {"name": "Gabon", "code": "GA"},
  {"name": "Gambia", "code": "GM"},
  {"name": "Georgia", "code": "GE"},
  {"name": "Germany", "code": "DE"},
  {"name": "Ghana", "code": "GH"},
  {"name": "Gibraltar", "code": "GI"},
  {"name": "Greece", "code": "GR"},
  {"name": "Greenland", "code": "GL"},
  {"name": "Grenada", "code": "GD"},
  {"name": "Guadeloupe", "code": "GP"},
  {"name": "Guam", "code": "GU"},
  {"name": "Guatemala", "code": "GT"},
  {"name": "Guernsey", "code": "GG"},
  {"name": "Guinea", "code": "GN"},
  {"name": "Guinea-Bissau", "code": "GW"},
  {"name": "Guyana", "code": "GY"},
  {"name": "Haiti", "code": "HT"},
  {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
  {"name": "Holy See (Vatican City State)", "code": "VA"},
  {"name": "Honduras", "code": "HN"},
  {"name": "Hong Kong", "code": "HK"},
  {"name": "Hungary", "code": "HU"},
  {"name": "Iceland", "code": "IS"},
  {"name": "India", "code": "IN"},
  {"name": "Indonesia", "code": "ID"},
  {"name": "Iran, Islamic Republic Of", "code": "IR"},
  {"name": "Iran", "code": "IR"},
  {"name": "Iraq", "code": "IQ"},
  {"name": "Ireland", "code": "IE"},
  {"name": "Isle of Man", "code": "IM"},
  {"name": "Israel", "code": "IL"},
  {"name": "Italy", "code": "IT"},
  {"name": "Jamaica", "code": "JM"},
  {"name": "Japan", "code": "JP"},
  {"name": "Jersey", "code": "JE"},
  {"name": "Jordan", "code": "JO"},
  {"name": "Kazakhstan", "code": "KZ"},
  {"name": "Kenya", "code": "KE"},
  {"name": "Kiribati", "code": "KI"},
  {"name": 'Korea, Democratic People"S Republic of', "code": "KP"},
  {"name": 'North Korea', "code": "KP"},
  {"name": "Korea, Republic of", "code": "KR"},
  {"name": "South Korea", "code": "KR"},
  {"name": "Kuwait", "code": "KW"},
  {"name": "Kyrgyzstan", "code": "KG"},
  {"name": 'Lao People"S Democratic Republic', "code": "LA"},
  {"name": "Latvia", "code": "LV"},
  {"name": "Lebanon", "code": "LB"},
  {"name": "Lesotho", "code": "LS"},
  {"name": "Liberia", "code": "LR"},
  {"name": "Libyan Arab Jamahiriya", "code": "LY"},
  {"name": "Liechtenstein", "code": "LI"},
  {"name": "Lithuania", "code": "LT"},
  {"name": "Luxembourg", "code": "LU"},
  {"name": "Macao", "code": "MO"},
  {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
  {"name": "Macedonia", "code": "MK"},
  {"name": "Madagascar", "code": "MG"},
  {"name": "Malawi", "code": "MW"},
  {"name": "Malaysia", "code": "MY"},
  {"name": "Maldives", "code": "MV"},
  {"name": "Mali", "code": "ML"},
  {"name": "Malta", "code": "MT"},
  {"name": "Marshall Islands", "code": "MH"},
  {"name": "Martinique", "code": "MQ"},
  {"name": "Mauritania", "code": "MR"},
  {"name": "Mauritius", "code": "MU"},
  {"name": "Mayotte", "code": "YT"},
  {"name": "Mexico", "code": "MX"},
  {"name": "Micronesia, Federated States of", "code": "FM"},
  {"name": "Moldova, Republic of", "code": "MD"},
  {"name": "Moldova", "code": "MD"},
  {"name": "Monaco", "code": "MC"},
  {"name": "Mongolia", "code": "MN"},
  {"name": "Montenegro", "code": "ME"},
  {"name": "Montserrat", "code": "MS"},
  {"name": "Morocco", "code": "MA"},
  {"name": "Mozambique", "code": "MZ"},
  {"name": "Myanmar", "code": "MM"},
  {"name": "Namibia", "code": "NA"},
  {"name": "Nauru", "code": "NR"},
  {"name": "Nepal", "code": "NP"},
  {"name": "Netherlands", "code": "NL"},
  {"name": "Netherlands Antilles", "code": "AN"},
  {"name": "New Caledonia", "code": "NC"},
  {"name": "New Zealand", "code": "NZ"},
  {"name": "Nicaragua", "code": "NI"},
  {"name": "Niger", "code": "NE"},
  {"name": "Nigeria", "code": "NG"},
  {"name": "Niue", "code": "NU"},
  {"name": "Norfolk Island", "code": "NF"},
  {"name": "Northern Mariana Islands", "code": "MP"},
  {"name": "Norway", "code": "NO"},
  {"name": "Oman", "code": "OM"},
  {"name": "Pakistan", "code": "PK"},
  {"name": "Palau", "code": "PW"},
  {"name": "Palestinian Territory, Occupied", "code": "PS"},
  {"name": "Palestine", "code": "PS"},
  {"name": "Panama", "code": "PA"},
  {"name": "Papua New Guinea", "code": "PG"},
  {"name": "Paraguay", "code": "PY"},
  {"name": "Peru", "code": "PE"},
  {"name": "Philippines", "code": "PH"},
  {"name": "Pitcairn", "code": "PN"},
  {"name": "Poland", "code": "PL"},
  {"name": "Portugal", "code": "PT"},
  {"name": "Puerto Rico", "code": "PR"},
  {"name": "Qatar", "code": "QA"},
  {"name": "Reunion", "code": "RE"},
  {"name": "Romania", "code": "RO"},
  {"name": "Russian Federation", "code": "RU"},
  {"name": "Russia", "code": "RU"},
  {"name": "RWANDA", "code": "RW"},
  {"name": "Saint Helena", "code": "SH"},
  {"name": "Saint Kitts and Nevis", "code": "KN"},
  {"name": "Saint Lucia", "code": "LC"},
  {"name": "Saint Pierre and Miquelon", "code": "PM"},
  {"name": "Saint Vincent and the Grenadines", "code": "VC"},
  {"name": "Samoa", "code": "WS"},
  {"name": "San Marino", "code": "SM"},
  {"name": "Sao Tome and Principe", "code": "ST"},
  {"name": "Saudi Arabia", "code": "SA"},
  {"name": "Senegal", "code": "SN"},
  {"name": "Serbia", "code": "RS"},
  {"name": "Seychelles", "code": "SC"},
  {"name": "Sierra Leone", "code": "SL"},
  {"name": "Singapore", "code": "SG"},
  {"name": "Slovakia", "code": "SK"},
  {"name": "Slovenia", "code": "SI"},
  {"name": "Solomon Islands", "code": "SB"},
  {"name": "Somalia", "code": "SO"},
  {"name": "South Africa", "code": "ZA"},
  {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
  {"name": "Spain", "code": "ES"},
  {"name": "Sri Lanka", "code": "LK"},
  {"name": "Sudan", "code": "SD"},
  {"name": "Suriname", "code": "SR"},
  {"name": "Svalbard and Jan Mayen", "code": "SJ"},
  {"name": "Swaziland", "code": "SZ"},
  {"name": "Sweden", "code": "SE"},
  {"name": "Switzerland", "code": "CH"},
  {"name": "Syrian Arab Republic", "code": "SY"},
  {"name": "Taiwan, Province of China", "code": "TW"},
  {"name": "Tajikistan", "code": "TJ"},
  {"name": "Tanzania, United Republic of", "code": "TZ"},
  {"name": "Thailand", "code": "TH"},
  {"name": "Timor-Leste", "code": "TL"},
  {"name": "Togo", "code": "TG"},
  {"name": "Tokelau", "code": "TK"},
  {"name": "Tonga", "code": "TO"},
  {"name": "Trinidad and Tobago", "code": "TT"},
  {"name": "Tunisia", "code": "TN"},
  {"name": "Turkey", "code": "TR"},
  {"name": "Turkmenistan", "code": "TM"},
  {"name": "Turks and Caicos Islands", "code": "TC"},
  {"name": "Tuvalu", "code": "TV"},
  {"name": "Uganda", "code": "UG"},
  {"name": "Ukraine", "code": "UA"},
  {"name": "United Arab Emirates", "code": "AE"},
  {"name": "United Kingdom", "code": "GB"},
  {"name": "United States", "code": "US"},
  {"name": "United States of America", "code": "US"},
  {"name": "United States Minor Outlying Islands", "code": "UM"},
  {"name": "Uruguay", "code": "UY"},
  {"name": "Uzbekistan", "code": "UZ"},
  {"name": "Vanuatu", "code": "VU"},
  {"name": "Venezuela", "code": "VE"},
  {"name": "Vietnam", "code": "VN"},
  {"name": "Virgin Islands, British", "code": "VG"},
  {"name": "Virgin Islands, U.S.", "code": "VI"},
  {"name": "Wallis and Futuna", "code": "WF"},
  {"name": "Western Sahara", "code": "EH"},
  {"name": "Yemen", "code": "YE"},
  {"name": "Zambia", "code": "ZM"},
  {"name": "Zimbabwe", "code": "ZW"},
  {"name": "Mainland China", "code": "CN"}
];

  var population = [];

$.ajax({
  type: "GET",
  url: "/data/worldpop.csv",
  dataType: "text",
  success: function(data) {getpopulation(data);}
});


function getpopulation(allText) {
  //console.log(allText);
  var temp = allText.split("/").join("_")
  var allTextLines = temp.split(/\r\n|\n/);
  var headers = (allTextLines[0].split(" ").join("_")).toString().split(',');

  /*console.log(temp);
  console.log(allTextLines);*/
  //  console.log(headers);

  //console.log(headers);
  for (var i=0; i<allTextLines.length; i++) {
    var data = allTextLines[i].split(',');
    population[i] = {};
    for (var q = 0; q < headers.length; q++) {
      population[i][headers[q]] = data[q];
      //  console.log(data[q]);
    }
  }
  for (var i=0; i<population.length-1; i++) {
  /*  console.log(population[i]['"Country_Code"'].substring(1,3));
    console.log(population[i]['"Country_Code"']);
    console.log(population[i]['"2019"'].substring(1, population[i]['"2019"'].length - 1));*/
  }
  //console.log("population");
//  console.log(population);
}






// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

$.ajax({
  type: "GET",
  url: "https://raw.githubusercontent.com/owid/covid-19-who/master/public/data/full_data.csv",
  dataType: "text",
  success: function(data) {processData(data);}
});


function processData(allText) {
  chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  // Create map polygon series
  polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;

  // Configure series
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}: | Confirmed Cases: {Total_Confirmed_cases} | Deaths:{Deaths}";
  polygonTemplate.fill = am4core.color("#EFD6AC");

  var lastSelected;
  polygonTemplate.events.on("hit", function(ev) {
    if (lastSelected) {
      // This line serves multiple purposes:
      // 1. Clicking a country twice actually de-activates, the line below
      //    de-activates it in advance, so the toggle then re-activates, making it
      //    appear as if it was never de-activated to begin with.
      // 2. Previously activated countries should be de-activated.
      lastSelected.isActive = false;
    }
    ev.target.series.chart.zoomToMapObject(ev.target);
    if (lastSelected !== ev.target) {
      lastSelected = ev.target;
    }
  })

  // Create hover state and set alternative fill color
  var hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#C6D8AF");

  // Remove Antarctica
  polygonSeries.exclude = ["AQ"];
  chart.smallMap = new am4maps.SmallMap();
  // Re-position to top right (it defaults to bottom left)
  chart.smallMap.align = "left";
  chart.smallMap.valign = "bottom";
  chart.smallMap.series.push(polygonSeries);

  // Zoom control
  chart.zoomControl = new am4maps.ZoomControl();

  var homeButton = new am4core.Button();
  homeButton.events.on("hit", function(){
    chart.goHome();
  });

  homeButton.icon = new am4core.Sprite();
  homeButton.padding(7, 5, 7, 5);
  homeButton.width = 30;
  homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
  homeButton.marginBottom = 10;
  homeButton.parent = chart.zoomControl;
  homeButton.insertBefore(chart.zoomControl.plusButton);

  var confirmeddata = [];
  var infectedcountries = [];
  var urlf;
  var thisdate;
  var latest_stats=[];
  var content ='<option value= "0"> Select a Country/Region </option>';
  month = d.getMonth()+1;
  if (d.getMonth()+1<10) {
    if (d.getDate()<10) {
      thisdate = d.getFullYear()+'-0'+(month)+'-0'+d.getDate();
    }
    thisdate = d.getFullYear()+'-0'+(month)+'-'+d.getDate();
  }
  else if (d.getDay()<10) {
    thisdate = d.getFullYear()+'-'+(month)+'-0'+d.getDate();
  }
  //console.log(allText);
  var temp = allText.split("/").join("_")
  var allTextLines = temp.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');

  //console.log(headers);
  for (var i=0; i<allTextLines.length; i++) {
    var data = allTextLines[i].split(',');
    confirmeddata[i] = {};
    if (data.length == headers.length) {
      for (var q = 0; q < headers.length; q++) {
        confirmeddata[i][headers[q]] = data[q];
      }
    }
  }
  var stattablevar = "";
  for (var i = 0; i < confirmeddata.length-1; i++) {
    //console.log(confirmeddata[i].date+"got here"+confirmeddata[confirmeddata.length-2].date);
    if (confirmeddata[i].date == confirmeddata[confirmeddata.length-2].date) {
      latest_stats.push(confirmeddata[i]);
      //console.log("also got here");
      /*  'Total Cases<span class="badge badge-light">'+latest_stats[latest_stats.length-1].total_cases+'</span>, New Cases <span class="badge badge-light">'+latest_stats[latest_stats.length-1].new_cases+'</span>, Total Deaths <span class="badge badge-light">'+latest_stats[latest_stats.length-1].total_deaths+'</span>, New Deaths <span class="badge badge-light">'+latest_stats[latest_stats.length-1].new_deaths+'</span>, Last Updated <span class="badge badge-light">'+latest_stats[latest_stats.length-1].date+'</span>'*/
    }
  }
  //console.log(latest_stats[latest_stats.length-1]);

  $('#worldstats').html('Total Cases<span class="badge badge-light">'+latest_stats[latest_stats.length-1].total_cases+'</span>, New Cases <span class="badge badge-light">'+latest_stats[latest_stats.length-1].new_cases+'</span>, Total Deaths <span class="badge badge-light">'+latest_stats[latest_stats.length-1].total_deaths+'</span>, New Deaths <span class="badge badge-light">'+latest_stats[latest_stats.length-1].new_deaths+'</span>, Last Updated <span class="badge badge-light">'+latest_stats[latest_stats.length-1].date+'</span>');
  for (var i = 0; i < latest_stats.length; i++) {
    for (var q = 0; q < countryList.length; q++) {
      if (countryList[q].name == latest_stats[i].location) {
        if (buttonval == "0") {
          infectedcountries.push({"id": countryList[q].code, "name" : latest_stats[i].location, "Total_Confirmed_cases":latest_stats[i].total_cases,"Deaths":latest_stats[i].total_deaths ,"value":latest_stats[i].total_cases  });
          content+=  '<option value= '+countryList[q].code+' >'+latest_stats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+latest_stats[i].location+'</div><div class="col-sm">'+latest_stats[i].total_cases+'</div><div class="col-sm">'+latest_stats[i].total_deaths+'</div></div><hr>';
        }
        else if  (buttonval == "1") {
          infectedcountries.push({"id": countryList[q].code, "name" : latest_stats[i].location, "Total_Confirmed_cases":latest_stats[i].total_cases,"Deaths":latest_stats[i].total_deaths ,"value":latest_stats[i].total_deaths  });
          content+=  '<option value= '+countryList[q].code+'>'+latest_stats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+latest_stats[i].location+'</div><div class="col-sm">'+latest_stats[i].total_cases+'</div><div class="col-sm">'+latest_stats[i].total_deaths+'</div></div><hr>';
        }
        else if  (buttonval == "2") {
          infectedcountries.push({"id": countryList[q].code, "name" : latest_stats[i].location, "Total_Confirmed_cases":latest_stats[i].total_cases,"Deaths":latest_stats[i].total_deaths ,"value":(latest_stats[i].total_deaths/(population[i]['"2019"'].substring(1, population[i]['"2019"'].length - 1)))  });
          content+=  '<option value= '+countryList[q].code+'>'+latest_stats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+latest_stats[i].location+'</div><div class="col-sm">'+latest_stats[i].total_cases+'</div><div class="col-sm">'+latest_stats[i].total_deaths+'</div></div><hr>';
        }

        //console.log(buttonval);
      }
      /*  if (countryList[q].id == confirmeddata[i].Country_Region) {
      infectedcountries.push({"id": confirmeddata[q].Country_Region, "name" : confirmeddata[i].Country_Region, "Total_Confirmed_cases":parseInt(confirmeddata[i][Object.keys(confirmeddata[i])[Object.keys(confirmeddata[i]).length-1]])});
    }*/
  }
}
$('#stattable').html(stattablevar);
//console.log(confirmeddata);
//  console.log(content);
$('#countryselect').html(content);
polygonSeries.data = infectedcountries
var heatLegend = chart.createChild(am4maps.HeatLegend);
polygonSeries.heatRules.push({
  "property": "fill",
  "target": polygonSeries.mapPolygons.template,
  "min": am4core.color("#FFC07F"),
  "max": am4core.color("#6B0F1A")
});

// Add heat legend

heatLegend.series = polygonSeries;
heatLegend.width = am4core.percent(100);
heatLegend.valueAxis.renderer.labels.template.fontSize = 12;
heatLegend.valueAxis.renderer.minGridDistance = 60;
polygonSeries.mapPolygons.template.events.on("over", function(ev) {
  if (!isNaN(ev.target.dataItem.value)) {
    heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
  }
  else {
    heatLegend.valueAxis.hideTooltip();
  }
});

polygonSeries.mapPolygons.template.events.on("out", function(ev) {
  heatLegend.valueAxis.hideTooltip();
});
}

const selectElement = document.querySelector('#mapdat');
selectElement.addEventListener('change', (event) => {
  buttonval = $("#mapdat").val();
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/owid/covid-19-who/master/public/data/full_data.csv",
    dataType: "text",
    success: function(data) {processData(data);}
  });
});


const selectElement2 = document.querySelector('#countryselect');
selectElement2.addEventListener('change', (event) => {
  var countryval = $("#countryselect").val();
  chart.zoomToMapObject(polygonSeries.getPolygonById(countryval));
  if (countryval == 0) {
    chart.goHome();
  }
});
