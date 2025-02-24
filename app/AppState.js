import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  players = [
    new Player('Ricky'),
    new Player('Cindy'),
    new Player('Jimmy'),
    new Player('Lindy')
  ]


}




export const AppState = createObservableProxy(new ObservableAppState())