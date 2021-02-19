'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



const container = document.getElementById('cookies-shop');
const articleEl = document.createElement('article');
container.appendChild(articleEl);

const tableEl = document.createElement('table');
articleEl.appendChild(tableEl);

const allstores = [];

function Branch(location, min, max, avg, ) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesPerHour = [];
    this.totalDailyCookies = 0;
    allstores.push(this);



}

Branch.prototype.calc = function() {
    for (let i = 0; i < hours.length; i++) {
        const calcCookies = Math.floor(getRandomNumber(this.min, this.max) * this.avg);
        this.totalDailyCookies += calcCookies;
        this.cookiesPerHour.push(calcCookies);
    }
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
    }

    const td1E3 = document.createElement('td');
    rowEl.appendChild(td1E3);
    td1E3.textContent = this.totalDailyCookies;
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
    const th3El = document.createElement('th');
    headerEl.appendChild(th3El);
    th3El.textContent = 'dailytot';


}

function renderFooter() {
    const footerEl = document.createElement('tr');
    tableEl.appendChild(footerEl);

    const thFooter1 = document.createElement('th');
    footerEl.appendChild(thFooter1);
    thFooter1.textContent = 'Totals';

    let totalsOFtotal = 0;
    for (let i = 0; i < hours.length; i++) {
        for (let j = 0; j < allstores.length; j++) {
            const thfooter2 = document.createElement('th');
            footerEl.appendChild(thfooter2);
            thfooter2.textContent = allstores[i];
        }
        const thfooter3 = document.createElement('th');
        footerEl.appendChild(thfooter3);
        thfooter3.textContent = totalsOFtotal;

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

(function renderTable() {
    renderHeader();
    for (let i = 0; i < allstores.length; i++) {
        allstores[i].calc();
        allstores.render();
    }
    renderFooter();
})