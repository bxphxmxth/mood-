let regular = Array.from(document.getElementsByClassName("meh"))[0];
console.log(regular);

let surprise = Array.from(document.getElementsByClassName("surprise"))[0];
console.log(surprise)

let tear = Array.from(document.getElementsByClassName("tear"))[0];
console.log(tear)

let cry = Array.from(document.getElementsByClassName("cry"))[0];
console.log(cry)




let section1 = document.querySelector("section");
console.log(section1)

let section2 = Array.from(document.getElementsByClassName("section2"))[0];




function happy() { 
    
    if(regular) {

        prompt("Why so meh ??");
        if(section1.display ="block"){
            section1.style.display = "none";
            section2.style.display = "block"; 
            
            }
       
        
     }

    
 };

 
function surprised() {
    if(surprise){
        prompt("Why u surprised?");
        if(section1.display ="block"){
            section1.style.display = "none";
            section2.style.display = "block"; 
            } 
    }
};


function crying() {
    if(cry){
        prompt("Why u crying, little boo???");
        if(section1.display ="block"){
            section1.style.display = "none";
            section2.style.display = "block"; 
            } 
    }
}


function tears() {
    if(tear){
        prompt("Why u crying, little boo???");
        if(section1.display ="block"){
            section1.style.display = "none";
            section2.style.display = "block"; 
            } 
    }
}

regular.onclick = happy
surprise.onclick = surprised
cry.onclick = crying
tear.onclick = tears
















