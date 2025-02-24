import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"


class PlayersService {
  constructor() {

  }

  changePointTotal(playerName, amount) {
    const players = AppState.players
    const foundPlayer = players.find(p => p.name == playerName)
    foundPlayer.score += amount
    if (foundPlayer.score <= 0) foundPlayer.score = 0
  }

  addPlayer(playerName) {
    // take the name, and make a new player, and then add that player to the AppState, then draw
    const newPlayer = new Player(playerName)
    const players = AppState.players
    players.push(newPlayer)
    console.log(players);
  }
}

export const playersService = new PlayersService()