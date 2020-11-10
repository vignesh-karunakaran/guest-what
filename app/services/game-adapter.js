import Service from '@ember/service';

export default class GameAdapterService extends Service {
  isHost = false;
  isPlayer = false;
  switchOnAdminConsole = false;
}
