$(".features").hover(function () {
    $(".drop-down1").removeClass("viz");
    $(".arrow-left").css("transform", "rotate(180deg)")
}, function () {
    $(".drop-down1").addClass("viz");
    $(".arrow-left").css("transform", "rotate(0deg)");
})
$(".company").hover(function () {
    $(".drop-down2").removeClass("viz");
    $(".arrow-right").css("transform", "rotate(180deg)")
}, function () {
    $(".drop-down2").addClass("viz");
    $(".arrow-right").css("transform", "rotate(0deg)");
})
let links = document.querySelectorAll("#links");
for (let i = 0; i < links.length; i++) {
    $(links[i]).hover(function () {
        $(links[i]).css("color", "red");
        $(links[i]).css("background-color", "#AAC4FF");
    }, function () {
        $(links[i]).css("color", "hsl(0, 0%, 41%)");
        $(links[i]).css("background-color", "white");
    })
}
console.log(links)
function myFunction() {
    $("li").css("display", "block");
    $("li button").css("display", "block");
    $("ul").css("flex-direction", "column");
    $("ul").css("background-color", "white");
    $(".icon").css("display", "none");
    $(".close").css("display", "block");
    $("body").css("background-color", "grey")
}
function closefunction() {
    $("li").css("display", "none");
    $(".icon").css("display", "block");
    $("ul").css('background-color', '');
    $("body").css("background-color", "hsl(0, 0%, 98%)")
}