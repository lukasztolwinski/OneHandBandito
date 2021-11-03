class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatiscits(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult);
    }

    showGamesStatistics() {
        let games = this.gameResults.length;
        let wins = ;
        let losses = ;
        return [games, ]
    }
}

const stats = new Statistics;