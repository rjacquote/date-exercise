
function showDate(){
    let d = new Date("9-29-2022");
    let dateString = document.getElementById('date');
    dateString.innerText = d.toString();
    let dateString2 = document.getElementById('date2')
    dateString2.innerText = d.toDateString();
    let dateString3 = document.getElementById('date3');
    dateString3.innerText = d.toUTCString();
    let dateString4 = document.getElementById('date4');
    dateString4.innerText = d.toLocaleString();
    console.log(d.toString());
    console.log(d.toDateString());
    console.log(d.toUTCString());
    console.log(d.toLocaleString());
}
window.onload = showDate();