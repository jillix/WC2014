// all teams
var all = {
        "Australia": 545
      , "Iran": 715
      , "Japan": 613
      , "Algeria": 795
      , "Cameroon": 583
      , "Ghana": 713
      , "Nigeria": 620
      , "Costa Rica": 744
      , "Honduras": 754
      , "Mexico": 876
      , "Argentina": 1174
      , "Brazil": 1174
      , "Chile": 1011
      , "Colombia": 1186
      , "Ecuador": 790
      , "Uruguay": 1181
      , "Belgium": 1039
      , "Bosnia and Herzegovina": 795
      , "Croatia": 871
      , "England": 1043
      , "France": 935
      , "Germany": 1340
      , "Greece": 1082
      , "Italy": 1115
      , "Netherlands": 967
      , "Portugal": 1245
      , "Russia": 903
      , "Spain": 1460
      , "Switzerland": 1161
    }
  , max = -Infinity
  , min = Infinity
  , result = []
  ;

// each team
for (var country in all) {

    if (all[country] > max) {
        max = all[country];
    }

    if (all[country] < min) {
        min = all[country];
    }
}

// calculate difference
var diff = max - min
  , classRange = diff / 7
  , countryClasses = {}
  ;

// compute country classes
for (var country in all) {
    countryClasses[country] = Math.round ((all[country] - min) / classRange) + 1;
}

// output country classes
console.log(JSON.stringify(countryClasses, null, 4));

//Math.round((900 - min)/classRange) + 1
