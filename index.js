// dependencies
var Moment = require ("moment");

// get json values
var fifaCoefficients = require ("./jsonres/fifa_coefficients")
  , teams = require ("./jsonres/teams")
  , teamsWithCoefficients = {}
  ;

// add fifa coefficient for each team
for (var i = 0; i < teams.length; ++i) {

    var cTeam = teams[i];

    if (!fifaCoefficients[cTeam]) {
        console.warn("Missing FIFA coefficient for team: " + cTeam);
    }

    teamsWithCoefficients[cTeam] = fifaCoefficients[cTeam]
}


// compute min and max coefficients
var max = -Infinity
  , min = Infinity
  ;

for (var team in teamsWithCoefficients) {

    var coefficient = teamsWithCoefficients[team];

    if (coefficient > max) {
        max = teamsWithCoefficients[team];
    }

    if (coefficient < min) {
        min = teamsWithCoefficients[team];
    }
}

// compute x classes
var diff = max - min
  , classRange = diff / 7
  , countryClasses = {}
  ;

// compute country classes
for (var team in teamsWithCoefficients) {
    countryClasses[team] = Math.round ((teamsWithCoefficients[team] - min) / classRange) + 1;
}

// output country classes
// console.log(JSON.stringify(countryClasses, null, 4));

// get matches
var finalArray = require ("./jsonres/matches.json");

// update match objects
for (var i = 0; i < finalArray.length; ++i) {
    var cMatch = finalArray[i];

    // kickoff date
    cMatch.kickoff = Moment(cMatch.kickoff, "DD MMM YYYY HH:mm")
                        .add("hours", 3)
                        .toDate()
                        .getTime()
                        .toString();

    if (typeof cMatch.teams[0] === "string") {
        continue;
    }

    // get team names
    var team1 = teams[cMatch.teams[0]]
      , team2 = teams[cMatch.teams[1]]
      , xClass = 8 - Math.abs(
            countryClasses[team1]
          - countryClasses[team2]
        )
      ;

    // teams
    cMatch.teams = [
        team1.toLowerCase()
      , team2.toLowerCase()
    ];

    // x class
    cMatch.x = xClass;
};

// sort by date
finalArray.sort(function (a, b) {
     return (a.kickoff > b.kickoff) ? 1 : -1
});


if (process.argv[2] === "uglify") {
    console.log (JSON.stringify (finalArray));
    process.exit (0);
}

// output
console.log (JSON.stringify (finalArray, null, 4));
