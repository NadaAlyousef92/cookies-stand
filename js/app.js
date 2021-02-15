"use strict";


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

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
            liEl.textcontent = `Total ${this.totalDailyCookies} seattlecookies`;
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