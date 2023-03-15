import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xfb8b15A2a3CdB5d510C75605d9B77607128f390F'
);

export default instance;