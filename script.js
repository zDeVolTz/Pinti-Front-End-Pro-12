const arrayValue= new Array(+prompt("Вкажіть довжину бажаємого масиву"));
for (let i = 0; i < arrayValue.length; i++ ){
    arrayValue[i] = prompt(`Введіть ${i+1} елемент`);
}
// виводим вміст масиву 
console.log(arrayValue);

// Cортируємо за зростанням
arrayValue.sort((a , b) => {
    return a - b ;
});
// виводим вміст масиву 
console.log(arrayValue);

// Видаляємо елементи з 2 по 4 включно враховуючи наявність доступновної довжини там кількості елементів 
arrayValue.splice(1,3);
// виводим вміст масиву 
console.log(arrayValue);