

// Jon Stats
let jonSnowAttack = 25;
let jonSnowHealth = 100;
let jonSnowDefense = 0;

// Jamie Stats
let jamieLannisterAttack = 107;
// let jamieSnowHealth = 100;
// let jamieSnowDefense = 0;

// battle

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister.");
} else if(jonSnowAttack < jamieLannisterAttack){
    console.log("Jamie Lannister has better attack than Jon Snow.");
} else {
    console.log("Jon Snow and Jamie Lannister have the same attack.");
}

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain");
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}