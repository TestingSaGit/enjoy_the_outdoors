
'use strict';

let locationsArray = [];
let nationalParksArray = [];
let parkTypesArray = [];




window.onload = function () {

  loadJsonData('assets/data/nationalparks.json').then((nationalParks) => {
    nationalParksArray = nationalParks.parks;
  });

  loadJsonData('assets/data/locations.json').then((locations) => {
    locationsArray = locations;
  });

  loadJsonData('assets/data/parktypes.json').then((parkTypes) => {
    parkTypesArray = parkTypes;
  });


  filter.onchange = searchBy;

  selectedF.onchange = opSelected;

  viewAllB.onclick = viewAll;

  cleanB.onclick = cleanData;
};


let loadJsonData = async (path) => {
  let response = await fetch(path);
  let data = await response.json();
  return data;
};




