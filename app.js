const app = new Vue({
    el: "#vue-app",
    data: {
        contacts,
        activeIndex: null,
        inputText: ""
    },
    methods: {
        mounted() {
            console.log(activeIndex);
        },
        getSrc(avt) {
            return "img/avatar" + avt.avatar + ".jpg";
        },
        setActive(i) {
            this.activeIndex = i;
        },
        status(msg) {
            if (msg.status === "sent") {
                return "msg-sent";
            }
            else {
                return "msg-received";
            }
        },
        sendMsg(msg) {
            msg.push({
                date: new Date().toLocaleString(),
                message: this.inputText,
                status: "sent"
            })
            setTimeout(function () {
                msg.push({
                    date: new Date().toLocaleString(),
                    message: "ok",
                    status: "received"
                })
            }, 3000)
            this.inputText = "";
        }
    }
})