const simulateButton = document.querySelector('.sim-btn');
const finalScore = document.querySelector('.final-score');
const scoreboard = document.querySelector('.scoreboard')
const awayScore = document.querySelector('#away-score');
const homeScore = document.querySelector('#home-score');
const awaySelect = document.querySelector('#away-team');
const homeSelect = document.querySelector('#home-team');
const otLabel = document.querySelector('#OTlabel');

const awayLogo = document.querySelector('#away-logo');
const homeLogo = document.querySelector('#home-logo');

        
window.onload = function() {
    if (finalScore) {
      finalScore.style.display = 'none';
      scoreboard.style.display = 'none';
      awayLogo.style.display = 'none';
      homeLogo.style.display = 'none';
    }
};

let array = [];

fetch('nfl-offensive-stats.csv')
    .then(response => response.text())
    .then(data => {
        const lines = data.split("\n");
        array = lines.map(line => line.split(","));

        const nflTeams = {
            teams: [
                {
                    id: 1,
                    name: 'ARZ',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-arizona-cardinals-team-logo-2.png',
                    bg: '#efefef',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB1", "RB2", "WR1", "WR2", "WR3", "WR4", "WR5", "TE1", "TE2"]
                },
                {
                    id: 2,
                    name: 'ATL',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-atlanta-falcons-team-logo-2.png',
                    bg: '#121212',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 3,
                    name: 'BAL',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-baltimore-ravens-team-logo-2.png',
                    bg: '#9E7C0C',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 4,
                    name: 'BUF',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-buffalo-bills-team-logo-2.png',
                    bg: '#C60C30',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 5,
                    name: 'CAR',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-carolina-panthers-team-logo-2.png',
                    bg: '#BFC0BF',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 6,
                    name: 'CHI',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-chicago-bears-team-logo-2.png',
                    bg: '#C83803',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 7,
                    name: 'CIN',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-cincinnati-bengals-team-logo.png',
                    bg: '#FB4F14',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 8,
                    name: 'CLE',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-cleveland-browns-team-logo-2.png',
                    bg: '#311D00',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 9,
                    name: 'DAL',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-dallas-cowboys-team-logo-2.png',
                    bg: '#7F9695',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 10,
                    name: 'DEN',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-denver-broncos-team-logo-2.png',
                    bg: '#FB4F14',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 11,
                    name: 'DET',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-detroit-lions-team-logo-2.png',
                    bg: '#0076B6',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 12,
                    name: 'GB',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-green-bay-packers-team-logo-2.png',
                    bg: '#203731',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 13,
                    name: 'HOU',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-houston-texans-team-logo-2.png',
                    bg: '#A71930',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 14,
                    name: 'IND',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-indianapolis-colts-team-logo-2.png',
                    bg: '#A2AAAD',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 15,
                    name: 'JAX',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-jacksonville-jaguars-team-logo-2.png',
                    bg: '#006778',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 16,
                    name: 'KC',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-kansas-city-chiefs-team-logo-2.png',
                    bg: '#E31837',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 17,
                    name: 'LV',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-oakland-raiders-team-logo.png',
                    bg: '#A5ACAF',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 18,
                    name: 'LAC',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-los-angeles-chargers-team-logo-2.png',
                    bg: '#0080C6',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 19,
                    name: 'LAR',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-los-angeles-rams-team-logo-2.png',
                    bg: '#003594',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 20,
                    name: 'MIA',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-miami-dolphins-team-logo-2.png',
                    bg: '#efefef',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 21,
                    name: 'MIN',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-minnesota-vikings-team-logo-2.png',
                    bg: '#4F2683',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 22,
                    name: 'NE',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-new-england-patriots-team-logo-2.png',
                    bg: '#B0B7BC',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 23,
                    name: 'NO',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-new-orleans-saints-team-logo-2.png',
                    bg: '#121212',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 24,
                    name: 'NYG',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-new-york-giants-team-logo-2.png',
                    bg: '#efefef',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 25,
                    name: 'NYJ',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-new-york-jets-team-logo.png',
                    bg: '#125740',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 26,
                    name: 'PHI',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-philadelphia-eagles-team-logo-2.png',
                    bg: '#004C54',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 27,
                    name: 'PIT',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-pittsburgh-steelers-team-logo-2.png',
                    bg: '#121212',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 28,
                    name: 'SF',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-san-francisco-49ers-team-logo-2.png',
                    bg: '#AA0000',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 29,
                    name: 'SEA',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-seattle-seahawks-team-logo-2.png',
                    bg: '#69BE28',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 30,
                    name: 'TB',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-tampa-bay-buccaneers-team-logo-2.png',
                    bg: '#34302B',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 31,
                    name: 'TEN',
                    img: 'https://loodibee.com/wp-content/uploads/nfl-tennessee-titans-team-logo-2.png',
                    bg: '#4B92DB',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
                {
                    id: 32,
                    name: 'WAS',
                    img: 'https://loodibee.com/wp-content/uploads/washington-commanders-logo.png',
                    bg: '#5A1414',
                    off: 0,
                    def: 0,
                    players: ["QB", "RB", "RB", "WR", "WR", "WR", "WR", "WR", "TE", "TE"]
                },
            ]
        }

        for(let i = 1; i <= 32; i++) {
            const team = nflTeams.teams.find(team => team.id === i);
            team.off = array[i][16] - 5;
            team.def = array[i][24] + 5;
        }

        let awayPoints = 0;
        let homePoints = 0;
        
        simulateButton.addEventListener('click', () => {
            if (finalScore.style.display === 'none') {
              finalScore.style.display = 'block'; // Show the finalScore div
            }
            console.clear();
            simulateGame(awaySelect.value, homeSelect.value);
            awayScore.textContent = `${awayPoints}`;
            homeScore.textContent = `${homePoints}`;
        });
        
        function simulateGame(away, home) {
            otLabel.style.display = 'none';
            awayPoints = 0;
            homePoints = 0;
        
            let awayScoreBoard = [0, 0, 0, 0, 0];
            let homeScoreBoard = [0, 0, 0, 0, 0];
        
            const awayTeam = nflTeams.teams.find(team => team.name === away);
            const homeTeam = nflTeams.teams.find(team => team.name === home);
        
            let awayPointsPerQ = 0;
            let homePointsPerQ = 0;
        
            for(let q = 0; q < 4; q++) {
                console.log(`--QUARTER ${q+1}--`)
                awayPointsPerQ = 0;
                homePointsPerQ = 0;
                for(let d = 0; d < 3; d++) {
                    awayDrive = scoring(awayTeam.off, homeTeam.def, GRN(), GRN(), q, (homePoints - awayPoints));
                    homeDrive = scoring(homeTeam.off, awayTeam.def, GRN(), GRN(), q, (awayPoints - homePoints));
                    awayPoints += awayDrive;
                    if(awayDrive > 0) {
                        console.log(`${awayPoints} - ${homePoints}`);
                    }
                    homePoints += homeDrive;
                    if(homeDrive > 0) {
                        console.log(`${awayPoints} - ${homePoints}`);
                    }
                    awayPointsPerQ += awayDrive;
                    homePointsPerQ += homeDrive;
                }
        
                awayScoreBoard[q] = awayPointsPerQ;
                homeScoreBoard[q] = homePointsPerQ;
            }

            if(awayPoints === homePoints) {
                otLabel.style.display = 'inline';
                for(let d = 0; d < 2; d++) {
                    awayDrive = scoring(awayTeam.off, homeTeam.def, GRN(), GRN(), 4, (homePoints - awayPoints));
                    if(awayDrive > 0) {
                        if(awayDrive === 7 || awayDrive === 6 || awayDrive === 8) {
                            awayPoints += 6;
                            awayScoreBoard[4] = 6;
                        } else {
                            awayPoints += 3;
                            awayScoreBoard[4] = 3;
                        }
                        break;
                    }
                    homeDrive = scoring(homeTeam.off, awayTeam.def, GRN(), GRN(), 4, (awayPoints - homePoints));
                    if(homeDrive > 0) {
                        if(homeDrive === 7 || homeDrive === 6 || homeDrive === 8) {
                            homePoints += 6;
                            homeScoreBoard[4] = 6;
                        } else {
                            homePoints += 3;
                            homeScoreBoard[4] = 3;
                        }
                        break;
                    }
                }
            }
        
            awayLogo.src = awayTeam.img;
            homeLogo.src = homeTeam.img;

            scoreboard.style.display = 'flex';
        
            awayLogo.style.display = 'inline';
            homeLogo.style.display = 'inline';
        
            document.querySelector('#aq1').textContent = awayScoreBoard[0];
            document.querySelector('#aq2').textContent = awayScoreBoard[1];
            document.querySelector('#aq3').textContent = awayScoreBoard[2];
            document.querySelector('#aq4').textContent = awayScoreBoard[3];
            document.querySelector('#aqOT').textContent = awayScoreBoard[4];
        
            document.querySelector('#hq1').textContent = homeScoreBoard[0];
            document.querySelector('#hq2').textContent = homeScoreBoard[1];
            document.querySelector('#hq3').textContent = homeScoreBoard[2];
            document.querySelector('#hq4').textContent = homeScoreBoard[3];
            document.querySelector('#hqOT').textContent = homeScoreBoard[4]
        
            document.querySelector('#away-label').textContent = awayTeam.name;
            document.querySelector('#home-label').textContent = homeTeam.name;
        }
        
        function scoring(onOff, onDeff, x, fg, q, diff) {
            let score = 0;
            let twoPt = false;
            let pct = (onOff - onDeff) + 33;
        
            if(q > 1) {
                if(diff % 8 === 0 || diff % 11 === 0) {
                    twoPt = true;
                }
            }
        
            if(x < pct*.57) { 
                score += 6; 
            }
            else if(x < pct) { 
                score += 3; 
            }
            else { 
                return 0 
            };
        
            if(twoPt === true && score === 6 && diff > 0) {
                if(fg > 50) {
                    score += 2;
                }
            } else if(fg > 7 && score === 6) {
                score++;
            }
        
            return score;
        }
        
        function GRN() {
            return Math.floor(Math.random() * 100) + 1;
        }

    })
    .catch(error => console.error("An error occured: ", error));

