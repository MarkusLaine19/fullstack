var data = require('./persons.json');

console.log(data);

data.push({
    index: 7,
    name: "John Doe",
    address: "123 Elm St"
});

console.log("After adding a new person");
console.log(data);

data.pop();

console.log("After removing the last person");
console.log(data);