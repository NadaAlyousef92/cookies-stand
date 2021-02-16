"use strict";

function Branch(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.totalDailyCookies = [];
    this.noOfcustomer = 0;
    this.cookiesPerHour = 0;
    this.total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const division = document.getElementById('location');

const articleEl = document.createElement('article');
division.appendChild(articleEl);

const tableEl = document.createElement('table');
articleEl.appendChild(tableEl);

Branch.prototype.calc = function() {
    for (let i = 0; i < this.hours.length; i++) {
        this.cookiesPerHour[i] = Math.floor(getRandomNumber(this.min, this.max) * this.avg);
        this.noOfcustomer += this.cookiesPerHour[i];
        this.totalDailyCookies = this.total;
    }
};

Branch.prototype.render = function() {
    const rowEl = document.createElement('tr');
    tableEl.appendChild(rowEl);

    const td1El = document.createElement('td');
    rowEl.appendChild(td1El);
    td1El.textContent = this.location;

    for (let i = 0; i < this.hours.length; i++) {
        let td2El = document.createElement('td');
        rowEl.appendChild(td2El);
        td2El.textContent = this.cookiesPerHour[i];
    }

    const td1E3 = document.createElement('td');
    rowEl.appendChild(td1E3);
    td1E3.textContent = this.totalDailyCookies;
};

Branch.prototype.theHeader = function() {
    let headerEl = document.createElement('tr');
    tableEl.appendChild(headerEl);

    let th1El = document.createElement('th');
    headerEl.appendChild(th1El);
    th1El.textContent = 'Branch';

    for (let i = 0; i < this.hours.length; i++) {
        let th2El = document.createElement('th');
        headerEl.appendChild(th2El);
        th2El.textContent = this.hours[i];
        this.noofcustomer[i] += this.cookiesPerHour[i];
    }

    let th3El = document.createElement('th');
    headerEl.appendChild(th3El);
    th3El.textContent = 'Daily Location Total';
};

Branch.prototype.theFooter = function() {
    let footerEl = document.createElement('tr');
    tableEl.appendChild(footerEl);

    let thFooter1 = document.createElement('th');
    footerEl.appendChild(thFooter1);
    thFooter1.textContent = 'Totals';

    for (let i = 0; i < this.hours.length; i++) {
        let thFoot2 = document.createElement('th');
        footerEl.appendChild(thFoot2);
        thFooter2.textContent = this.noOfcustomer[i];
    }

    let thFooter3 = document.createElement('th');
    footerEl.appendChild(thFooter3);
    thFoot3.textContent = 'Total Of Total';
};


const Seattle = new Branch('Seattle', 23, 65, 6.3);

const Tokyo = new Branch('Tokyo', 3, 24, 1.2);

const Dubai = new Branch('Dubai', 11, 38, 3.7);

const Paris = new Branch('Paris', 20, 38, 3.7);

const Lima = new Branch('Lima', 2, 16, 4.6);

Seattle.theHeader();

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

Seattle.theFooter();


/*const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    const seattle = {
        location: 'seattle',
        min: 23,
        max: 65,
        avg: 6.3,
        cookiesPerhour: [],
        totalDailyCookies: 0,

        calc: function() {

            for (let i = 0; i < hours.length; i++) {
                let noOfCookie = Math.floor(getRandomNumber(this.min, this.max) * this.avg);

                this.totalDailyCookies += noOfCookie;
                this.cookiesPerhour.push(noOfCookie);


            }
        },


        render: function() {
            this.calc();
            const container = document.getElementById('cookies-shop');


            let articleEl = document.createElement('article');
            container.appendChild(articleEl);
            const h2El = document.createElement('h2');
            articleEl.appendChild(h2El);
            h2El.textcontent = this.location;
            const ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl);
            console.log(this.cookiesPerhour);
            for (let i = 0; i < this.cookiesPerhour.length; i++) {
                console.log(this.cookiesPerhour[i]);


                const liEl = document.createElement('li');
                console.log(liEl);
                liEl.textContent = this.cookiesPerhour[i]
                ulEl.appendChild(liEl);
                liEl.textcontent = `Total:${this.totalDailyCookies} seattlecookies`;
            }
        }
    }



    const tokyo = {
        location: 'tokyo',
        min: 3,
        max: 24,
        avg: 1.2,
        cookiesPerhour: [],
        totalDailyCookies: 0,

        calc: function() {

            for (let i = 0; i < hours.length; i++) {
                let noOfCookie = Math.floor(getRandomNumber(this.min, this.max) * this.avg);

                this.totalDailyCookies += noOfCookie;
                this.cookiesPerhour.push(noOfCookie);


            }
        },


        render: function() {

            const container = document.getElementById('cookies-shop');


            let articleEl = document.createElement('article');
            container.appendChild(articleEl);
            const h2El = document.createElement('h2');
            articleEl.appendChild(h2El);
            h2El.textcontent = this.location;
            const ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl);
            console.log(this.cookiesPerhour);
            for (let i = 0; i < this.cookiesPerhour.length; i++) {
                console.log(this.cookiesPerhour[i]);


                const liEl = document.createElement('li');
                console.log(liEl);
                liEl.textContent = this.cookiesPerhour[i]
                ulEl.appendChild(liEl);
                liEl.textcontent = `Total ${this.totalDailyCookies} seattlecookies`;

            }
        }
    }
    const dubai = {
        location: 'dubai',
        min: 11,
        max: 38,
        avg: 3.7,
        cookiesPerhour: [],
        totalDailyCookies: 0,

        calc: function() {

            for (let i = 0; i < hours.length; i++) {
                let noOfCookie = Math.floor(getRandomNumber(this.min, this.max) * this.avg);

                this.totalDailyCookies += noOfCookie;
                this.cookiesPerhour.push(noOfCookie);


            }
        },

        render: function() {
            this.calc();
            const container = document.getElementById('cookies-shop');


            let articleEl = document.createElement('article');
            container.appendChild(articleEl);
            const h2El = document.createElement('h2');
            articleEl.appendChild(h2El);
            h2El.textcontent = this.location;
            const ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl);
            console.log(this.cookiesPerhour);
            for (let i = 0; i < this.cookiesPerhour.length; i++) {
                console.log(this.cookiesPerhour[i]);


                const liEl = document.createElement('li');
                console.log(liEl);
                liEl.textContent = this.cookiesPerhour[i]
                ulEl.appendChild(liEl);
                liEl.textcontent = `Total ${this.totalDailyCookies} seattlecookies`;

            }
        }
    }


    const paris = {
        location: 'paris',
        min: 20,
        max: 38,
        avg: 2.3,
        cookiesPerhour: [],
        totalDailyCookies: 0,

        calc: function() {

            for (let i = 0; i < hours.length; i++) {
                let noOfCookie = Math.floor(getRandomNumber(this.min, this.max) * this.avg);

                this.totalDailyCookies += noOfCookie;
                this.cookiesPerhour.push(noOfCookie);


            }
        },

        render: function() {
            this.calc();
            const container = document.getElementById('cookies-shop');


            let articleEl = document.createElement('article');
            container.appendChild(articleEl);
            const h2El = document.createElement('h2');
            articleEl.appendChild(h2El);
            h2El.textcontent = this.location;
            const ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl);
            console.log(this.cookiesPerhour);
            for (let i = 0; i < this.cookiesPerhour.length; i++) {
                console.log(this.cookiesPerhour[i]);


                const liEl = document.createElement('li');
                console.log(liEl);
                liEl.textContent = this.cookiesPerhour[i]
                ulEl.appendChild(liEl);
                liEl.textcontent = `Total ${this.totalDailyCookies} seattlecookies`;

            }
        }
    }

    const lima = {
        location: 'lima',
        min: 2,
        max: 16,
        avg: 4.6,
        cookiesPerhour: [],
        totalDailyCookies: 0,

        calc: function() {

            for (let i = 0; i < hours.length; i++) {
                let noOfCookie = Math.floor(getRandomNumber(this.min, this.max) * this.avg);

                this.totalDailyCookies += noOfCookie;
                this.cookiesPerhour.push(noOfCookie);


            }
        },

        render: function() {
            this.calc();
            const container = document.getElementById('cookies-shop');


            let articleEl = document.createElement('article');
            container.appendChild(articleEl);
            const h2El = document.createElement('h2');
            articleEl.appendChild(h2El);
            h2El.textcontent = this.location;
            const ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl);
            console.log(this.cookiesPerhour);
            for (let i = 0; i < this.cookiesPerhour.length; i++) {
                console.log(this.cookiesPerhour[i]);


                const liEl = document.createElement('li');
                console.log(liEl);
                liEl.textContent = this.cookiesPerhour[i]
                ulEl.appendChild(liEl);
                liEl.textcontent = `Total ${this.totalDailyCookies} seattlecookies`;
            }
        }
    }

    seattle.render();
    tokyo.render();
    dubai.render();
    paris.render();
    lima.render();
    *\