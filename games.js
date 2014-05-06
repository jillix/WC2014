// Dependencies
var fs = require ("fs");

// Read games text file and split it by new line
var textGames = fs.readFileSync ("./textres/games").toString ();
var lines = textGames.split ("\n");

var gamesByDate = {};

// Process lines
for (var i = 0; i < lines.length; ++i) {
    var cLine = lines[i];
    debugger;
    if (!cLine) {
        console.log ("Skipping empty line");
        continue;
    }

    // TODO Trim each split. It may be required in the future. Not now.
    var lineSplits = cLine.split ("|");
    var thisDate = gamesByDate[lineSplits[0]] = [];

    // Each game in this date
    for (var ii = 1; ii < lineSplits.length; ++ii) {

        // get teams
        var cLineSplit = lineSplits[ii];
        var teams = cLineSplit.split (" - ");

        // and push them
        thisDate.push([
            teams[0],
            teams[1]
        ]);
    }
}

// output
console.log (JSON.stringify (gamesByDate, null, 4));
