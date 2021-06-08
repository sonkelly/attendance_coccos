// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import AttendanceModel from "./AttendanceModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    layout: cc.Node = null;
    @property(cc.Prefab)
    itemAttendance: cc.Prefab = null;
    attendanceModel: AttendanceModel = null;

    reanderDataAttendance() {
        this.attendanceModel = AttendanceModel.getInstance();
        let dataAttendance = this.attendanceModel.getAllData();
    }
}
