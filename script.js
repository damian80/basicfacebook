let database = [
    {
        username:'damian',
        password:'1234'
    }
];
let newsFeed = [
    {
        username:'bobby',
        timeline:'so tired'
    },
    {
        username:'sally',
        timeline:'js is so cool'
    }
];

let userNamePrompt = prompt('what is your username');
let passwordPrompt = prompt('what is your password');

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password){
        console.log(newsFeed);
    }
    else {
        alert('sorry i dont know you');
    }
}

signIn(userNamePrompt, passwordPrompt);