 //$(document).on("pagecreate", function(){
 // Do some processing when the button with id 'calc' is clicked or tapped

function futtercalc() {
      //event.preventDefault();
        var weight = $('#weight').val(),
            amount = $('#amount').val(),
            //zeitraum = $('input[name=radio-choice-range]:checked', '#futterwerte').val(),
            zeitraum_helper = document.getElementById("timerange"),
            zeitraum = zeitraum_helper.options[zeitraum_helper.selectedIndex].text,
            //cat = $('input[name=radio-choice-pet]:checked', '#futterwerte').val(),
            cat_helper = document.getElementById("petchoice"),
            cat = cat_helper.options[cat_helper.selectedIndex].text,
            anname = $('#anname').val(),
            fleisch = 0,
            knochen = 0,
            leber = 0,
            fleischperc = 0.8,
            knochenperc = 0.1;

      if(cat == 'Katze') {
        fleischperc = 0.85;
        knochenperc = 0.05;
      }

      if(zeitraum == 'Tag') fleisch = fleischperc * amount/100 * weight;
      if(zeitraum == 'Woche') fleisch = fleischperc * amount/100 * weight * 7;
      if(zeitraum == 'Monat') fleisch = fleischperc * amount/100 * weight * 30;

      if(zeitraum == 'Tag') knochen = knochenperc * amount/100 * weight;
      if(zeitraum == 'Woche') knochen = knochenperc * amount/100 * weight * 7;
      if(zeitraum == 'Monat') knochen = knochenperc * amount/100 * weight * 30;

      if(zeitraum == 'Tag') leber = 0.05 * amount/100 * weight;
      if(zeitraum == 'Woche') leber = 0.05 * amount/100 * weight * 7;
      if(zeitraum == 'Monat') leber = 0.05 * amount/100 * weight * 30;

      fleisch = fleisch.toFixed(2);
      knochen = knochen.toFixed(2);
      leber = leber.toFixed(2);

      /*$('#fleischout').text(fleisch);
      $('#knochenout').text(knochen);
      $('#leberout').text(leber);
      $('#innereienout').text(leber);
      $('#zeitraumout').text(zeitraum);
      $('#annameout').text(anname);*/

      document.getElementById("petname").innerHTML = `Futtermengen für ${anname}`;

      document.getElementById("amountlist").innerHTML = `<ul>
              <li>Fütterungsmenge pro: <strong>${zeitraum}</strong></li>
              <li>Fleisch: <strong>${fleisch} kg</strong></li>
              <li>Knochen: <strong>${knochen} kg</strong> (keine blanken Knochen füttern)</li>
              <li>Leber: <strong>${leber} kg</strong></li>
              <li>Andere Innereien (Milz, Nieren, ...): <strong>${leber} kg</strong></li>
            </ul>`;
}
//});

function test1() {
  var zeitraum_test = document.getElementById('timerange').value;
  //var zeitraum = zeitraum_helper.options[zeitraum_helper.selectedIndex].text;
  document.getElementById('test1_check').innerHTML('test');
  if(zeitraum_test == 'Tag') {
    alert('Tag');
  } else {
    alert('Wert unbekannt');
  }
}