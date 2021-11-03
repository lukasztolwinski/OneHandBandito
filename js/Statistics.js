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
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        return [games, wins, losses];
    }
}

// const stats = new Statistics;