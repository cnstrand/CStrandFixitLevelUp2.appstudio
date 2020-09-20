
//Declaring the variables for peoples first name
let firstName = prompt(`What is your name?`)
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)

//Declaring the state in which the user resides, using capitalized abbreviations
let userState = prompt(`What is the abbreviation for the state where you are from?`)
userState = userState.toUpperCase()

//Declaring the temperaure a user is experiencing in Fahrenheit
let userTemp = parseInt(prompt(`What is your temperature (in Fahrenheit)?`))

//Giving the user a statement based on the information they entered
let arrayTotal = [firstName, userState, userTemp]
alert(`Hello ${firstName}, you are from ${userState} and have a temperature of ${userTemp} degrees Fahrenheiht.`)
console.log(arrayTotal);

//Giving the user a message based on the inputs they entered, this will tell them what they should wear

if (userTemp < 32 && userState == 'NE')
  NSB.MsgBox(`Wear a warm coat, hat, scarf and gloves.`) 
else if (userTemp >= 32 && userTemp < 50 && userState == 'NE') 
  NSB.MsgBox(`Wear a warm coat, but you won't need a hat, scarf and gloves.`)
else if (userTemp >= 32 && userTemp < 50 && userState == 'FL') 
  NSB.MsgBox(` if Wear A less heavy coat.`)
else if (userTemp >= 50  && userTemp < 75 && userState == 'FL') 
  NSB.MsgBox(`Wear a light jacket and smile!`)


