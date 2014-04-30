var a = {
    "Spain": 1460
  , "Germany": 1340
  , "Portugal":        1245
  , "Colombia":        1186
  , "Uruguay": 1181
  , "Argentina":       1174
  , "razil":  1174
  , "Switzerland":     1161
  , "Italy":   1115
  , "Greece":  1082
  , "England": 1043
  , "Belgium": 1039
  , "USA":     1015
  , "Chile":   1011
  , "Netherlands":     967
  , "France":  935
  , "Ukraine": 913
  , "Russia":  903
  , "Mexico":  876
  , "Croatia": 871
  , "Côte d'Ivoire":   830
  , "Scotland":        825
  , "Denmark": 819
  , "Egypt":   798
  , "Bosnia and Herzegovina":  795
  , "Sweden":  795
  , "Algeria": 795
  , "Ecuador": 790
  , "Slovenia":        787
  , "Serbia":  759
  , "Romania": 756
  , "Honduras":        754
  , "Armenia": 750
  , "Costa Rica":      744
  , "Panama":  739
  , "Czech Republic":  731
  , "Iran":    715
  , "Ghana":   713
  , "Turkey":  711
  , "Austria": 673
  , "Venezuela":       670
  , "Cape Verde Islands":      665
  , "Peru":    653
  , "Hungary": 623
  , "Nigeria": 620
  , "Slovakia":        616
  , "Japan":   613
  , "Wales":   613
  , "Tunisia": 597
  , "Cameroon":        583
  , "Guinea":  580
  , "Finland": 578
  , "Uzbekistan":      577
  , "Paraguay":        555
  , "Montenegro":      555
  , "Korea Republic":  551
  , "Norway":  551
  , "Iceland": 546
  , "Mali":    545
  , "Australia":       545
  , "Burkina Faso":     528
  , "Burkina Faso":    528
  , "Libya":   522
  , "Senegal": 511
  , "Jordan":  510
  , "Republic of Ireland":     504
  , "South Africa":    500
  , "United Arab Emirates":    499
  , "Bolivia": 497
  , "El Salvador":     488
  , "Albania": 486
  , "Sierra Leone":    484
  , "Poland":  479
  , "Bulgaria":        460
  , "Zambia":  456
  , "Saudi Arabia":    455
  , "Trinidad and Tobago":     454
  , "Morocco": 454
  , "Israel":  450
  , "Haiti":   446
  , "FYR Macedonia":   443
  , "Oman":    418
  , "Jamaica": 414
  , "Belarus": 404
  , "Northern Ireland":        400
  , "Azerbaijan":      398
  , "Uganda":  395
  , "Gabon":   386
  , "Congo DR":        380
  , "Togo":    374
  , "Cuba":    371
  , "Botswana":        369
};

var b = [
    "Brazil"
  , "Argentina"
  , "Colombia"
  , "Uruguay"
  , "Belgium"
  , "Germany"
  , "Spain"
  , "Switzerland"
  , "Algeria"
  , "Cameroon"
  , "Ivory Coast"
  , "Ghana"
  , "Nigeria"
  , "Chile"
  , "Ecuador"
  , "Australia"
  , "Japan"
  , "Iran"
  , "South Korea"
  , "Costa Rica"
  , "Honduras"
  , "Mexico"
  , "United States"
  , "Bosnia and Herzegovina"
  , "Croatia"
  , "England"
  , "France"
  , "Greece"
  , "Italy"
  , "Netherlands"
  , "Portugal"
  , "Russia"
];

var c = {};
for (var i = 0; i < b.length; ++i) {
    if (!a[b[i]]) {
        console.warn("Missing " + b[i]);
    }
    c[b[i]] = a[b[i]];
}

/*********************************
 * The team points were computed *
 *********************************/

var all = c
  , max = -Infinity
  , min = Infinity
  , result = []
  ;

// each team
for (var team in all) {

    if (all[team] > max) {
        max = all[team];
    }

    if (all[team] < min) {
        min = all[team];
    }
}

// calculate difference
var diff = max - min
  , classRange = diff / 7
  , countryClasses = {}
  ;

// compute country classes
for (var team in all) {
    countryClasses[team] = Math.round ((all[team] - min) / classRange) + 1;
}

// output country classes
console.log(JSON.stringify(countryClasses, null, 4));

//Math.round((900 - min)/classRange) + 1
