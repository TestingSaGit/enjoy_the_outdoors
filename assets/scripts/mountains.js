"use strict"

const selectOp = document.getElementById("mountainsSelect");
const outputDiv = document.getElementById("mountainOutputDiv");
let pathToImages = 'assets/images/mountains/'

function mountainNames(a) {
    let option = new Option("Select an option", "");
    selectOp.appendChild(option);
    for (let i = 0; i < a.length; i++) {
        let newOp = new Option(a[i].name);
        selectOp.appendChild(newOp)
    }
}





function changeOption() {

    outputDiv.innerHTML = ""
    let selectedV = selectOp.value;
    if (!selectedV) { return }
    let opName = mountainsArray.find(selectOp => selectOp.name === selectedV);
    buildCard(opName)
}


function buildCard(mountain) {

    var card = '<div class="card  text-center id="cardMountain">'
    card += '<div class="card-body" id="cardMountain">'

    Object.keys(mountain).forEach(function (key) {

        card += `<p> ${formatItem(mountain, key)}</p>`

    });

    outputDiv.innerHTML = card


}



function formatItem(obj, key) {
    var result = ""
    switch (key) {
        case "name":
            result = `<b>${obj[key]} </b>`
            break;
        case "coords":
            result = `Latitude ${obj[key].lat}, Longitude ${obj[key].lng}` + `<br>` + `<br>` +
                `<a href="https://www.google.com/maps/search/?api=1&query=${obj[key].lat},${obj[key].lng}&zoom=20" target="_blank" class="btn btn-warning">Map</a>`
            break;
        case "elevation":
            result = `Elevation: ${obj[key]} Ft.`
            break;
        case "img":
            result = `<img src="${pathToImages}${obj[key]}"/>`
            break;
        default:
            result = obj[key]
    }
    return result
}