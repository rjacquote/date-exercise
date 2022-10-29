let dateBtn = document.getElementById('dateBtn');
dateBtn.addEventListener('click', getDate);

function getDate(){
    let inputDate = document.getElementById('date').value;
    inputDate = String(inputDate);
    let outputDate = document.getElementById('dateOutput');
    outputDate.innerText = `The date inputted is: ${inputDate}`;
}


