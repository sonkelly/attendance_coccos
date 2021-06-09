import DataOffline from "../Common/DataOffline";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerModel {

    private static instance: PlayerModel;

    private constructor() { }

    public static getInstance(): PlayerModel {
        if (!PlayerModel.instance) {
            PlayerModel.instance = new PlayerModel();
        }
        this.instance.getDataLocal();
        return PlayerModel.instance;
    }
    public keyData = "PlayerModel";
    public coint = 0;

    public getAllData() {
        let data = this.coint
        return data;
    }
    public saveData() {
        DataOffline.saveData(this.keyData, this.getAllData());
    }
    public getDataLocal() {
        let data = DataOffline.readData(this.keyData);
        if (data && data != null) {
            this.coint = data;
        } else {
            this.initDataDefault();
        }
    }
    public initDataDefault() {
        this.coint = 50000;
        this.saveData();
    }
}
