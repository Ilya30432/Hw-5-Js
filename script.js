// номер 1 //
const array =[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const result = array.reduce(function(acc, curr) {
    if (curr > 0) {
        acc.count++;
        acc.sum += curr;
    };
    return acc;
}, { sum: 0, count: 0 }); 
console.log("Общая сумма:", result.sum, "Количество:", result.count);
// номер 2 // 
let minNum = array[0];
let indexMinNum;
array.forEach(function(num,index){
    if(num < minNum ){
        minNum = num;
        indexMinNum = index;
    };
});
console.log(`Мин.число: ${minNum} , Индекс: ${indexMinNum} `);
// номер 3 //
let maxNum = array[0];
let indexMaxNum;
array.forEach(function(num,index){
    if(num > maxNum ){
        maxNum = num;
        indexMaxNum = index;
    };
});
console.log(`Макс.число: ${maxNum} , Индекс: ${indexMaxNum} `);

// номер 4 //
const negativResult = array.reduce(function(suma,suma2){
    if(suma2 < 0){
        suma++;
   };
    return suma;
},0);
console.log(`Количество отрицательных чисел: ${negativResult}`);

//номер 5 //
const neparniNumber = array.reduce(function(parni,parni2){
    if(parni2 > 0 && parni2 % 2 !== 0){
        parni++;
    };
    return parni;
},0);
console.log(neparniNumber);
// номер 6 //
const parniNumber = array.reduce(function(parni,parni2){
    if(parni2 > 0 && parni2 % 2 === 0){
        parni++;
    };
    return parni;
},0);
console.log(parniNumber);
// номер 7 //
const sumaParniNumber = array.reduce(function(parni,parni2){
    if(parni2 > 0 && parni2 % 2 === 0){
       return parni+=parni2;
    };
    return parni;
},0);
console.log(sumaParniNumber);
// номер 8// 
let sumaNeparni = 0
array.forEach(function(parni){
    if(parni > 0 && parni % 2 !==  0){
      sumaNeparni+=parni
    };
});
console.log(`-${sumaNeparni}`);
// номер 9 // 
const dobutokNumber = array.reduce(function(parni,parni2){
    if(parni2 > 0){
        parni*=parni2;
    };
    return parni;
},1);
console.log(dobutokNumber);
// номер 10 //
let maxNumber = 0 ;
array.forEach(function(num){
    if(num > maxNumber ){
        maxNumber = num;
    };
});
const newMassiv = array.map(function(suma){
    if(maxNumber === suma){
        return suma;
    } return 0;
});
console.log(newMassiv);
