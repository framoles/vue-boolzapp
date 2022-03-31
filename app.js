const app = new Vue({
    el: "#vue-app",
    data: {
        contacts,
        activeIndex: null
    },
    methods: {
        mounted() {
            console.log(activeIndex);
        },
        getSrc(avt) {
            return "img/avatar" + avt.avatar + ".jpg";
        },
        setActive(i) {
            activeIndex = i;
            console.log(activeIndex);
        }
    }
})