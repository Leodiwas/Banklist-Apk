"use script";

// BANKIST APP

/////////////////////////////////////////////////

const account1 = {
  owner: "Diwash Tiwari",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2022-05-08T14:11:59.604Z",
    "2022-02-27T17:01:17.194Z",
    "2022-02-20T23:36:17.929Z",
    "2022-02-21T10:51:36.790Z",
  ],
  currency: "US",
  locale: "en-US", // de-DE
};

const account2 = {
  owner: "Samrat Neupane",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2022-02-25T12:01:20.894Z",
  ],
  currency: "Rupee",
  locale: "hi-IN",
};

const accounts = [account1, account2];

// navbar
const labelWelcome = document.querySelector(".nav__bar-welcome");
const labelAlertIcon = document.querySelector(".bellicon");

// Date
const labelDate = document.querySelector(".date");

// login Box
const loginBox = document.querySelector(".login__box");
const loginAlertBox = document.querySelector(".login__box-alert-box");
const loginBtn = document.querySelector(".login__btn");

// credit card
const cardBalance = document.querySelector(".credit_card-balance");
const cardHolderName = document.querySelector(".credit_card-holder_name");

///////////////////////////////////////////////////////////////////////////////////////////////

// Functionality or Interactivity Codes

// Date
setInterval(() => {
  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date());
  return (labelDate.textContent = date);
}, 1000);
