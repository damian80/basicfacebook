let database = [
    {
        username:'damian',
        password:'1234'
    },
    {
        username:'sally',
        password:'1234'
    },
    {
        username: 'ingrid',
        password: '12345' 
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
    },
    {
        username: 'frank',
        timeline: 'so happy'
    },

];
function isUserValid(username,password){
    for (let i=0; i<database.length; i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}



function signIn(username, password) {
    if (isUserValid(username,password)){
        console.log(newsFeed);
    }
    else {
        alert('sorry i dont know you');
    }
}
let userNamePrompt = prompt('what is your username');
let passwordPrompt = prompt('what is your password');

signIn(userNamePrompt, passwordPrompt);