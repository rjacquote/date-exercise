let date1 = new Date('06-16-1995');
let date2 = new Date('July 27 1960');
let date3 = new Date('1960, 12, 30');
function dateToLocaleString(){
    let text = date1.toLocaleString();
    let doc1 = document.getElementById('one');
    doc1.innerText = text;
    let text2 = date2.toLocaleString();
    let doc2 = document.getElementById('two');
    doc2.innerText = text2;
    let text3 = date3.toLocaleString();
    let doc3 = document.getElementById('three');
    doc3.innerText = text3;
}

dateToLocaleString();