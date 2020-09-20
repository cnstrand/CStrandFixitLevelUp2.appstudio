
//Giving the user a message based on the inputs they entered, this will tell them what they should wear
switch (true) {
case (userTemp < 32 && userState == 'NE'):
  alert(`Wear a warm coat, hat, scarf and gloves.`)
  break;
case (userTemp >= 32 && userTemp <50 && userState == 'NE'):
  alert(`Wear a warm coat but you won't need a hat, scarf or gloves.`)
  break;
case (userTemp >= 32 && userTemp <50 && userState == 'FL'):
  alert(`Wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
  break;
case (userTemp >= 50 && userTemp <70 && userState == 'FL'):
  alert(`Wear a warm coat, hat and gloves. Maybe a scarf too.`)
  break;
}