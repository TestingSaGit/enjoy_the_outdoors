"use strict"

const filter = document.getElementById('filterOp');
const selectedF = document.getElementById('selectedFilter');
const viewAllB = document.getElementById('allBtn');
const cleanB = document.getElementById('cleanBtn');
const tableCont = document.getElementById('tableContainer');

/*****select 1 ********/
function searchBy() {

  let selectedOp = filter.value;
  tContainer();
  viewAllB.classList.remove('d-none');

  cleanB.classList.add('d-none');
  if (selectedOp === '1') {
    selectOptions(locationsArray, selectedOp);
  } else if (selectedOp === '2') {
    selectOptions(parkTypesArray);
  } else {

    selectedF.classList.add('d-none');
  }
}

/**select 2 */
function opSelected() {
  let filterV = filter.value;

  let selectedV = selectedF.value;

  if (selectedV === 'Select one') {
    tContainer();
    viewAllB.classList.remove('d-none');
    cleanB.classList.add('d-none');
  } else {
    let ntlparks;
    if (filterV === '1') {
      ntlparks = nationalParksArray.filter((ntlparks) => ntlparks.State === selectedV);
    } else {
      ntlparks = nationalParksArray.filter((ntlparks) =>
        ntlparks.LocationName.toLowerCase().includes(selectedV.toLowerCase())
      );
    }
    tContainer();
    if (ntlparks.length == 0) {
      tableCont.innerHTML = 'NOT FOUND';
      return;
    }
    tableType();
    tableHeader();
    dataTable(ntlparks);
  }
}

function viewAll() {
  tContainer();
  tableType();
  tableHeader();
  dataTable(nationalParksArray);
  filter.value = '';
  selectedF.classList.add('d-none');
  cleanB.classList.remove('d-none');
  viewAllB.classList.add('d-none');
}

function tableType() {
  let table = document.createElement('table');
  table.id = 'dataTable';
  table.className = 'table table-striped';
  tableCont.appendChild(table);
}

function tableHeader() {

  let dataT = document.getElementById('dataTable');
  let tRow = document.createElement('tr');
  let headerArray = ["Location Name", "Address", "City", "State", "Location ID", "Phone"];

  for (var i = 0; i < headerArray.length; i++) {

    let tHeader = document.createElement('th');

    tHeader.innerHTML = headerArray[i];

    tRow.appendChild(tHeader);

  }


  dataT.appendChild(tRow)

}

function dataTable(infoArray) {

  let dataT = document.getElementById('dataTable');
  let addRow = dataT.insertRow(-1);
  let rowP = -1;

  for (let i = 0; i < infoArray.length; i++) {

    let addRow = dataT.insertRow(rowP);

    addRow.insertCell(0).innerHTML = infoArray[i].LocationName;
    addRow.insertCell(1).innerHTML = infoArray[i].Address;
    addRow.insertCell(2).innerHTML = infoArray[i].City;
    addRow.insertCell(3).innerHTML = infoArray[i].State;
    addRow.insertCell(4).innerHTML = infoArray[i].LocationID;
    let phone = (infoArray[i].Phone === 0) ? 'N/A' : infoArray[i].Phone;
    addRow.insertCell(5).innerHTML = phone;

  }
  viewAllB.classList.add('d-none');
  cleanB.classList.remove('d-none');
}

function selectOptions(optionType, option) {
  selectedF.classList.remove('d-none');
  selectedF.innerHTML = '';
  let label = 'Select';
  let labelOp = (option === '1') ? label + ' ' + 'location' : label + ' ' + 'type';

  let nOption = new Option(labelOp);
  selectedF.appendChild(nOption);
  for (let i = 0; i < optionType.length; i++) {

    let nOption = new Option(optionType[i]);
    selectedF.appendChild(nOption);
  }
}



function tContainer() {
  tableCont.innerHTML = '';
}

function cleanData() {
  tableCont.innerHTML = '';
  filter.value = '';
  cleanB.classList.add('d-none');
  viewAllB.classList.remove('d-none');
  selectedF.classList.add('d-none');
}

