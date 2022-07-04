var app = new Vue(
    {
        el: '#root',
        data: {
            randomMail: [],
            done: false
        },
        methods: {
            getRandomMailFromApi() {
                for(let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.randomMail.push(response.data.response)
                    });
                }
            },
            checkMail() {
                if (this.randomMail.length >= 10) {
                    this.done = true
                }
                setInterval(this.checkMail, 2000)
            }
        },
        mounted() {
            this.getRandomMailFromApi()
            this.checkMail()
        }
    }
);