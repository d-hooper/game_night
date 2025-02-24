

export class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }

  get PlayerTemplateCard() {
    return /*html*/ `
  <div class="col-md-6">
    <div class="bg-light text-dark fs-3 rounded-4 p-2 m-2 d-flex justify-content-between align-content-center border border-warning">
      <p class="mb-0">${this.name}</p>
      <div class="d-flex gap-2">
        <span onclick="app.PlayersController.losePoint('${this.name}')" class="mdi mdi-minus bg-codeworks text-light rounded-pill" role="button" title="Subtract this player's score"></span>
        <p class="mb-0" title="${this.name}'s score" >${this.score}</p>
        <span onclick="app.PlayersController.scorePoint('${this.name}')" class="mdi mdi-plus bg-codeworks text-light rounded-pill" role="button" title="Add to this player's score"></span>
      </div>
    </div>
  </div>`

  }

}