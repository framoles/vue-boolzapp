const app = new Vue({
    el: "#vue-app",
    data: {
        contacts,
        activeIndex: null,
        inputText: "",
        search: "",
        show: false
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
            let input = this.inputText.trim();
            if (input.length > 0) {
                msg.push({
                    date: new Date().toLocaleString(),
                    message: input,
                    status: "sent",
                    displayBox: false
                })
                setTimeout(function () {
                    msg.push({
                        date: new Date().toLocaleString(),
                        message: "Sono solo uno stupido bot! Non posso rispondere",
                        status: "received",
                        displayBox: false
                    })
                }, 3000)
            }
            this.inputText = "";
        },
        lastMsg(contact) {
            const i = parseInt(contact.messages.length - 1);
            return contact.messages[i].message;
        },
        displayDel(msg) {
            msg.displayBox = !msg.displayBox;
        },
        deleteMsg(i) {
            i.displayBox = !i.displayBox;
            this.contacts[this.activeIndex].messages.splice(i, 1);
        },
        ifActive(index) {
            if (index === this.activeIndex) {
                return "active";
            }
        },
        showClose() {
            this.show = !this.show
        },
        closeChat() {
            this.activeIndex = null;
            this.show = !this.show
        }
    }
})