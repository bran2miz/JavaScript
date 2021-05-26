// let userName = 'BrandonMizutani'
// userName = 'Brandon'
// console.log(userName)


// userName= "Brandon"
// console.log(userName)

let userName = prompt('Enter Your Name Here!');
console.log(userName);
document.write('<h2>' + userName + '</h2>');

let userAnswer = prompt('Is world traveling something that you are interested in?');
console.log(userAnswer);

if (userAnswer =='yes') {
    document.write('<h3> Welcome Traveler ' + userName +'</h3>');
} else {
    document.write('<h3> Well ' + userName +', hope you still enjoy my site!')
}