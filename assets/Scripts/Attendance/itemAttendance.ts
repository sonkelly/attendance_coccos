import PlayerModel from "../PlayerData/PlayerModel";
import AttendanceModel from "./AttendanceModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class itemAttendance extends cc.Component {

    @property(cc.Label)
    title: cc.Label = null;
    @property(cc.Label)
    count: cc.Label = null;
    @property(cc.Node)
    iconActive: cc.Node = null;
    @property(cc.Sprite)
    bg: cc.Sprite = null;
    @property(cc.SpriteAtlas)
    atlas: cc.SpriteAtlas = null;
    playerModel: PlayerModel = null;
    attendanceModel: AttendanceModel = null;
    dataItem = null;

    renderData(data) {
        this.playerModel = PlayerModel.getInstance();
        this.attendanceModel = AttendanceModel.getInstance();
        this.dataItem = data;
        this.title.string = data.tileItem + "";
        this.count.string = data.countAmount + "";
        if (data.statusAttendance == 1) {
            let sprite = this.atlas.getSpriteFrame("img_zb_bg1");
            if (sprite) {
                this.bg.spriteFrame = sprite;
            }
            this.iconActive.active = true;
            this.node.getComponent(cc.Button).interactable = false;
        } else if (data.statusAttendance == 2) {
            let sprite = this.atlas.getSpriteFrame("img_zb_bg2");
            if (sprite) {
                this.bg.spriteFrame = sprite;
            }
            this.iconActive.active = false;
            this.node.getComponent(cc.Button).interactable = true;
        } else if (data.statusAttendance == 3) {
            let sprite = this.atlas.getSpriteFrame("img_zb_bg3");
            if (sprite) {
                this.bg.spriteFrame = sprite;
            }
            this.iconActive.active = false;
            this.node.getComponent(cc.Button).interactable = false;
        }
    }
    itemOnclick(){
        this.playerModel.coint += this.dataItem.countAmount;
        this.playerModel.saveData();
        this.attendanceModel.attendance(this.dataItem);
        this.node.dispatchEvent( new cc.Event.EventCustom('attendance', true) );
    }
}
