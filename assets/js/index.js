 $(document).on("pagecreate", "#foodamount", function(){
 // Do some processing when the button with id 'calc' is clicked or tapped

  $('#futtercalc').on('tap', function() {
      //event.preventDefault();
        var weight = $('#weight').val(),
            amount = $('#amount').val(),
            zeitraum = $('input[name=radio-choice-range]:checked', '#futterwerte').val(),
            cat = $('input[name=radio-choice-pet]:checked', '#futterwerte').val(),
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

      document.getElementById("petname").innerHTML = `für ${anname}`;

      document.getElementById("amountlist").innerHTML = `<ul data-role="listview" data-icon="false">
              <li>Fütterungsmenge pro: <strong>${zeitraum}</strong></li>
              <li>Fleisch: <strong>${fleisch} kg</strong></li>
              <li>Knochen: <strong>${knochen} kg</strong> (keine blanken Knochen füttern)</li>
              <li>Leber: <strong>${leber} kg</strong></li>
              <li>Andere Innereien (Milz, Nieren, ...): <strong>${leber} kg</strong></li>
            </ul>`;
  });
});