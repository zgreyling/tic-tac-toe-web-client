import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';

export default class GameService extends Service {
  @tracked
  gameData = null;

  load(gameData) {
    this.gameData = gameData;
  }

  async create() {
    const oldGameId = this.gameData.id;
    const response = await axios.post(`http://localhost:3000/api/v1/games/`);
    this.gameData = response.data;
    axios.delete(`http://localhost:3000/api/v1/games/${oldGameId}`);
  }

  async update(square) {
    square.value = this.gameData.current_player;
    const response = await axios.put(
      `http://localhost:3000/api/v1/squares/${square.id}`,
      square
    );
    this.gameData = response.data;
  }
}
