const faker = require('faker');
const { posNouns, negNouns, posAdj, negAdj } = require('./generateLexicon.js');
const fs = require('fs');


// let posReviews = [
//   `I and my kids absolutely love this ${posNouns[faker.random.number({min: 0, max: 10000})]}!  Its a ${posAdj[faker.random.number({min: 0, max: 10000})]} ${posNouns[faker.random.number({min: 0, max: 10000})]} - worth the price!`,
//   `This ${posNouns[faker.random.number({min: 0, max: 10000})]} is exactly what I needed in my life - would recommend`,
//   `I love my ${posAdj[faker.random.number({min: 0, max: 10000})]} ${posNouns[faker.random.number({min: 0, max: 10000})]} and you will too`,
//   `I read the reviews that said this was ${negAdj[faker.random.number({min: 0, max: 10000})]} but I completely disagree - it's ${posAdj[faker.random.number({min: 0, max: 10000})]}! 13/10 would purchase again.`,
//   `I never knew I need this ${posNouns[faker.random.number({min: 0, max: 10000})]} until I bought it and now I dont know how I lived without it`
// ];

const generatePosReivews = (i, noun1, adj1, noun2, adj2) => {
  return [
    `I and my kids absolutely love this ${noun1}! Its a ${adj1} ${noun2} - worth the price!`,
    `This ${noun1} is exactly what I needed in my life - would recommend`,
    `I love my ${adj1} ${noun1} and you will too`,
    `I read the reviews that said this was ${adj2} but I completely disagree - it's ${adj1}! 13/10 would purchase again.`,
    `I never knew I need this ${noun1} until I bought it and now I dont know how I lived without it`
  ][i % 5]
};


const stream = fs.createWriteStream('../review_data.csv');

for (let i = 0; i < 100; i++) {
  let data = generatePosReivews(i, posNouns[faker.random.number({min: 0, max: 5000})], posAdj[faker.random.number({min: 0, max: 5000})], posNouns[faker.random.number({min: 0, max: 5000})], negAdj[faker.random.number({min: 0, max: 5000})]);
  console.log(data);
  stream.write(data);
}
stream.on('end', () => stream.end());

// const today = new Date();
// const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// const dateTime = date+' '+time;

// console.log(dateTime);
// console.log(new Date());
// console.log(faker.name.findName(), faker.random.number( { min: 1, max: 5 } ), faker.random.word(), faker.commerce.product());
// console.log(faker.date.month(), faker.random.number( { min: 1, max: 31 } ),', ', faker.random.number( { min: 2008, max: 2018 } ));


// let rating = faker.random.number( { min: 1, max: 5 } );
// // let review = (rating >= 4 ? : )

// console.log()


// let record = {
//   customer_name: faker.name.findName(),
//   rating: rating,
//   title: faker.commerce.product(),
//   date: `${faker.date.month()} ${faker.random.number( { min: 1, max: 31 } )}, ${faker.random.number( { min: 2008, max: 2018 } )}`,
//   review:  '',
//   helpful_count: faker.random.number( { min: 1, max: 1000 } ),
//   verified: faker.random.boolean(),
//   productId: faker.random.number( { min: 1, max: 10000000 } )
// }

// console.log(record);