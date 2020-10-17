function getRandomValue(list) {
  var index = Math.floor(Math.random() * list.length);
  return list[index];
}

function createSection(section) {
  $("#main").append(`<section id="${section}" class="container"><h1>${section}</h1></section>`);
}

function createSubsection(section, subsection, text) {
  $(`#${section}`).append(`<div id="${subsection}" class="col-sm-4"><h2>${subsection}</h2><p>${text}<p></div>`)
}

$(document).ready(function() {

  $("main").empty()

  for (section in attributes) {
    createSection(section);

    for (subsection in attributes[section]) {
      var value = getRandomValue(attributes[section][subsection]);
      createSubsection(section, subsection, value);
    }
  }

});
