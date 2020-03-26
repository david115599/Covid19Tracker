var d = new Date();
var buttonval = "0";
var thisdate;
var timeseriesdatacase = [];
var timeseriesdatadeath = [];
var timeseriesdatarecov = [];
var processinter;
var dayssincestart = 0;
var countryval = 0;
var Greenlandval = [];
var confirmregion = [];
var deathregion = [];
var recovregion = [];
var modalcontent;
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
  {"name": "China", "code": "CHN"},
  {"name": "Christmas Island", "code": "CX"},
  {"name": "Cocos (Keeling) Islands", "code": "CC"},
  {"name": "Colombia", "code": "CO"},
  {"name": "Comoros", "code": "KM"},
  {"name": "Congo", "code": "CG"},
  {"name": "Congo, The Democratic Republic of the", "code": "CD"},
  {"name": "Congo (Brazzaville)", "code": "CD"},
  {"name": "Cook Islands", "code": "CK"},
  {"name": "Costa Rica", "code": "CR"},
  {"name": 'Cote D"Ivoire', "code": "CI"},
  {"name": "Cote d'Ivoire", "code": "CI"},
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
  {"name": "Tanzania", "code": "TZ"},
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
  //{"name": "United States of America", "code": "US"},
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
  //  console.log(allText);
  var temp = allText.split("/").join("_");
  var allTextLines = temp.split(/\r\n|\n/);
  var headers = (allTextLines[0].split(" ").join("_")).toString().split(',');

  /*console.log(temp);
  console.log(allTextLines);*/
  //  console.log(headers);

  //console.log(headers);
  for (var q = 0; q < headers.length-1; q++) {
    //  headers[q] = headers[q].substring(1, headers[q].length - 1);
  }
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

fetchdata();
function fetchdata(){
  processinter = 0;
  var confirmed = [];
  var deaths = [];
  var recov = [];
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    dataType: "text",
    success: function(data) {confirmedcase(data);}
  });
  function confirmedcase(data) {
    confirmed = parseinputdata(data);
    //console.log(confirmed);
    $.ajax({
      type: "GET",
      url: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",
      dataType: "text",
      success: function(data) {deathscase(data);}
    });
    function deathscase(data) {
      deaths = parseinputdata(data);
      //console.log(deaths);
      $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv",
        dataType: "text",
        success: function(data) {recovscase(data);}
      });
      function recovscase(data) {
        recov = parseinputdata(data);
        /*
        console.log(timeseriesdatacase);
        console.log(timeseriesdatadeath);
        console.log(timeseriesdatarecov);
        */
        compiledata(confirmed, deaths, recov);
      }
    }
  }
}


function compiledata(confirmed, deaths, recov){
  var compliedstats = [];
  for (var i = 0; i < confirmed.length-5; i++) {//idk why -5 works but it suddenly does
  //  console.log("location:"+ confirmed[i].location+ "total_cases"+confirmed[i].total_cases+ "total_deaths"+deaths[i].total_cases+ "total_recovered"+recov[i].total_cases);
    compliedstats.push({"location": confirmed[i].location, "total_cases":confirmed[i].total_cases, "total_deaths":deaths[i].total_cases, "total_recovered":recov[i].total_cases})
  }
  //console.log(confirmed);
  makemap(compliedstats);
}


function parseinputdata(alltext){
  processinter++
  var supertemp = alltext;
  var confirmeddata = [];
  var latest_stats = [];
  //console.log(allText);
  var temp = supertemp.split("/").join("_")
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
  //  console.log(confirmeddata);
  thisdate = Object.keys(confirmeddata[0])[Object.keys(confirmeddata[0]).length-1];
  for (var i = 0; i < confirmeddata.length-1; i++) {
    var skipI = true;
    if(confirmeddata[i].Province_State=="Greenland"){
      if (processinter == 1 && i>0) {
        //  confirmregion.push({"location": confirmeddata[i].Province_State, "total_cases":confirmeddata[i][thisdate]});
        Greenlandval[0]=confirmeddata[i][Object.keys(confirmeddata[i])[r]];
      }
      else if (processinter == 2 && i>0) {
        //  deathregion.push({"location": confirmeddata[i].Province_State, "total_cases":confirmeddata[i][thisdate]});
        Greenlandval[1]=confirmeddata[i][Object.keys(confirmeddata[i])[r]];
      }
      else if (processinter == 3 && i>0) {
        //  recovregion.push({"location": confirmeddata[i].Province_States, "total_cases":confirmeddata[i][thisdate]});
        Greenlandval[2]=confirmeddata[i][Object.keys(confirmeddata[i])[r]];
      }
      //    console.log(Greenlandval);
    }
    if (processinter == 1 && i>0) {
      confirmregion.push({"location": confirmeddata[i].Province_State, "total_cases":confirmeddata[i][thisdate], "lat": confirmeddata[i].Lat, "long": confirmeddata[i].Long});
      //Greenlandval[0]=confirmeddata[i][Object.keys(confirmeddata[i])[r]];
    }
    else if (processinter == 2 && i>0) {
      deathregion.push({"location": confirmeddata[i].Province_State, "total_cases":confirmeddata[i][thisdate], "lat": confirmeddata[i].lat, "long": confirmeddata[i].long});
      //Greenlandval[1]=confirmeddata[i][Object.keys(confirmeddata[i])[r]];
    }
    else if (processinter == 3 && i>0) {
      recovregion.push({"location": confirmeddata[i].Province_States, "total_cases":confirmeddata[i][thisdate], "lat": confirmeddata[i].lat, "long": confirmeddata[i].long});
      //Greenlandval[2]=confirmeddata[i][Object.keys(confirmeddata[i])[r]];
    }

    for (var z = 0; z < latest_stats.length; z++) {
      if (latest_stats[z].location == confirmeddata[i].Country_Region) {
        skipI = false;
      }
    }
    if (skipI) {
      //  console.log(tempindex);
      latest_stats.push({"location": confirmeddata[i].Country_Region, "total_cases":confirmeddata[i][thisdate]});
      dayssincestart = Object.keys(confirmeddata[i]).length-1-4;
      for (var r = 4; r < Object.keys(confirmeddata[i]).length-1; r++) {
        //  timeseriesdata[0][tempindex][Object.keys(confirmeddata[i])[r]] = confirmeddata[i][Object.keys(confirmeddata[i])[r]];
        //console.log(  Object.keys(confirmeddata[i])[r]);
        if (processinter == 1 && i>0) {
          timeseriesdatacase.push({"location":confirmeddata[i].Country_Region,[Object.keys(confirmeddata[i])[r]] : confirmeddata[i][Object.keys(confirmeddata[i])[r]]});
          for (var q = 0; q < confirmeddata.length-1; q++) {
            if (confirmeddata[i].Country_Region == confirmeddata[q].Country_Region && i != q) {
              timeseriesdatacase[timeseriesdatacase.length-1][Object.keys(confirmeddata[i])[r]] = parseInt(timeseriesdatacase[timeseriesdatacase.length-1][Object.keys(confirmeddata[i])[r]]) + parseInt(confirmeddata[q][Object.keys(confirmeddata[i])[r]]);
            }
          }
        }
        else if (processinter == 2 && i>0) {
          timeseriesdatadeath.push({"location":confirmeddata[i].Country_Region,[Object.keys(confirmeddata[i])[r]] : confirmeddata[i][Object.keys(confirmeddata[i])[r]]});
          for (var q = 0; q < confirmeddata.length-1; q++) {
            if (confirmeddata[i].Country_Region == confirmeddata[q].Country_Region && i != q) {
              timeseriesdatadeath[timeseriesdatadeath.length-1][Object.keys(confirmeddata[i])[q]] = parseInt(timeseriesdatadeath[timeseriesdatadeath.length-1][Object.keys(confirmeddata[i])[r]]) + parseInt(confirmeddata[i][Object.keys(confirmeddata[i])[q]]);
            }
          }
        }
        else if (processinter == 3 && i>0) {
          timeseriesdatarecov.push({"location":confirmeddata[i].Country_Region,[Object.keys(confirmeddata[i])[r]] : confirmeddata[i][Object.keys(confirmeddata[i])[r]]});
          for (var q = 0; q < confirmeddata.length-1; q++) {
            if (confirmeddata[i].Country_Region == confirmeddata[q].Country_Region && i != q) {
              timeseriesdatarecov[timeseriesdatarecov.length-1][Object.keys(confirmeddata[i])[q]] = parseInt(timeseriesdatarecov[timeseriesdatarecov.length-1][Object.keys(confirmeddata[i])[r]]) + parseInt(confirmeddata[i][Object.keys(confirmeddata[i])[q]]);
            }
          }
        }
      }
      //  console.log(Object.keys(confirmeddata[i]));
      for (var q = 0; q < confirmeddata.length-1; q++) {
        if (confirmeddata[i].Country_Region == confirmeddata[q].Country_Region && i != q) {
          latest_stats[latest_stats.length-1].total_cases = parseInt(latest_stats[latest_stats.length-1].total_cases) + parseInt(confirmeddata[q][thisdate]);
        }
      }
    }
  }
  return(latest_stats);
}




function makemap(compliedstats) {
  var stattablevar = "";
  chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set map definition
  chart.geodata = am4geodata_worldHigh;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  // Create map polygon series
  polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;

  // Configure series
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}: | Confirmed Cases: {Total_Confirmed_cases} | Deaths:{Deaths} | Recovered:{Recovered}";
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
    //  console.log(ev.target.polygon._dataItem._dataContext.id);
    countryval =ev.target.polygon._dataItem._dataContext.id;
    ev.target.series.chart.zoomToMapObject(ev.target);
    if (lastSelected !== ev.target) {
      lastSelected = ev.target;
      maketimeseries();
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

  //console.log(latest_stats);
  var infectedcountries = [];
  var content ='<option value= "0"> Select a Country/Region </option>';
  var worldtotal = 0;
  var worldtotalrecovered = 0;
  var worldtotaldeath = 0;
  for (var i = 0; i < compliedstats.length-1; i++) {
    if (!Number.isNaN(compliedstats[i].total_cases)) {
      worldtotal = parseInt(worldtotal)+parseInt(compliedstats[i].total_cases);
    }
    if (!Number.isNaN(compliedstats[i].total_recovered)) {
      worldtotalrecovered = parseInt(worldtotalrecovered)+parseInt(compliedstats[i].total_recovered);
    }
    if (!Number.isNaN(compliedstats[i].total_deaths)) {
      worldtotaldeath = parseInt(worldtotaldeath)+parseInt(compliedstats[i].total_deaths);
    }
  }
  //console.log(worldtotal,worldtotalrecovered,worldtotaldeath);
  $('#worldstats').html('Total Cases<span class="badge badge-light">'+worldtotal+'</span>, Recovered <span class="badge badge-light">'+worldtotalrecovered+'</span>, Total Deaths <span class="badge badge-light">'+worldtotaldeath+'</span>, Last Updated <span class="badge badge-light">'+thisdate+'</span>');
  //console.log(population);
  if (buttonval == "0") {
    infectedcountries.push({"id": "GL", "name" : "Greenland", "Total_Confirmed_cases":Greenlandval[0],"Deaths":Greenlandval[1] ,"Recovered":Greenlandval[2],"value":parseInt(Greenlandval[0])  });
  }
  else if  (buttonval == "1") {
    infectedcountries.push({"id": "GL", "name" : "Greenland", "Total_Confirmed_cases":Greenlandval[0],"Deaths":Greenlandval[1] ,"Recovered":Greenlandval[2],"value":parseInt(Greenlandval[1])  });
  }
  else if  (buttonval == "5") {
    infectedcountries.push({"id": countryList[q].code, "name" : compliedstats[i].location, "Total_Confirmed_cases":compliedstats[i].total_cases,"Deaths":compliedstats[i].total_deaths ,"Recovered":compliedstats[i].total_recovered ,"value":compliedstats[i].total_recovered  });
    infectedcountries.push({"id": "GL", "name" : "Greenland", "Total_Confirmed_cases":Greenlandval[0],"Deaths":Greenlandval[1] ,"Recovered":Greenlandval[2],"value":parseInt(Greenlandval[2])  });
  }
  else if  (buttonval == "6") {
    infectedcountries.push({"id": "GL", "name" : "Greenland", "Total_Confirmed_cases":Greenlandval[0],"Deaths":Greenlandval[1] ,"Recovered":Greenlandval[2],"value":(parseInt(Greenlandval[2])/(parseInt(Greenlandval[0])))  });
  }
  else if  (buttonval == "2") {
    for (var z = 0; z < population.length-1; z++) {
      //console.log(population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1));
      //  console.log(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))
      if (population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1) == "GL") {
        infectedcountries.push({"id": "GL", "name" : "Greenland", "Total_Confirmed_cases":Greenlandval[0],"Deaths":Greenlandval[1] ,"Recovered":Greenlandval[2],"value":(parseInt(Greenlandval[1])/(parseInt(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))))  });
      }
    }
  }
  else if  (buttonval == "3") {
    for (var z = 0; z < population.length-1; z++) {
      if (population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1) == "GL") {
        infectedcountries.push({"id": "GL", "name" : "Greenland", "Total_Confirmed_cases":Greenlandval[0],"Deaths":Greenlandval[1] ,"Recovered":Greenlandval[2],"value":(parseInt(Greenlandval[0])/(parseInt(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))))  });
      }
    }
  }
  else if  (buttonval == "4") {
    for (var z = 0; z < population.length-1; z++) {
      if (population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1) == "GL") {
        infectedcountries.push({"id": "GL", "name" : "Greenland", "Total_Confirmed_cases":Greenlandval[0],"Deaths":Greenlandval[1] ,"Recovered":Greenlandval[2],"value":(parseInt(Greenlandval[2])/(parseInt(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))))  });
      }
    }
  }

  //console.log(infectedcountries);

  for (var i = 0; i < compliedstats.length; i++) {
    for (var q = 0; q < countryList.length; q++) {
      if (countryList[q].name == compliedstats[i].location || countryList[q].code == compliedstats[i].location) {
        if (buttonval == "0") {

          infectedcountries.push({"id": countryList[q].code, "name" : compliedstats[i].location, "Total_Confirmed_cases":compliedstats[i].total_cases,"Deaths":compliedstats[i].total_deaths ,"Recovered":compliedstats[i].total_recovered ,"value":compliedstats[i].total_cases  });
          content+=  '<option value= '+countryList[q].code+' >'+compliedstats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+compliedstats[i].location+'</div><div class="col-sm">'+compliedstats[i].total_cases+'</div><div class="col-sm">'+compliedstats[i].total_deaths+'</div><div class="col-sm">'+compliedstats[i].total_recovered+'</div></div><hr>';
        }
        else if  (buttonval == "1") {
          infectedcountries.push({"id": countryList[q].code, "name" : compliedstats[i].location, "Total_Confirmed_cases":compliedstats[i].total_cases,"Deaths":compliedstats[i].total_deaths ,"Recovered":compliedstats[i].total_recovered ,"value":compliedstats[i].total_deaths  });
          content+=  '<option value= '+countryList[q].code+'>'+compliedstats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+compliedstats[i].location+'</div><div class="col-sm">'+compliedstats[i].total_cases+'</div><div class="col-sm">'+compliedstats[i].total_deaths+'</div><div class="col-sm">'+compliedstats[i].total_recovered+'</div></div><hr>';
        }
        else if  (buttonval == "5") {
          infectedcountries.push({"id": countryList[q].code, "name" : compliedstats[i].location, "Total_Confirmed_cases":compliedstats[i].total_cases,"Deaths":compliedstats[i].total_deaths ,"Recovered":compliedstats[i].total_recovered ,"value":compliedstats[i].total_recovered  });
          content+=  '<option value= '+countryList[q].code+'>'+compliedstats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+compliedstats[i].location+'</div><div class="col-sm">'+compliedstats[i].total_cases+'</div><div class="col-sm">'+compliedstats[i].total_deaths+'</div><div class="col-sm">'+compliedstats[i].total_recovered+'</div></div><hr>';
        }
        else if  (buttonval == "6") {
          infectedcountries.push({"id": countryList[q].code, "name" : compliedstats[i].location, "Total_Confirmed_cases":compliedstats[i].total_cases,"Deaths":compliedstats[i].total_deaths ,"Recovered":compliedstats[i].total_recovered ,"value":compliedstats[i].total_recovered/compliedstats[i].total_cases});
          content+=  '<option value= '+countryList[q].code+'>'+compliedstats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+compliedstats[i].location+'</div><div class="col-sm">'+compliedstats[i].total_cases+'</div><div class="col-sm">'+compliedstats[i].total_deaths+'</div><div class="col-sm">'+compliedstats[i].total_recovered+'</div></div><hr>';
        }
        else if  (buttonval == "2") {
          for (var z = 0; z < population.length-1; z++) {
            //console.log(population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1));
            //  console.log(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))
            if (population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1) == countryList[q].code) {
              infectedcountries.push({"id": countryList[q].code, "name" : compliedstats[i].location, "Total_Confirmed_cases":compliedstats[i].total_cases,"Deaths":compliedstats[i].total_deaths ,"Recovered":compliedstats[i].total_recovered,"value":(parseInt(compliedstats[i].total_deaths)/(parseInt(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))))  });
              //console.log("here");
              //console.log(population[i]['"Country_Code"']);
              //  console.log(compliedstats[i].total_deaths/parseInt(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1)));
            }
          }
          content+=  '<option value= '+countryList[q].code+'>'+compliedstats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+compliedstats[i].location+'</div><div class="col-sm">'+compliedstats[i].total_cases+'</div><div class="col-sm">'+compliedstats[i].total_deaths+'</div><div class="col-sm">'+compliedstats[i].total_recovered+'</div></div><hr>';
        }
        else if  (buttonval == "3") {
          for (var z = 0; z < population.length-1; z++) {
            //console.log(population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1));
            //  console.log(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))
            if (population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1) == countryList[q].code) {
              infectedcountries.push({"id": countryList[q].code, "name" : compliedstats[i].location, "Total_Confirmed_cases":compliedstats[i].total_cases,"Deaths":compliedstats[i].total_deaths ,"Recovered":compliedstats[i].total_recovered,"value":(parseInt(compliedstats[i].total_cases)/(parseInt(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))))  });
              //console.log("here");
              //console.log(population[i]['"Country_Code"']);
              //  console.log(compliedstats[i].total_deaths/parseInt(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1)));
            }
          }
          content+=  '<option value= '+countryList[q].code+'>'+compliedstats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+compliedstats[i].location+'</div><div class="col-sm">'+compliedstats[i].total_cases+'</div><div class="col-sm">'+compliedstats[i].total_deaths+'</div><div class="col-sm">'+compliedstats[i].total_recovered+'</div></div><hr>';
        }
        else if  (buttonval == "4") {
          for (var z = 0; z < population.length-1; z++) {
            //console.log(population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1));
            //  console.log(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))
            if (population[z]['"Country_Code"'].substring(1, population[z]['"Country_Code"'].length - 1) == countryList[q].code) {
              infectedcountries.push({"id": countryList[q].code, "name" : compliedstats[i].location, "Total_Confirmed_cases":compliedstats[i].total_cases,"Deaths":compliedstats[i].total_deaths ,"Recovered":compliedstats[i].total_recovered,"value":(parseInt(compliedstats[i].total_recovered)/(parseInt(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1))))  });
              //console.log("here");
              //console.log(population[i]['"Country_Code"']);
              //  console.log(compliedstats[i].total_deaths/parseInt(population[z]['"2020"'].substring(1,population[z]['"2020"'].length-1)));
            }
          }
          content+=  '<option value= '+countryList[q].code+'>'+compliedstats[i].location+' </option>';
          stattablevar+='<div class="row"><div class="col-sm">'+compliedstats[i].location+'</div><div class="col-sm">'+compliedstats[i].total_cases+'</div><div class="col-sm">'+compliedstats[i].total_deaths+'</div><div class="col-sm">'+compliedstats[i].total_recovered+'</div></div><hr>';
        }
      }

      //console.log(buttonval);
    }
    /*  if (countryList[q].id == confirmeddata[i].Country_Region) {
    infectedcountries.push({"id": confirmeddata[q].Country_Region, "name" : confirmeddata[i].Country_Region, "Total_Confirmed_cases":parseInt(confirmeddata[i][Object.keys(confirmeddata[i])[Object.keys(confirmeddata[i]).length-1]])});
  }*/

}
var imageSeries = chart.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 4;
circle.fill = am4core.color("rgba(255, 0, 0, .4)");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 1;
circle.nonScaling = true;
circle.tooltipText = "{title} |{value}|";
imageSeries.heatRules.push({ target: circle, min: 5, max: 30, property: "radius" });

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";
for (var i = 0; i < confirmregion.length; i++) {
  imageSeries.data.push(
    {"latitude":parseInt(confirmregion[i].lat),
    "longitude":parseInt(confirmregion[i].long),
    "title":confirmregion[i].location,
    "value":parseInt(confirmregion[i].total_cases)
  });
}
//console.log(imageSeries.data);
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
maketimeseries();
}

const selectElement = document.querySelector('#mapdat');
selectElement.addEventListener('change', (event) => {
  buttonval = $("#mapdat").val();
  fetchdata();
});


const selectElement2 = document.querySelector('#countryselect');
selectElement2.addEventListener('change', (event) => {
  countryval = $("#countryselect").val();
  chart.zoomToMapObject(polygonSeries.getPolygonById(countryval));
  if (countryval == 0) {
    chart.goHome();
  }
  maketimeseries();
});

function maketimeseries(){
  am4core.useTheme(am4themes_animated);

  //console.log(timeseriesdatacase);
  //console.log(timeseriesdatadeath);
  //console.log(timeseriesdatarecov);
  // Create chart instance
  var timechart = am4core.create("timeseries", am4charts.XYChart);
  timechart.paddingRight = 20;
  // Add data
  //console.log(timeseriesdatacase);
  for (var i = 0; i < dayssincestart; i++){
    var tempday = {};
    tempday["date"] = i;//Object.keys(timeseriesdatacase[i])[1];
    //console.log(tempday)
    //tempday = '{date :'+Object.keys(timeseriesdatacase[i])[1]+','
    for (var q = 0; q < (timeseriesdatacase.length)/dayssincestart -1; q++) {
      tempday[timeseriesdatacase[i+q*dayssincestart].location] = timeseriesdatacase[i+q*dayssincestart][Object.keys(timeseriesdatacase[i])[1]];

      //console.log(tempday);
    }
    timechart.data.push(tempday);
    //timechart.data.push(timeseriesdatacase);
    //console.log(timeseriesdatacase[i])
  }


  // Create  axis
  var valueAxis = timechart.yAxes.push(new am4charts.ValueAxis());
  var valueAxis2 = timechart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Confirmed Cases";
  valueAxis.title.fontWeight = "bold";
  valueAxis2.title.text = "Days Since January 22";
  valueAxis2.title.fontWeight = "bold";
  //valueAxis.logarithmic = true;
  //console.log(timechart.data);

  /*var series = [];
  for (var q = 0; q < (timeseriesdatacase.length)/dayssincestart; q++) {
  series[q] = timechart.series.push(new am4charts.LineSeries());
  series[q].dataFields.valueY = timeseriesdatacase[q].location;
  series[q].dataFields.valueX = "date";
  series[q].strokeWidth = 3;
  series[q].tensionX = 0.8;
  series[q].bullets.push(new am4charts.CircleBullet());
  series[q].connect = false;
  series[q].name = timeseriesdatacase[q*dayssincestart].location;
}*/
// Create series

var series1 = timechart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "US";
series1.dataFields.valueX = "date";
series1.strokeWidth = 3;
series1.tensionX = 0.8;
series1.bullets.push(new am4charts.CircleBullet());
series1.connect = false;
series1.name = "US";
series1.tooltipText = "{valueX}: [b]{valueY}[/]";
series1.strokeWidth = 2;

var series2 = timechart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "China";
series2.dataFields.valueX = "date";
series2.strokeWidth = 3;
series2.tensionX = 0.8;
series2.bullets.push(new am4charts.CircleBullet());
series2.connect = false;
series2.name = "China";
series2.tooltipText = "{valueX}: [b]{valueY}[/]";
series2.strokeWidth = 2;

var series3 = timechart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Italy";
series3.dataFields.valueX = "date";
series3.strokeWidth = 3;
series3.tensionX = 0.8;
series3.bullets.push(new am4charts.CircleBullet());
series3.connect = false;
series3.name = "Italy";
series3.tooltipText = "{valueX}: [b]{valueY}[/]";
series3.strokeWidth = 2;
if (countryval != 0) {
  for (var i = 0; i < timeseriesdatacase.length/dayssincestart; i++) {
    for (var q = 0; q < countryList.length; q++) {
      if ((countryList[q].name == timeseriesdatacase[i*dayssincestart].location || countryList[q].code == timeseriesdatacase[i*dayssincestart].location)) {
        if (countryval == countryList[q].code) {
          var series4 = timechart.series.push(new am4charts.LineSeries());
          series4.dataFields.valueY = countryList[q].name;
          series4.dataFields.valueX = "date";
          series4.strokeWidth = 3;
          series4.tensionX = 0.8;
          series4.bullets.push(new am4charts.CircleBullet());
          series4.connect = false;
          series4.name = countryList[q].name;
          series4.tooltipText = "{valueX}: [b]{valueY}[/]";
          series4.strokeWidth = 2;
          //console.log(countryList[q].name,timeseriesdatacase[i].location,countryval);
        }
      }
    }
  }
}
series1.stroke = am4core.color("#E58332");
series1.fill = am4core.color("#E58332");
series2.stroke = am4core.color("#C4365F");
series2.fill = am4core.color("#C4365F");
series3.stroke = am4core.color("#D8C052");
series3.fill = am4core.color("#D8C052");
timechart.legend = new am4charts.Legend();
timechart.cursor = new am4charts.XYCursor();
maketimeseries1();
}


function maketimeseries1(){
  am4core.useTheme(am4themes_animated);

  //console.log(timeseriesdatacase);
  //console.log(timeseriesdatadeath);
  //console.log(timeseriesdatarecov);
  // Create chart instance
  var timechart = am4core.create("timeseries1", am4charts.XYChart);
  timechart.paddingRight = 20;

  // Add data
  for (var i = 0; i < dayssincestart; i++){
    var tempday = {};
    tempday["date"] = i;//Object.keys(timeseriesdatacase[i])[1];
    //console.log(tempday)
    //tempday = '{date :'+Object.keys(timeseriesdatacase[i])[1]+','
    for (var q = 0; q < (timeseriesdatadeath.length)/dayssincestart-1; q++) {
      tempday[timeseriesdatadeath[i+q*dayssincestart].location] = timeseriesdatadeath[i+q*dayssincestart][Object.keys(timeseriesdatadeath[i])[1]];
      //console.log(tempday);
    }
    timechart.data.push(tempday);
    //timechart.data.push(timeseriesdatacase);
    //console.log(timeseriesdatacase[i])
  }


  // Create  axis
  var valueAxis = timechart.yAxes.push(new am4charts.ValueAxis());
  var valueAxis2 = timechart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Deaths";
  valueAxis.title.fontWeight = "bold";
  valueAxis2.title.text = "Days Since January 22";
  valueAxis2.title.fontWeight = "bold";
  //valueAxis.logarithmic = true;
  //console.log(timechart.data);

  /*var series = [];
  for (var q = 0; q < (timeseriesdatacase.length)/dayssincestart; q++) {
  series[q] = timechart.series.push(new am4charts.LineSeries());
  series[q].dataFields.valueY = timeseriesdatacase[q].location;
  series[q].dataFields.valueX = "date";
  series[q].strokeWidth = 3;
  series[q].tensionX = 0.8;
  series[q].bullets.push(new am4charts.CircleBullet());
  series[q].connect = false;
  series[q].name = timeseriesdatacase[q*dayssincestart].location;
}*/
// Create series

var series1 = timechart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "US";
series1.dataFields.valueX = "date";
series1.strokeWidth = 3;
series1.tensionX = 0.8;
series1.bullets.push(new am4charts.CircleBullet());
series1.connect = false;
series1.name = "US";
series1.tooltipText = "{valueX}: [b]{valueY}[/]";
series1.strokeWidth = 2;

var series2 = timechart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "China";
series2.dataFields.valueX = "date";
series2.strokeWidth = 3;
series2.tensionX = 0.8;
series2.bullets.push(new am4charts.CircleBullet());
series2.connect = false;
series2.name = "China";
series2.tooltipText = "{valueX}: [b]{valueY}[/]";
series2.strokeWidth = 2;

var series3 = timechart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Italy";
series3.dataFields.valueX = "date";
series3.strokeWidth = 3;
series3.tensionX = 0.8;
series3.bullets.push(new am4charts.CircleBullet());
series3.connect = false;
series3.name = "Italy";
series3.tooltipText = "{valueX}: [b]{valueY}[/]";
series3.strokeWidth = 2;
if (countryval != 0) {
  for (var i = 0; i < timeseriesdatadeath.length/dayssincestart; i++) {
    for (var q = 0; q < countryList.length; q++) {
      if ((countryList[q].name == timeseriesdatadeath[i*dayssincestart].location || countryList[q].code == timeseriesdatadeath[i*dayssincestart].location)) {
        if (countryval == countryList[q].code) {
          var series4 = timechart.series.push(new am4charts.LineSeries());
          series4.dataFields.valueY = countryList[q].name;
          series4.dataFields.valueX = "date";
          series4.strokeWidth = 3;
          series4.tensionX = 0.8;
          series4.bullets.push(new am4charts.CircleBullet());
          series4.connect = false;
          series4.name = countryList[q].name;
          series4.tooltipText = "{valueX}: [b]{valueY}[/]";
          series4.strokeWidth = 2;
          //console.log(countryList[q].name,timeseriesdatacase[i].location,countryval);
        }
      }
    }
  }
}
series1.stroke = am4core.color("#E58332");
series1.fill = am4core.color("#E58332");
series2.stroke = am4core.color("#C4365F");
series2.fill = am4core.color("#C4365F");
series3.stroke = am4core.color("#D8C052");
series3.fill = am4core.color("#D8C052");

timechart.legend = new am4charts.Legend();
timechart.cursor = new am4charts.XYCursor();
maketimeseries2();
}
function maketimeseries2(){
  am4core.useTheme(am4themes_animated);

  //console.log(timeseriesdatacase);
  //console.log(timeseriesdatadeath);
  //console.log(timeseriesdatarecov);
  // Create chart instance
  var timechart = am4core.create("timeseries2", am4charts.XYChart);
  timechart.paddingRight = 20;

  // Add data
  for (var i = 0; i < dayssincestart; i++){
    var tempday = {};
    tempday["date"] = i;//Object.keys(timeseriesdatacase[i])[1];
    //console.log(tempday)
    //tempday = '{date :'+Object.keys(timeseriesdatacase[i])[1]+','
    for (var q = 0; q < (timeseriesdatarecov.length)/dayssincestart; q++) {
      tempday[timeseriesdatarecov[i+q*dayssincestart].location] = timeseriesdatarecov[i+q*dayssincestart][Object.keys(timeseriesdatarecov[i])[1]];
      //console.log(tempday);
    }
    timechart.data.push(tempday);
    //timechart.data.push(timeseriesdatacase);
    //console.log(timeseriesdatacase[i])
  }


  // Create  axis
  var valueAxis = timechart.yAxes.push(new am4charts.ValueAxis());
  var valueAxis2 = timechart.xAxes.push(new am4charts.ValueAxis());

  valueAxis.title.text = "Recovered";
  valueAxis.title.fontWeight = "bold";
  valueAxis2.title.text = "Days Since January 22";
  valueAxis2.title.fontWeight = "bold";
  //valueAxis.logarithmic = true;
  //console.log(timechart.data);

  /*var series = [];
  for (var q = 0; q < (timeseriesdatacase.length)/dayssincestart; q++) {
  series[q] = timechart.series.push(new am4charts.LineSeries());
  series[q].dataFields.valueY = timeseriesdatacase[q].location;
  series[q].dataFields.valueX = "date";
  series[q].strokeWidth = 3;
  series[q].tensionX = 0.8;
  series[q].bullets.push(new am4charts.CircleBullet());
  series[q].connect = false;
  series[q].name = timeseriesdatacase[q*dayssincestart].location;
}*/
// Create series

var series1 = timechart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "US";
series1.dataFields.valueX = "date";
series1.strokeWidth = 0;
series1.tensionX = 0.8;
series1.bullets.push(new am4charts.CircleBullet());
series1.connect = false;
series1.name = "US";
series1.tooltipText = "{valueX}: [b]{valueY}[/]";

var series2 = timechart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "China";
series2.dataFields.valueX = "date";
series2.tensionX = 0.8;
series2.bullets.push(new am4charts.CircleBullet());
series2.connect = false;
series2.name = "China";
series2.tooltipText = "{valueX}: [b]{valueY}[/]";


var series3 = timechart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Italy";
series3.dataFields.valueX = "date";
series3.tensionX = 0.8;
series3.bullets.push(new am4charts.CircleBullet());
series3.connect = false;
series3.name = "Italy";
series3.tooltipText = "{valueX}: [b]{valueY}[/]";
if (countryval != 0) {
  for (var i = 0; i < timeseriesdatarecov.length/dayssincestart; i++) {
    for (var q = 0; q < countryList.length; q++) {
      if ((countryList[q].name == timeseriesdatarecov[i*dayssincestart].location || countryList[q].code == timeseriesdatarecov[i*dayssincestart].location)) {
        if (countryval == countryList[q].code) {
          var series4 = timechart.series.push(new am4charts.LineSeries());
          series4.dataFields.valueY = countryList[q].name;
          series4.dataFields.valueX = "date";
          series4.strokeWidth = 3;
          series4.tensionX = 0.8;
          series4.bullets.push(new am4charts.CircleBullet());
          series4.connect = false;
          series4.name = countryList[q].name;
          series4.tooltipText = "{valueX}: [b]{valueY}[/]";
          series4.strokeWidth = 2;
          //console.log(countryList[q].name,timeseriesdatacase[i].location,countryval);
        }
      }
    }
  }
}
series1.stroke = am4core.color("#E58332");
series1.fill = am4core.color("#E58332");
series2.stroke = am4core.color("#C4365F");
series2.fill = am4core.color("#C4365F");
series3.stroke = am4core.color("#D8C052");
series3.fill = am4core.color("#D8C052");
timechart.legend = new am4charts.Legend();
timechart.cursor = new am4charts.XYCursor();
maketimeseries3();
}

function maketimeseries3(){
  am4core.useTheme(am4themes_animated);

  //console.log(timeseriesdatacase);
  //console.log(timeseriesdatadeath);
  //console.log(timeseriesdatarecov);
  // Create chart instance
  var timechart = am4core.create("timeseries3", am4charts.XYChart);
  timechart.paddingRight = 20;

  // Add data
  for (var i = 0; i < dayssincestart; i++){
    var tempday = {};
    tempday["date"] = i;//Object.keys(timeseriesdatacase[i])[1];
    //console.log(tempday)
    //tempday = '{date :'+Object.keys(timeseriesdatacase[i])[1]+','
    for (var q = 0; q < (timeseriesdatarecov.length)/dayssincestart; q++) {
      tempday[timeseriesdatarecov[i+q*dayssincestart].location] = timeseriesdatacase[i+q*dayssincestart][Object.keys(timeseriesdatacase[i])[1]]-timeseriesdatarecov[i+q*dayssincestart][Object.keys(timeseriesdatarecov[i])[1]]-timeseriesdatadeath[i+q*dayssincestart][Object.keys(timeseriesdatadeath[i])[1]];
      //console.log(tempday);
    }
    timechart.data.push(tempday);
    //timechart.data.push(timeseriesdatacase);
    //console.log(timeseriesdatacase[i])
  }


  // Create  axis
  var valueAxis = timechart.yAxes.push(new am4charts.ValueAxis());
  var valueAxis2 = timechart.xAxes.push(new am4charts.ValueAxis());

  valueAxis.title.text = "Active Cases";
  valueAxis.title.fontWeight = "bold";
  valueAxis2.title.text = "Days Since January 22";
  valueAxis2.title.fontWeight = "bold";
  //valueAxis.logarithmic = true;
  //console.log(timechart.data);

  /*var series = [];
  for (var q = 0; q < (timeseriesdatacase.length)/dayssincestart; q++) {
  series[q] = timechart.series.push(new am4charts.LineSeries());
  series[q].dataFields.valueY = timeseriesdatacase[q].location;
  series[q].dataFields.valueX = "date";
  series[q].strokeWidth = 3;
  series[q].tensionX = 0.8;
  series[q].bullets.push(new am4charts.CircleBullet());
  series[q].connect = false;
  series[q].name = timeseriesdatacase[q*dayssincestart].location;
}*/
// Create series

var series1 = timechart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "US";
series1.dataFields.valueX = "date";
series1.strokeWidth = 0;
series1.tensionX = 0.8;
series1.bullets.push(new am4charts.CircleBullet());
series1.connect = false;
series1.name = "US";
series1.tooltipText = "{valueX}: [b]{valueY}[/]";

var series2 = timechart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "China";
series2.dataFields.valueX = "date";
series2.tensionX = 0.8;
series2.bullets.push(new am4charts.CircleBullet());
series2.connect = false;
series2.name = "China";
series2.tooltipText = "{valueX}: [b]{valueY}[/]";


var series3 = timechart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Italy";
series3.dataFields.valueX = "date";
series3.tensionX = 0.8;
series3.bullets.push(new am4charts.CircleBullet());
series3.connect = false;
series3.name = "Italy";
series3.tooltipText = "{valueX}: [b]{valueY}[/]";
if (countryval != 0) {
  for (var i = 0; i < timeseriesdatarecov.length/dayssincestart; i++) {
    for (var q = 0; q < countryList.length; q++) {
      if ((countryList[q].name == timeseriesdatarecov[i*dayssincestart].location || countryList[q].code == timeseriesdatarecov[i*dayssincestart].location)) {
        if (countryval == countryList[q].code) {
          var series4 = timechart.series.push(new am4charts.LineSeries());
          series4.dataFields.valueY = countryList[q].name;
          series4.dataFields.valueX = "date";
          series4.strokeWidth = 3;
          series4.tensionX = 0.8;
          series4.bullets.push(new am4charts.CircleBullet());
          series4.connect = false;
          series4.name = countryList[q].name;
          series4.tooltipText = "{valueX}: [b]{valueY}[/]";
          series4.strokeWidth = 2;
          //console.log(countryList[q].name,timeseriesdatacase[i].location,countryval);
        }
      }
    }
  }
}
series1.stroke = am4core.color("#E58332");
series1.fill = am4core.color("#E58332");
series2.stroke = am4core.color("#C4365F");
series2.fill = am4core.color("#C4365F");
series3.stroke = am4core.color("#D8C052");
series3.fill = am4core.color("#D8C052");
timechart.legend = new am4charts.Legend();
timechart.cursor = new am4charts.XYCursor();

$('#modalbin').html(modalcontent);
}
