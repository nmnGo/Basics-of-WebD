$("h1").css("color", "red");
$("h1").addClass("heading"); //$ is querySelectorAll
$("h1").removeClass("margin");
//$("h1").removeClass("heading");

//((((((  var a = $("h1").hasClass("ss"); //true or false
//if (!a) { $("h1").text("bye"); } )))))
//================ImG CHANGE================

$("img").click(function ChImg() {
    $("img").attr("src", "mashable.png")
}); //to change imageOn Click


//$("button").click(() => $("h1").css("color", "purple"));

//======================================================

//in place of .click or .keypress or hover we can use
// on("event", what to do) for eg----------------
//$("h1").on("click", () => $("h1").css("color", "blue"));

// after means content added in js
// will occur after html/css code TAG written with it (similar before)
$("h1").after(" <button> after </button>");
// NeW button will come after h1 tag
//<h1>hello friends</h1><button>after</button> is how its interpreted

//appned and prepend on other hand will add content within the tag
//after the attribute or text written with it (similar is prepend)
$("h1").append(" <button> append </button>");
//<h1>hello friends <button>Append</button></h1> is how its interpreted

//================================================================
// Animations using Js
$("button").on("click", () => $("h1").slideUp().slideDown().animate({ opacity: 0.5, margin: "20px" }));
// in animate only methods with numeric will work
// .a.b.c more functions can be added subsequently and they will work
// left to right as here