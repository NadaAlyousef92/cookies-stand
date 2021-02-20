'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];



const container = document.getElementById('cookies-shop');
const articleEl = document.createElement('article');
container.appendChild(articleEl);

const tableEl = document.createElement('table');
articleEl.appendChild(tableEl);

const allstores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Branch(location, min, max, avg, ) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesPerHour = [];
    this.totalDailyCookies = 0;
    this.tot = 0;




}

Branch.prototype.calc = function() {
    for (let i = 0; i < (hours.length - 1); i++) {
        const calcCookies = Math.floor(getRandomNumber(this.min, this.max) * this.avg);
        this.totalDailyCookies += calcCookies;
        this.cookiesPerHour.push(calcCookies);
        this.tot += this.cookiesPerHour[i];
    }
    this.cookiesPerHour[14] = this.tot;
};

Branch.prototype.render = function() {
    const rowEl = document.createElement('tr');
    tableEl.appendChild(rowEl);

    const td1El = document.createElement('td');
    rowEl.appendChild(td1El);
    td1El.textContent = this.location;

    for (let i = 0; i < hours.length; i++) {
        let td2El = document.createElement('td');
        rowEl.appendChild(td2El);
        td2El.textContent = this.cookiesPerHour[i];
        allstores[i] += this.cookiesPerHour[i];

    }
};

function renderHeader() {
    const headerEl = document.createElement('tr');
    tableEl.appendChild(headerEl);

    const th1El = document.createElement('th');
    headerEl.appendChild(th1El);
    th1El.textContent = 'Branch';


    for (let i = 0; i < hours.length; i++) {
        let th2El = document.createElement('th');
        headerEl.appendChild(th2El);
        th2El.textContent = hours[i];

    }

}

function renderFooter() {
    const footerEl = document.createElement('tr');
    tableEl.appendChild(footerEl);

    const thFooter1 = document.createElement('th');
    footerEl.appendChild(thFooter1);
    thFooter1.textContent = 'Totals';


    for (let i = 0; i < hours.length; i++) {

        const thfooter2 = document.createElement('th');
        footerEl.appendChild(thfooter2);
        thfooter2.textContent = allstores[i];
    }

}





function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const Seattle = new Branch('Seattle', 23, 65, 6.3);
console.log(allstores);

const Tokyo = new Branch('Tokyo', 3, 24, 1.2);

const Dubai = new Branch('Dubai', 11, 38, 3.7);

const Paris = new Branch('Paris', 20, 38, 3.7);

const Lima = new Branch('Lima', 2, 16, 4.6);
renderHeader();
Seattle.calc();
Seattle.render();
Tokyo.calc();
Tokyo.render();
Dubai.calc();
Dubai.render();
Paris.calc();
Paris.render();
Lima.calc();
Lima.render();
renderFooter();





//New branch//


function footer4() {
    const footer4El = document.createElement('tr');
    tableEl.appendChild(footer4);
    const footer5El = document.createElement(footer5El);
    footer5El.appendChild(footer5El);
    footer5El.textContent = 'Total';
    for (let i = 0; i < allstores.length; i++) {
        const footer5El = document.createElement('th');
        footer4El.appendChild(footer5El);
        footer5El.textContent = allstores[i];
    }

}

const branch = document.getElementById('cookies');
branch.addEventListener('submit', function(event) {
    event.preventDefault();
    const location = event.target.locationName.value;
    constmin = parseInt(event.target.min.value);
    constmax = parseInt(event.target.max.value);
    constavg = parseInt(event.target.avg.value);
    const store = new cookies(locationName, min, max, avg);


    tableEl.delete4(-1);
    store.render();
    footer4();
    branch.reset();
});