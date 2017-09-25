//Business logic
function Destination(dest, loc, lan, time, note) {
  this.destiNation = dest;
  this.locaTion = loc;
  this.landMark = lan;
  this.timeOfYear = time;
  this.noTes = note;
}
Destination.prototype.fullDestination = function() {
  return this.destiNation ;
}

//frontend logic
$(function(){
  $("form#new-destination").submit(function(event){
    event.preventDefault();

    var inputtedDestination = $("input#destination").val().toUpperCase();
    var inputtedLocation = $("input#location").val().toUpperCase();
    var inputtedLandmark = $("input#landmark").val().toUpperCase();
    var inputtedTimeOfYear = $("input#time-of-year").val().toUpperCase();
    var inputtedNotes = $("input#notes").val();

    var newDestination = new Destination(inputtedDestination, inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);

    $("ul.destination").append("<li><span class = dest1>" + newDestination.fullDestination() + "</span></li>");

    $("input#destination").val("");
    $("input#location").val("");
    $("input#landmark").val("");
    $("input#time-of-year").val("");
    $("input#notes").val("");


$(".dest1").last().click(function() {
  $("#show-destination").show();
  $("#show-destination h2").text(newDestination.destiNation);


    $(".destination-result").text(newDestination.destiNation);
    $(".location").text(newDestination.locaTion);
    $(".landmark").text(newDestination.landMark);
    $(".time-of-year").text(newDestination.timeOfYear);
    $(".notes").text(newDestination.noTes);
  });
});
});
