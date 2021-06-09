import DataOffline from "../Common/DataOffline";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AttendanceModel {

    private static instance: AttendanceModel;

    private constructor() { }

    public static getInstance(): AttendanceModel {
        if (!AttendanceModel.instance) {
            AttendanceModel.instance = new AttendanceModel();
        }
        this.instance.getDataLocal();
        return AttendanceModel.instance;
    }
    public keyData = "AttendanceModel";
    public lastDateAttendance = "0";

    public DAY_1 = {
        idAttendance: 1,
        tileItem: "Ngày 1",
        countAmount: 1000,
        statusAttendance: 1
    }
    public DAY_2 = {
        idAttendance: 2,
        tileItem: "Ngày 2",
        countAmount: 1000,
        statusAttendance: 1
    }
    public DAY_3 = {
        idAttendance: 3,
        tileItem: "Ngày 3",
        countAmount: 1000,
        statusAttendance: 1
    }
    public DAY_4 = {
        idAttendance: 4,
        tileItem: "Ngày 4",
        countAmount: 1000,
        statusAttendance: 1
    }
    public DAY_5 = {
        idAttendance: 5,
        tileItem: "Ngày 5",
        countAmount: 1000,
        statusAttendance: 1
    }
    public DAY_6 = {
        idAttendance: 6,
        tileItem: "Ngày 6",
        countAmount: 1000,
        statusAttendance: 1
    }
    public DAY_7 = {
        idAttendance: 7,
        tileItem: "Ngày 7",
        countAmount: 1000,
        statusAttendance: 1
    }
    public getAllData() {
        let data = {
            lastDateAttendance: this.lastDateAttendance,
            listAttendance: [
                this.DAY_1,
                this.DAY_2,
                this.DAY_3,
                this.DAY_4,
                this.DAY_5,
                this.DAY_6,
                this.DAY_7
            ]
        }
        return data;
    }
    public canAttendance() {
        let data = this.getAllData();
        let check = false;
        if (data && data.listAttendance) {
            data.listAttendance.forEach((element, pos) => {
                if (element.statusAttendance == 2 || element.statusAttendance == 3) {
                    check = true;
                }
            });
        }
        return check;
    }
    public getTime() {
        let date = new Date();
        let keyTime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate();
        return keyTime;
    }
    public caculatorAttendance() {
        let data = this.getAllData();
        let keyPos = 0;
        if (data && data.listAttendance) {
            data.listAttendance.forEach((element, pos) => {
                if (element.statusAttendance == 3) {
                    if (keyPos == 0) {
                        keyPos = pos;
                    }
                }
            });
        }
        if (Number(this.lastDateAttendance) != 0 && Number(this.getTime()) > Number(this.lastDateAttendance)) {
            if (keyPos != 0) {
                data.listAttendance[keyPos].statusAttendance = 2;
                this.saveData();
            }
        }

    }
    public attendance(itemAtendance) {
        let data = this.getAllData();
        if (data && data.listAttendance) {
            data.listAttendance.forEach(element => {
                if (element.idAttendance == itemAtendance.idAttendance) {
                    element.statusAttendance = 1;
                    this.lastDateAttendance = this.getTime();
                    this.saveData();
                }
            });
        }
    }
    public saveData() {
        DataOffline.saveData(this.keyData, this.getAllData());
    }
    public getDataLocal() {
        let data = DataOffline.readData(this.keyData);
        if (data && data != null) {
            this.lastDateAttendance = data.lastDateAttendance;
            data.listAttendance.forEach(element => {
                switch (element.idAttendance) {
                    case 1:
                        this.DAY_1 = element;
                        break;
                    case 2:
                        this.DAY_2 = element;
                        break;
                    case 3:
                        this.DAY_3 = element;
                        break;
                    case 4:
                        this.DAY_4 = element;
                        break;
                    case 5:
                        this.DAY_5 = element;
                        break;
                    case 6:
                        this.DAY_6 = element;
                        break;
                    case 7:
                        this.DAY_7 = element;
                        break;
                }
            });
        } else {
            this.initDataDefault();
        }
    }
    public initDataDefault() {
        this.lastDateAttendance = "0";
        this.DAY_1 = {
            idAttendance: 1,
            tileItem: "Ngày 1",
            countAmount: 1000,
            statusAttendance: 2
        }
        this.DAY_2 = {
            idAttendance: 2,
            tileItem: "Ngày 2",
            countAmount: 1500,
            statusAttendance: 3
        }
        this.DAY_3 = {
            idAttendance: 3,
            tileItem: "Ngày 3",
            countAmount: 3000,
            statusAttendance: 3
        }
        this.DAY_4 = {
            idAttendance: 4,
            tileItem: "Ngày 4",
            countAmount: 5000,
            statusAttendance: 3
        }
        this.DAY_5 = {
            idAttendance: 5,
            tileItem: "Ngày 5",
            countAmount: 10000,
            statusAttendance: 3
        }
        this.DAY_6 = {
            idAttendance: 6,
            tileItem: "Ngày 6",
            countAmount: 15000,
            statusAttendance: 3
        }
        this.DAY_7 = {
            idAttendance: 7,
            tileItem: "Ngày 7",
            countAmount: 25000,
            statusAttendance: 3
        }
        this.saveData();
    }
}
