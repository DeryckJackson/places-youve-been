//business
function Places() {
  this.places = [];
  this.id = 0
}

Places.prototype.addPlace = function(place) {
  this.places.push(place);
}

function Place(name, landmarks, time, notes) {
  this.name = name;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
  this.id++;
}


//user
function display() {
  $(".hide").toggle();
}

$(document).ready(function() {
  let visited = new Places();
  $("#place").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();
    let landmarks = $("input#landmarks").val();
    let time = $("#time").val();
    let notes = $("input#notes").val();

    const newPlace = new Place(name, landmarks, time, notes);
    visited.addPlace(newPlace);

    $("#output").empty();

    visited.places.forEach(function(element) {
      $("#output").append(`<ul onclick = "display()">${element.name}
      <li class="hide ${element.name}">${element.landmarks}</li>
      <li class="hide ${element.name}">${element.time}</li>
      <li class="hide ${element.name}">${element.notes}</li>
      </ul>`)
      })
    
    
    // $("ul").click(function) {
    //   $(".hidden").toggle();
    // }
  });
});
