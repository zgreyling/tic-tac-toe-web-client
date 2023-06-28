import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BoardComponent extends Component {
  @service game;

  @action
  async selectSquare(square) {
    if (this.game.gameData.game_over === false && !square.value) {
      delete square.square;
      await this.game.update(square);
    }
  }
}
