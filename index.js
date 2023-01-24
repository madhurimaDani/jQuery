
// $("h1").css("color", "red");

//if we are including the jquery cdn and index.js in the head
// $("document").ready(function(){
//     $("button").click(function(){
//         $("h1").css("color", "red");
//     })
// })

$("button").click(function(){
    $("h1").css("color", "red");
})

//Manipulating style using jQuery

//setter, as two inputs
$("h1").css("color", "green");

//getter as one input
console.log($("h1").css("color"));

//add/remove class
$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").addClass("big-title margin-50");
console.log($("h1").hasClass("margin-50"));

//changing text
$("h1").text("Again Hello!")
$("h1").html("<strong>Madhurima</strong>");

//attribute
console.log($("h1").attr("class"));

//event listener
$("document").on("keydown", function(event){
    console.log(event.key);
});

$("h1").on("mouseover", function(){
    console.log("mouse over h1");
});

//adding element on fly
$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<a href='www.google.com'>prepend</a>");
$("h1").append("<a href='www.yahoo.com'>append</a>");

$("a").remove();

//animations
$("button").click(function(){
    $("h1").css("color","purple");
    $("h1").hide(); //hides h1 suddenly
    $("h1").show();
    $("h1").fadeOut(); //slower, visible change in opacity
    $("h1").fadeIn();
    $("h1").fadeToggle();
    $("h1").slideUp();
    $("h1").slideDown();
    $("h1").slideToggle();
    $("h1").slideUp().slideDown().animate({opacity:0.5}); //chaining methods.
});



