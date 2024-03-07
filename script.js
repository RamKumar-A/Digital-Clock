'use strict';

const hour = document.querySelector('.hrs');
const minute = document.querySelector('.mins');
const second = document.querySelector('.secs');
const meridian = document.querySelector('.meridian');

setInterval(function () {
  const date = new Date();
  hour.innerHTML = (date.getHours() % 12 || 12).toString().padStart(2, '0');
  minute.innerHTML = date.getMinutes().toString().padStart(2, '0');
  second.innerHTML = date.getSeconds().toString().padStart(2, '0');
  meridian.innerHTML = date.getHours() >= 12 ? 'PM' : 'AM';
}, 0);
