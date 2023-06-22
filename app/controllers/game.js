import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GameController extends Controller {
  @service game;

  @action
  async newGame() {
    await this.game.create();
  }
}
