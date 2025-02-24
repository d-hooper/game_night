import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersServices.js";


export class PlayersController {

  constructor() {
    this.drawPlayers()
  }

  scorePoint(playerName) {
    playersService.changePointTotal(playerName, 1)
    this.drawPlayers()
  }

  losePoint(playerName) {
    playersService.changePointTotal(playerName, -1)
    this.drawPlayers()
  }

  addPlayer(playerName) {
    const players = AppState.players
    event?.preventDefault()
    playersService.addPlayer(playerName)
    this.drawPlayers()
  }

  drawPlayers() {
    const players = AppState.players
    let playerSectionContent = ''
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      playerSectionContent += player.PlayerTemplateCard
    }
    const playerSectionElm = document.getElementById('playersSection')
    playerSectionElm.innerHTML = playerSectionContent
  }
}