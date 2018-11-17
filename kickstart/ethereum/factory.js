import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xDc30F53Ccc7B3f150f90d2ddf71F0D5826904Fd4'
);

export default instance;
