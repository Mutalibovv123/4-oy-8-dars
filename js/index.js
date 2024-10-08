
//  FOR VA TERNARY OPERATORIGA OID
//  1-masala if bilan
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i + " ham 3 ga ham 5ga bo'linadi");
//     }  if (i % 5 == 0) {
//         console.log(i + " 5 ga bo'linadi");
//     }  if (i % 3 == 0) {
//         console.log(i + " 3 ga bo'linadi");
//     }
// }
//  1-masala Ternary bilan
// for (let i = 1; i <= 50; i++) {
//     console.log(
//       i % 3 === 0 && i % 5 === 0 ? i + " ham 3 ga ham 5 ga bo'linadigan sonlar" :
//       i % 3 === 0 ? i + " 3 ga bo'linadigan sonlar" :
//       i % 5 === 0 ? i + " 5 ga bo'linadigan sonlar" :
//       ""
//     );
//   }

// 2-masala
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = i >= 30 && i <= 70 && i % 2 === 0 ? sum + i : sum; 
//   console.log(i % 2 == 0 ? i +  "Juft" : i +  "Toq");
// }
// console.log(sum)

// 3-masala
// counter=0;
// for (let i = -20 ; i<=20 ; i++) {
//   counter = i % 2 == 1 && i >0 ? counter ++ : counter;
// }
// console.log(counter);

// 4-masala
// for (let i = 1;  i<=100;  i++) {
//     i % 2 == 0 && i % 7 == 0 ? console.log(i +"maxsus son") : console.log(i + "");
// }

// Break va continuga oid masalalar

// 1-masala
// let week = +prompt("1 dan 7 gacha sonlarni kirtiting") ;
// switch (week) {
//     case 1:
//         console.log("1-Dushanba");
//         break;
//     case 2:
//         console.log("2-Seshanba");
//         break;
//     case 3:
//         console.log("3-Chorshanba");
//         break;
//     case 4:
//         console.log("4-Payshanba");
//         break;
//     case 5:
//         console.log("5-Juma");
//         break;
//     case 1:
//         console.log("6-Shanba");
//         break;
//     case 7:
//         console.log("7-Yakshanba");
//         break;
//     default:
//         console.log("Noto'g'ri qiymatni kiritdingiz");
//         break;
// }


// 2-masala
// let month = +prompt("Oylarni kiriting");

// switch (month) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//         break;

//     default:
//     console.log("Noto'g'ri raqamni kirtdingiz");
//      break;
// }

// 3-masala
// let grade = +prompt("Olgan bahoingizni kirting");

// switch (grade) {
//     case 1:
//         console.log("Juda yomon");
//         break;
//     case 2:
//         console.log("Yomon");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;
//     case 4:
//         console.log("Yaxshi");
//         break;
//     case 5:
//         console.log("Qoniqarli");
//         break;
//     default:
//         console.log("Noto'g'ri bahoni kiritdingiz");
//         break;
// }

// 4-masala
// let energy = +prompt("Energiyangiz ta'rifini tanlash uchun 1 dan 3 gacha raqam kirting");
// switch (energy) {
//     case 1:
//         console.log("Ekonom");
//         break;
//     case 2:
//         console.log("Standard");
//         break;
//     case 3:
//         console.log("Premium");

//         break;

//     default:
//         console.log("Siz noto'g'ri raqamni kiritdingiz");

//         break;
// }

// 5-masala

// let price = +prompt("Mevaning raqamlarini kirting");
// switch (price) {
//     case 1:
//         console.log("Olma");
//         break;
//     case 2:
//         console.log("Apelsin");
//         break;
//     case 3:
//         console.log("Banan");
//         break;
//     case 4:
//         console.log("Uva");
//         break;

//     default:
//     console.log("Noto'g'ri meva raqamini kiritdingiz");
//      break;
// }

// 6-masala
// let password = +prompt("1 dan 3 gacha sonlarni kirtiing");
// switch (password) {
//     case 1:
//         console.log("Parolni tiklash");
//         break;
//     case 2:
//         console.log("Parolni o'zgartirish");
//         break;
//     case 3:
//         console.log("Chiqish");
//         break;

//     default:
//         console.log("Faqat 1 dan 3 gacha raqamlarni kiriting");
//         break;
// }

// Whilega oid va do whilega oid masalalar.
// 1-masala
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// 1-masala do while
// let i = 1;
// do { console.log(i);
//     i++; 
// } while (i<=10);

// 2-masala while
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--
// }

// 2-masala do while

// let i = 10;
// do { console.log(i);
//     i++;
// } while (i>=1);

// 3-masala while
// let son;

// while (son <= 0) { 
//   son = +prompt("Musbat son kiriting:"); 
//   if (son <= 0) {
//     console.log("Musbat son kirting");
//   }
// }

// console.log(son);

// 3-masala do while
// let son;
// do {
//   son = +prompt("Musbat son kiriting:"); 
// } while (son <= 0); 
// console.log(son);

// 4-masala while
// let i = 2;
// while (i <= 20) { 
//     console.log(i);
//     i += 2
// }

// 4-masala do while
// let i = 2;
// do { console.log(i);
//     i += 2;
// } while (i <= 20); 

// 5-masala while
// let num = +prompt("Sonni kirting");
// let qoldiq;
// let sum = 0;
// while (num > 0) {
//     qoldiq = num % 10;
//     sum += qoldiq;
//     num = Math.trunc(num / 10);
// }
// console.log(sum);

// 5-masala do while
// let num = +prompt("Sonni kirting");
// let qoldiq;
// let sum = 0;
// do {
//     console.log(num);
//     qoldiq = num % 10;
//     sum += qoldiq;
//    num = Math.trunc(num / 10);
// } while (num > 0);
// console.log(sum);


// 6-masala while 

// let num = +prompt("Sonni kirting");
// while (num > 1) {
//     num /= 2;
//     console.log(num);
// }

// 6-masala do while
// let num = +prompt("Sonni kirting");
// do { num /= 2;
//     console.log(num);

// } while (num >1);

// 7-masala while

// let num = +prompt("Sonni kirtiting");
// let qoldiq;

// while (num > 0) {
//  qoldiq = num % 10; 

//  console.log(qoldiq); 
//  num = Math.trunc(num / 10); 
// }

// 7-masala do while

// let num = +prompt("sonni kiriting");
// let qoldiq;

// do {
//     console.log(qoldiq);
//     qoldiq = num % 10;
//     num = Math.trunc(num / 10);
// } while (num > 0);

// 8-masala while

// let initial = +prompt("Boshlang'ich sonni kiriting");
// let end = +prompt("Yakuniy sonni kiriting");
// let i = initial;
// while (i<= end) { if (i % 3 == 0) {
//     console.log(i);
// }
// i++
// }

// 8-masala do while

// let initial = +prompt("Boshlang'ich sonni kirting");
// let end = +prompt("Yakuniy sonni kriting");
// let i = initial;
// do {  if (i % 3 == 0) {
//     console.log(i);
// }
// i++
// } while (i <= end);

// 9-masala

let num = +prompt("Sonni kirting");
let qoldiq;
while (num > 0) {
     qoldiq = num % 10;
     console.log(qoldiq);
}
Math.trunc("num");


























