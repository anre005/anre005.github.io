function fatcalc(){
  var portion = $('#portion').val(),
      fatact = $('#fatact').val()/100,
      fatgoal = $('#fatgoal').val()/100,
      fatfat = $('#fatfat').val()/100;

  fatamount = (portion * (fatgoal - fatact)/(fatfat - fatact)).toFixed(2);

  if(fatfat < fatact) {
    document.getElementById("fatamounttext").innerHTML = `Bitte Angaben überprüfen. \n
                                                          Der Fettanteil des Fleisches ist bereits höher als der des Fettes.`;
    return ;
  }

  if(fatamount < 0) {
    document.getElementById("fatamounttext").innerHTML = "Das Futter enthält bereits ausreichend Fett.";
    return ;
  }

  if(fatgoal > fatact && fatgoal > fatfat) {
    document.getElementById("fatamounttext").innerHTML = "Der gewünschte Fettanteil kann nicht erreicht werden.";
    return ;
  }

  if(fatgoal == fatact) {
    document.getElementById("fatamounttext").innerHTML = "Das Fleisch hat bereits den gewünschten Fett-Anteil.";
    return ;
  }
  document.getElementById("fatamounttext").innerHTML = `Es sollten <strong>${fatamount}</strong> Gramm der Mahlzeit durch Fett ersetzt werden.`;

  var bar_fat = AmCharts.makeChart("barfat",
				{
	"type": "serial",
	"categoryField": "category",
	"angle": 30,
	"depth3D": 30,
	"colors": [
		"#2C79B0"
	],
	"startDuration": 1,
	"startEffect": "bounce",
	"fontSize": 12,
	"thousandsSeparator": ".",
	"export": {
		"enabled": true
	},
	"categoryAxis": {
		"gridPosition": "start"
	},
	"trendLines": [],
	"graphs": [
		{
			"accessibleLabel": "[[category]] [[value]]",
			"balloonText": "[[category]]:[[value]] Gramm",
			"fillAlphas": 1,
			"id": "AmGraph-1",
			"title": "amgraph-1",
			"type": "column",
			"valueField": "column-1"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"stackType": "3d",
			"title": "Menge in Gramm"
		}
	],
	"allLabels": [],
	"balloon": {},
	"titles": [],
	"dataProvider": [
		{
			"category": "Gesamtportion",
			"column-1": portion
		},
		{
			"category": "Fleisch",
			"column-1": portion - fatamount
		},
		{
			"category": "Fett",
			"column-1": fatamount
		}
	]
});
		return bar_fat;
}