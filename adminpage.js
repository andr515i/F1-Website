// we get the place number of the first contendant, tho arguably not needed
let placeOneBefore = document.getElementsByClassName("place-1");
// we call this function on the button press, to change data to the new data inserted into the table on adminpanel webpage
function submit() { 
    let placeOneAfter = document.getElementsByClassName("place-1-adm").innerHTML; // new place number data from new table 
    //placeOneBefore.innerHTML = "2" //test to see if we can change data. we will never be able to see if we can as the data gets reset to default upon refreshing of the website
    // to do this we would need a form of database to hold the data, so we can save it and use it again and again 
    console.log(placeOneBefore);
}

console.log(placeOneBefore);
var works = "works!";
// to show that we do change the html
function change() {
    document.getElementById("demo").innerHTML = works;
}