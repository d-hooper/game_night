import { AppState } from "../AppState.js"


class PlayersService {
  constructor() {

  }

  changePointTotal(playerName, amount) {
    const players = AppState.players
    const foundPlayer = players.find(p => p.name == playerName)
    foundPlayer.score += amount
    console.log(foundPlayer, "-", foundPlayer.score) 
  }
}

export const playersService = new PlayersService()