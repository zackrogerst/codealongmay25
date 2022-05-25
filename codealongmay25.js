

// Jon Stats
let jonSnowAttack = 25;
let jonSnowHealth = 100;
let jonSnowDefense = 0;

// Jamie Stats
let jamieLannisterAttack = 35;
// let jamieSnowHealth = 100;
// let jamieSnowDefense = 0;

// battle

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister.");
} else if (jonSnowAttack < jamieLannisterAttack) {
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


//jon kicks up a shield
jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain");
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}

// peasant throws health potion of 50
const healthKit = 50;
if ((jonSnowHealth + healthKit) >= 100) {
    jonSnowHealth = 100;
    console.log("Peasant threw a potion at Jon!");
    console.log(`Jon was healed ${healthKit} points to ${jonSnowHealth}.`);
    console.log("Jon's Health is Full.");
} else {
    jonSnowHealth += healthKit;
    console.log(`Jon was healed ${healthKit} points to ${jonSnowHealth}.`);
}

