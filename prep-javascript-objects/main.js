const person = {
  firstName: 'Kamala',
  lastName: 'Harris',
  hobby: 'Reading Books'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is: ', fullName + '.');

person.job = 'Politician';
console.log('The person\'s current job is: ', person.job + '.');

person.previousJob = 'Attorney';
console.log('The person\'s previous job is: ', person.previousJob + '.');

console.log(person);
