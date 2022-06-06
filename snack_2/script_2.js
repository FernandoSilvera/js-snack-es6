// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let footballTeams = [
  {
    id: "Liverpool",
    points: 0,
    fouls: 0,
  },
  {
    id: "Manchester City",
    points: 0,
    fouls: 0,
  },
  {
    id: "Manchester United",
    points: 0,
    fouls: 0,
  },
  {
    id: "Arsenal",
    points: 0,
    fouls: 0,
  },
  {
    id: "Chelsea",
    points: 0,
    fouls: 0,
  },
  {
    id: "Tottenham",
    points: 0,
    fouls: 0,
  },
  {
    id: "Brighton",
    points: 0,
    fouls: 0,
  },
];

let footballTeamsTwo = [];

// Create random points and fouls for each team
for (let i = 0; i < footballTeams.length; i++) {
  const footballTeam = footballTeams[i];
  const rndPoints = Math.ceil(Math.random() * 100);
  const rndFouls = Math.ceil(Math.random() * 400);

  footballTeam.points = rndPoints;
  footballTeam.fouls = rndFouls;
}

// Create new array with only team id and fouls
for (let i = 0; i < footballTeams.length; i++) {
  const footballTeam = footballTeams[i];
  const {points, ...rest} = footballTeam;
  
  footballTeamsTwo.push(rest);
}

console.table(footballTeamsTwo);