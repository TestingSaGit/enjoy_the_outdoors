"use strict"

let mountainsArray =[];



window.onload=function(){
	

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;

        mountainNames(mountainsArray);
    })
    
   
    selectOp.onchange=changeOption;


}





//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}

