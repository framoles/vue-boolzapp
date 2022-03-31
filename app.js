const app = new Vue({
    el: "#vue-app",
    data: {
        contacts,
        activeIndex: null,
        inputText: "",
        search: ""
    },
    computed: {
        filterContact() {
            if (this.search.length > 0) {
                return this.contacts.filter((element) => {
                    return element.name.toLowerCase().includes(this.search.toLowerCase());
                });
            } else {
                return this.contacts;
            }
        }
    },
    methods: {
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
        },
        lastMsg(contact) {
            const i = parseInt(contact.messages.length - 1);
            return contact.messages[i].message;
        }
    }
})