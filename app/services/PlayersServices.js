import { AppState } from "../AppState.js"


class PlayersService {
  constructor() {

  }

  changePointTotal(playerName, amount) {
    const players = AppState.players
    const foundPlayer = players.find(p => p.name == playerName)
    foundPlayer.score += amount
    if (foundPlayer.score <= 0) foundPlayer.score = 0
  }
}

export const playersService = new PlayersService()