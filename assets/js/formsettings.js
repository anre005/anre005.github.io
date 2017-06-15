$(document).ready(function() {
    $(window).unload(saveSettings);
    loadSettings();
});

function loadSettings() {
  // Futtermenge

  if(localStorage.getItem("amount") === '' || localStorage.getItem("amount") === null) {
    $('#amount').val("3");
  } else {
    $('#amount').val(localStorage.amount);
  }
  if(localStorage.getItem("weight") === '' || localStorage.getItem("weight") === null) {
    $('#weight').val("10");
  } else {
    $('#weight').val(localStorage.weight);
  }
  $("#" + localStorage.getItem("zeitraum")).prop("checked", true).checkboxradio("refresh");
  $("#" + localStorage.getItem("cat")).prop("checked", true).checkboxradio("refresh");
  if(localStorage.getItem("anname") === '' || localStorage.getItem("anname") === null) {
    $('#anname').val("Pluto");
  } else {
    $('#anname').val(localStorage.anname);
  }

  // Fettmenge
  if(localStorage.getItem("portion") === null || localStorage.getItem("portion") === '') {
    $('#portion').val("500");
  } else {
    $('#portion').val(localStorage.portion);
  }
  if(localStorage.getItem("fatact") === '' || localStorage.getItem("fatact") === null) {
    $('#fatact').val("10");
  } else {
    $('#fatact').val(localStorage.fatact);
  }
  if(localStorage.getItem("fatgoal") === '' || localStorage.getItem("fatgoal") === null) {
    $('#fatgoal').val("20");
  } else {
    $('#fatgoal').val(localStorage.fatgoal);
  }
  if(localStorage.getItem("fatfat") === '' || localStorage.getItem("fatfat") === null) {
    $('#fatfat').val("90");
  } else {
    $('#fatfat').val(localStorage.fatfat);
  }
}

function saveSettings() {
  // Futtermenge

    localStorage.weight = $('#weight').val();
    localStorage.amount = $('#amount').val();
    localStorage.zeitraum = $('input[type=radio][name=radio-choice-range]:checked', '#futterwerte').val();
    localStorage.cat = $('input[type=radio][name=radio-choice-pet]:checked', '#futterwerte').val();
    localStorage.anname = $('#anname').val();

  // Fettmenge
    localStorage.portion = $('#portion').val();
    localStorage.fatact = $('#fatact').val();
    localStorage.fatgoal = $('#fatgoal').val();
    localStorage.fatfat = $('#fatfat').val();


}