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


//user
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

    $.each(visited.places, function(index, value) {
      $("#output").append(`<ul>${this.name}
      <li class="hidden">Landmarks: ${this.landmarks}</li>
      <li class="hidden">Time of year visited: ${this.time}</li>
      <li class="hidden">Notes: ${this.notes}</li>
      </ul>`).on("click", "ul", function() {
        $("li.hidden").toggle();
      })
    
    // $("ul").click(function) {
    //   $(".hidden").toggle();
    // }
  });
  });

  
});
