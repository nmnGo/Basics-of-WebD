var name="naman goyal";

name.slice(3,10); //prints an goya 

var tweet=prompt("Compose your tweet");
var a=tweet.length;
if(a<40)
alert("tweet has been done");
else
{alert("tweet can have max 40 char");
  alert(tweet.slice(0,40) +"  is the new tweet");
}