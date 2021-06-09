import PlayerModel from "./PlayerData/PlayerModel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    countCoin: cc.Label = null;

    playerModel: PlayerModel = null;

    onEnable(){
        this.playerModel = PlayerModel.getInstance();
        this.node.on('attendance', this.updateCoin, this);
        this.renderUI();
    }
    renderUI(){
        this.playerModel.getAllData();
        this.countCoin.string = this.playerModel.coint + "";
    }
    updateCoin(){
        this.countCoin.string = this.playerModel.coint + "";
    }
}
