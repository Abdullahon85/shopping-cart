let obj = receipt();


let menu = 'Вы заказали ';
let food = ''
let delivery = 9000;
let cost = 0; 
for(let key in obj){
    cost += obj[key]['price'];
    food = food + key + obj[key].info + ', ';
}
console.log(`${menu} ${food} || Cтоимость всего состовляет ${cost + delivery} c доставкой в ${delivery} `);