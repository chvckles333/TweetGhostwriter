function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Don't you think that","I think I heard that","I'm pretty sure that",
  "Sometimes it seems like"];
  var body = ["your mom","Pauly Shore","my dog","the President","my neighbor"];
  var end = ["needs to chill out.","might be the Loch Ness monster.",
  "has some real issues."];

  randIndex = randomUpTo(intro.length-1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length-1);
  sentence += " " + body[randIndex];
  randIndex = randomUpTo(end.length-1);
  sentence += " " + end[randIndex];

  document.getElementById("tweet").innerHTML=sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
