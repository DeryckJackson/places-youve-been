//business
function Places() {
  this.places = [];
}

Places.prototype.addPlace = function(place) {
  this.places.push(place);
}

function Place(name, landmarks, time, notes) {
  this.name = name;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

let visited = new Places();

function list(visited) {
  let placeList = [];
  for (let i = 0; i < visited.places.length; i++) {
    placeList.push(visited.places[i].name);
  }
  return placeList;
}

//user
$(document).ready(function() {
  $("#place").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();
    let landmarks = $("input#landmarks").val();
    let time = $("#time").val();
    let notes = $("input#notes").val();
    const newPlace = new Place(name, landmarks, time, notes);
    visited.addPlace(newPlace);
    $("#output").empty();
    $("#output").text(list(visited));
  });
});

