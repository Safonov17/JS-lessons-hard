"use strict";
/*
1. Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке.
*/
const lang = "en";

// а) Через if
if (lang == "ru") {
  console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
}
if (lang == "en") {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

// b) Через switch
switch (lang) {
  case "ru":
    console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
    break;
  case "en":
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
    break;
}

// c) Через многомерный массив без if и swich
const days = {
  ru: ["понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"],
  en: ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"],
};
console.log(days[lang]);

/* 
2. У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”. Решить задачу с помощью нескольких тернарных операторов, без использования if или switch 
*/
const namePerson = "Илья";
const nameCheck =
  namePerson == "Артем"
    ? console.log("Директор")
    : namePerson == "Александр"
    ? console.log("Преподаватель")
    : console.log("Студент");
