import Route from '@ember/routing/route';
import axios from 'axios';

export default class GameRoute extends Route {
  async model() {
    let response = await axios.get('http://localhost:3000/api/v1/games/');
    if (!response.data || !response.data?.length) {
      response = await axios.post(`http://localhost:3000/api/v1/games/`);
      return response.data;
    } else return response.data[0];
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.game.load(model);
  }
}
