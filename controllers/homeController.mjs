import UAParser from "ua-parser-js";
import dateFormat from "dateformat";

const ipList = {
    "192.168.120.154": "なかそね つよし"
}

export default {
    home: (req, res) => {
        res.render("index", {title: "接続確認OK"});
    },

    complete: (req, res) => {
        const ua = UAParser(req.headers["user-agent"]);
        const limitDate = new Date();
        limitDate.setDate(limitDate.getDate() + 14);
        const limit = dateFormat(limitDate, "yyyy年mm月dd日")
        let name = "未登録";
        if (ipList.hasOwnProperty(req.ip)) {
            name = ipList[req.ip];
        }
        res.render("completed", {title: "完了ページ", name, limit, req, ua})
    }
}