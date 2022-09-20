"use strict"

let c=[];
let d=[];
let a=[];

window.onload=function(){
	$.getJSON("assets/data/nationalparks.json",function(e){a=e.parks;
	$.getJSON("assets/data/locations.json",function(e){c=e});
	$.getJSON("assets/data/parktypes.json",function(e){d=e})});

    const fo=document.getElementById("filterOp");
	fo.onchange=searchBy;
	const sf=document.getElementById("selectedFilter");
	sf.onchange=opSelected;
	const ab=document.getElementById("allBtn");
	ab.onclick=viewAll;
	const cb=document.getElementById("cleanBtn");
	cb.onclick=cleanData;
	};




    /**select 1 */
    function searchBy(){
	const fo=document.getElementById("filterOp");
	let selectedOp=fo.value;
    tContainer();
	const ab=document.getElementById("allBtn");
	ab.classList.remove("d-none");
	const cb=document.getElementById("cleanBtn");
	cb.classList.add("d-none");
	if(selectedOp==="1"){
        selectOptions(c);
    }else if(selectedOp==="2"){
        selectOptions(d);
    }else{
        const sf=document.getElementById("selectedFilter");
        sf.classList.add("d-none");

    }
}
	
  /**select 2 */
 function opSelected(){
    const fo=document.getElementById("filterOp");
    let t=fo.value;
    const sf=document.getElementById("selectedFilter");
    let l=sf.value;
    
    if(l==="Select one:"){
        tContainer();
        const o=document.getElementById("allBtn");
        o.classList.remove("d-none");
        const c=document.getElementById("cleanBtn");
        c.classList.add("d-none");

        }else{
            let e;
           if(t==="1"){
             e=a.filter(e=>e.State===l)
            }else{
                e=a.filter(e=>e.LocationName.toLowerCase().includes(l.toLowerCase()))
            }
            tContainer();
            if(e.length==0){
                const i=document.getElementById("tableContainer");
                i.innerHTML="NO MATCHES FOUND";
                return
               }
               tableType();
               tableHeader();
               dataTable(e);
                }
            }
            
            function viewAll(){
                tContainer();
                tableType();
                tableHeader();

                dataTable(a);
                const fo=document.getElementById("filterOp");
                fo.value="";
                const sf=document.getElementById("selectedFilter");
                sf.classList.add("d-none");
                const cb=document.getElementById("cleanBtn");
                cb.classList.remove("d-none");
                const ab=document.getElementById("allBtn");
                ab.classList.add("d-none");
            }

            
            
            function tableType(){
                let e=document.createElement("table");
                e.id="parkDataTable";
                e.className="table table-striped";
                const t=document.getElementById("tableContainer");
                t.appendChild(e)
            }
            
            function tableHeader(){
                let e=document.getElementById("parkDataTable");
                let t=document.createElement("tr");
                let n=document.createElement("th");
                n.innerHTML="Location Name";
                let l=document.createElement("th");
                l.innerHTML="Address";
                let o=document.createElement("th");
                o.innerHTML="City";
                let c=document.createElement("th");
                c.innerHTML="State";
                let d=document.createElement("th");
                d.innerHTML="Location ID";
                t.appendChild(n);
                t.appendChild(l);
                t.appendChild(o);
                t.appendChild(c);
                t.appendChild(d);
                e.appendChild(t)
            }
            
            
            function selectOptions(n){
                const l=document.getElementById("selectedFilter");
                l.classList.remove("d-none");
                l.innerHTML="";
                let e=new Option("Select one:");
                l.appendChild(e);
                let o=n.length;
                for(let t=0;t<o;t++){
                    let e=new Option(n[t]);
                    l.appendChild(e)
                }
            }
            
            function dataTable(i){
                let a=document.getElementById("parkDataTable");
                let e=i.length;
                for(let d=0;d<e;d++){
                    let e=a.insertRow(-1);
                    let t=e.insertCell(0);
                    t.innerHTML=i[d].LocationName;
                    let n=e.insertCell(1);
                    n.innerHTML=i[d].Address;
                    let l=e.insertCell(2);
                    l.innerHTML=i[d].City;
                    let o=e.insertCell(3);
                    o.innerHTML=i[d].State;
                    let c=e.insertCell(4);
                    c.innerHTML=i[d].LocationID
                }
                const t=document.getElementById("allBtn");
                t.classList.add("d-none");
                const n=document.getElementById("cleanBtn");
                n.classList.remove("d-none")
            }
            
  
            
            function tContainer(){
                let tc=document.getElementById("tableContainer");
                tc.innerHTML=""
            }

            function cleanData(){
                let tc=document.getElementById("tableContainer");
                tc.innerHTML=""
                const fo=document.getElementById("filterOp");
                fo.value="";
                const cb=document.getElementById("cleanBtn");
                cb.classList.add("d-none");
                const ab=document.getElementById("allBtn");
                ab.classList.remove("d-none");
                const sf=document.getElementById("selectedFilter");
                sf.classList.add("d-none")
            }
            
            

/*let locationsArray = []
let nationalParksArray = []
let parkTypesArray = []

}*/