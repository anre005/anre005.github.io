$(document).on("pagecreate", "#foodamount", function(){
  $('#fatcalc').click(function() {
      //event.preventDefault();
      var portion = $('#portion').val(),
          fatact = $('#fatact').val()/100,
          fatgoal = $('#fatgoal').val()/100,
          fatfat = $('#fatfat').val()/100;

      fatamount = (portion * (fatgoal - fatact)/(fatfat - fatact)).toFixed(2);

      if(fatfat < fatact) {
        document.getElementById("fatamounttext").innerHTML = `Bitte Angaben überprüfen. \n
                                                              Der Fettanteil des Fleisches ist bereits höher als der des Fettes.`;
        document.getElementById("barchart").innerHTML = null;
        alert(`Bitte Angaben überprüfen. Der Fettanteil des Fleisches ist bereits höher als der des Fettes.`);
        return ;
      }

      if(fatamount < 0) {
        document.getElementById("fatamounttext").innerHTML = "Das Futter enthält bereits ausreichend Fett.";
        document.getElementById("barchart").innerHTML = null;
        return ;
      }

      if(fatgoal > fatact && fatgoal > fatfat) {
        document.getElementById("fatamounttext").innerHTML = "Der gewünschte Fettanteil kann nicht erreicht werden.";
        document.getElementById("barchart").innerHTML = null;
        return ;
      }

      if(fatgoal == fatact) {
        document.getElementById("fatamounttext").innerHTML = "Das Fleisch hat bereits den gewünschten Fett-Anteil.";
        document.getElementById("barchart").innerHTML = null;
        alert("Das Fleisch hat bereits den gewünschten Fett-Anteil.");
        return ;
      }

      var barchart = new Chartist.Bar('#barchart', {
                          labels: ['Futtermenge (gesamt)', 'Fleisch, Knochen, etc.', 'Fett'],
                          series: [portion, portion - fatamount, fatamount]
                        }, {
                          distributeSeries: true
                        });
      //fatamount = fatamount.toFixed(2);
      document.getElementById("fatamounttext").innerHTML = `Es sollten <strong>${fatamount}</strong> Gramm der Mahlzeit durch Fett ersetzt werden.`;
      return barchart;
  });
});