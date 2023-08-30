//// Coding Challenge #1

/*
Ali and Babar are comparing their BMI (Body Mass Index), 
calculated using the formula: BMI = mass / height ** 2 = mass / (height * height)
 (mass in kg and height in meters).

1. Store Ali's and Babar's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'aliHigherBMI' to check if Ali has a higher BMI than Babar.

TEST DATA 1: Ali weighs 78 kg and is 1.69 m tall. Babar weighs 92 kg and is 1.95m tall.
TEST DATA 2:Ali weighs 95 kg and is 1.88 m tall. Babar weighs 85 kg and is 1.76m tall.
*/

// 1. Store Ali's and Babar's mass and height in variables
var aliMass=78;
var aliHeight=1.69;
var babarMass=92;
var babarHeight=1.95;


// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// BMI = mass / height ** 2 = mass

aliBmi=78 / 1.69**2;
console.log(aliBmi);

babarBmi=78 / 1.95**2;
console.log(babarBmi);

// 3. Create a boolean variable 'aliHigherBMI' to check if Ali has a higher BMI than Babar.
var aliHigherBMI=aliBmi > babarBmi;
// console.log(aliBmi , babarBmi)

if (aliBmi > babarBmi)
{
   console.log("Ali has a higher BMI than Babar")
}else{
   console.log("Babar has a higher BMI than Ali")
}
 // Coding Challenge #2
//  Use the BMI example from Challenge #1, and the code you already
//  wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher
//  BMI. The message can be either "Ali's BMI is higher than Zain's!"
//   or "Zain's BMI is higher than Ali's!"
// 2. Use a template literal to include the BMI values in the outputs. 

// Example: "Ali's BMI (28.3) is higher than Zain's (23.9)!"

// HINT: Use an if/else statement 😉

// // GOOD LUCK 😀


 var aliBmi=28.3;
 var zainBmi=23.9;
 if(aliBmi > zainBmi)
 {
    console.log(`Ali's BMI is higher than Zain`)
 }else{
    console.log(`Zain's BMI is higher than Ali's!`)
 }

//  losely and strictly  ==    and ===


 // Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins 
the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a
 draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or 
equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/ 


// 1. Calculate the average score for each team, using the test data below
let averageScoreDolphins=(96+108+89)/3;
console.log(averageScoreDolphins)

let averageScoreKoalas=(88+91+110)/3;
console.log(averageScoreKoalas)

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a
//  draw, so test for that as well (draw means they have the same average score).
if(averageScoreDolphins > averageScoreKoalas)
{
    console.log("Dolphins are winner")
}
else if(averageScoreDolphins < averageScoreKoalas){
    console.log("Koalas are winner")
}
else{
    console.log("Draw")
}
// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score
//  than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for 
// minimum score, as well as multiple else-if blocks 😉

// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
const DolphinsScore=(97+112+101)/3;
console.log(DolphinsScore)

const KoalasScore=(109+95+123)/3;
console.log(KoalasScore)
const minscore=100;
if(DolphinsScore > KoalasScore && minscore)
{
    console.log("Dolphins are winner")
}
else if(DolphinsScore < KoalasScore && minscore){
    console.log("Koalas are winner")
}
else{
    console.log("Draw")
}
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both 
// have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const avgDolphinsScore=(97+112+101)/3;
console.log(avgDolphinsScore)

const avgKoalasScore=(109+95+106)/3;
console.log(avgKoalasScore)
const Minscore=100;
if(DolphinsScore >= KoalasScore && Minscore)
{
    console.log("Both teams are win the trophy")
}
else{
    console.log("no team are win the trophy")
}