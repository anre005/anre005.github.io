 //$(document).on("pagecreate", function(){
 // Do some processing when the button with id 'calc' is clicked or tapped

var pie_food = null;

function futtercalc() {
      //event.preventDefault();
        var weight = $('#weight').val(),
            amount = $('#amount').val(),
            zeitraum_helper = document.getElementById("timerange"),
            zeitraum = zeitraum_helper.options[zeitraum_helper.selectedIndex].text,
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

      unit_fleisch = "Kilogramm";
      unit_rfk = "Kilogramm";
      unit_inn = "Kilogramm";

      fleisch = fleisch.toFixed(2);
      if(fleisch < 1) {
        fleisch_tab = fleisch * 1000;
        unit_fleisch = "Gramm";
      } else {
        fleisch_tab = fleisch;
      }
      knochen = knochen.toFixed(4);
      if(knochen < 1) {
        knochen_tab = knochen * 1000;
        unit_rfk = "Gramm";
      } else {
        knochen_tab = knochen;
      }
      leber = leber.toFixed(4);
      if(leber < 1) {
        leber_tab = leber * 1000;
        unit_inn = "Gramm";
      } else {
        leber_tab = leber;
      }


      document.getElementById("petname").innerHTML = `Futtermengen für ${anname} pro ${zeitraum}`;

      document.getElementById("amountlist").innerHTML = `
              <table class="table table-responsive table-striped">
                <thead>
                  <th>Muskelfleisch</th>
                  <th>Rohe fleischige Knochen</th>
                  <th>Leber</th>
                  <th>Andere Innereien (Leber, Milz, ...)</th>
                </thead>
                <tbody>
                  <tr>
                    <td>${fleisch_tab} ${unit_fleisch}</td>
                    <td>${knochen_tab} ${unit_rfk}</td>
                    <td>${leber_tab} ${unit_inn}</td>
                    <td>${leber_tab} ${unit_inn}</td>
                  </tr>
                </tbody>
              </table>
                `;

      /*var pie_food = AmCharts.makeChart("foodamount",
				{
					"type": "pie",
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]] Kilogramm </b> ([[percents]]%)</span>",
					"titleField": "type",
					"valueField": "kilo",
					"fontSize": 12,
					"theme": "default",
					"allLabels": [],
					"balloon": {},
					"titles": [],
          "marginTop": 0,
					"dataProvider": [
						{
							"type": "Muskelfleisch",
							"kilo": fleisch
						},
						{
							"type": "Rohe fleischige Knochen",
							"kilo": knochen
						},
						{
							"type": "Leber",
							"kilo": leber
						},
						{
							"type": "Milz, Niere, etc.",
							"kilo": leber
						}
					]
				}
			);*/

      /*if(pie_food !== null) {
        pie_food.destroy();
      }*/

      var food_data = [
        {"label": "Fleisch",
				"value": parseFloat(fleisch),
				"color": "#2383c1"},
				{
				"label": "Rohe fleischige Knochen",
				"value": parseFloat(knochen),
				"color": "#64a61f"
			  },
			  {
				"label": "Leber",
				"value": parseFloat(leber),
				"color": "#7b6788"
			},
			{
				"label": "Andere Innereien",
				"value": parseFloat(leber),
				"color": "#a05c56"
			}
    ];

    //pie_food.updateProp("data.content", food_data);
  //return pie_food;
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

function pie_destroy() {
  if(pie_food !== null) {
          pie_food.redraw();
  }
}

/*var food_data_init = [
        {"label": "Fleisch",
				"value": 10 * 0.8 * 0.03,
				"color": "#2383c1"},
				{
				"label": "Rohe fleischige Knochen",
				"value": 10 * 0.1 * 0.03,
				"color": "#64a61f"
			  },
			  {
				"label": "Leber",
				"value": 10 * 0.05 * 0.03,
				"color": "#7b6788"
			},
			{
				"label": "Andere Innereien",
				"value": 10 * 0.05 * 0.03,
				"color": "#a05c56"
			}
    ];

var pie_food = new d3pie("foodamount", {
	"header": {
		"title": {
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasHeight": 400,
		"canvasWidth": 600,
		"pieInnerRadius": "71%",
		"pieOuterRadius": "74%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": food_data_init
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "back",
			"speed": 400,
			"size": 20
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		},
		"canvasPadding": {
			"top": 0,
			"right": 0,
			"bottom": 0,
			"left": 0
		}
	},
	"callbacks": {}
});*/