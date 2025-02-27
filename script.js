const displayDates = document.getElementById('displayDates');
const selectDateFormat = document.getElementById('selectDateFormat');

const date = new Date();


function addingDates() {
    const day = document.getElementById('date');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const hour = document.getElementById('hour');
    const min = document.getElementById('min');

    day.innerHTML = date.getDate();
    month.innerHTML = date.getMonth() + 1; // JavaScript months are 0-indexed, add 1 to get the correct month number
    year.innerHTML = date.getFullYear();
    hour.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
}


function formatter() {
    let format = selectDateFormat.value;
    console.log(format);

    switch (format) {
        case 'D-M-Y':
            console.log('running D-M-Y');
            displayDates.innerHTML = '<span id="date"></span><span id="month"></span><span id="year"></span>';
            break;
        case 'Y-M-D':
            console.log('running Y-M-D');
            displayDates.innerHTML = '<span id="year"></span><span id="month"></span><span id="date"></span>';
            break;
        case 'M-D-Y-H-M':
            console.log('running M-D-Y-H-M');
            displayDates.innerHTML = '<span id="month"></span><span id="date"></span><span id="year"></span><span id="hour"></span><span id="min"></span>';
            break;
        default:
            console.log('running default');
            displayDates.innerHTML = '<span id="month"></span><span id="date"></span><span id="year"></span><span id="hour"></span><span id="min"></span>';
    }
    addingDates();
}



// handling the change

selectDateFormat.addEventListener('change', formatter);
