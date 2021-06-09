
import AttendanceModel from "./AttendanceModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AttendanceController extends cc.Component {

    @property(cc.Node)
    layout: cc.Node = null;
    @property(cc.Prefab)
    itemAttendance: cc.Prefab = null;
    attendanceModel: AttendanceModel = null;

    onEnable(){
        this.renderDataAttendance();
        this.node.on('attendance', this.renderDataAttendance, this);

    }
    renderDataAttendance() {
        this.layout.removeAllChildren();
        this.attendanceModel = AttendanceModel.getInstance();
        let dataAttendance = this.attendanceModel.getAllData();
        this.attendanceModel.caculatorAttendance();
        if(dataAttendance && dataAttendance.listAttendance){
            dataAttendance.listAttendance.forEach(element => {
                let newAttendance = cc.instantiate(this.itemAttendance);
                if(newAttendance){
                    this.layout.addChild(newAttendance);
                    let itemScript = newAttendance.getComponent("itemAttendance");
                    if(itemScript){
                        itemScript.renderData(element);
                    }
                }
            });
        }
    }
}
