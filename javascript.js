function getRandomValue(list) {
  var index = Math.floor(Math.random() * list.length);
  return list[index];
}

function createSection(section) {
  $("#main").append(`<h1 mb-4>${section}</h1><div id="${section}" class="card-deck"></div>`);
}

function createSubsection(section, subsection, text) {
  $(`#${section}`).append(`<div class="card mb-4"><h2 id="${subsection}" class="card-header">${subsection}</h2><div class="card-body">${text}</div></div></div>`)
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
