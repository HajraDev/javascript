// //// Coding Challenge #1

// /*
// Ali and Babar are comparing their BMI (Body Mass Index), 
// calculated using the formula: BMI = mass / height ** 2 = mass / (height * height)
//  (mass in kg and height in meters).

// 1. Store Ali's and Babar's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'aliHigherBMI' to check if Ali has a higher BMI than Babar.

// TEST DATA 1: Ali weighs 78 kg and is 1.69 m tall. Babar weighs 92 kg and is 1.95m tall.
// TEST DATA 2:Ali weighs 95 kg and is 1.88 m tall. Babar weighs 85 kg and is 1.76m tall.

// /*

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
console.log(aliBmi , babarBmi)

if (aliBmi > babarBmi)
{
   console.log("Ali has a higher BMI than Babar")
}else{
   console.log("Babar has a higher BMI than Ali")
}