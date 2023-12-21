<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            description: '',
            newsletter: ''
        };
    },
    computed: {
        clearedValues() {
            return {};
        },
    },
    methods: {
        clear() {
            const { name, email, description } = this.clearedValues;
            this.name = name;
            this.email = email;
            this.description = description;
        },
        async handleSubmit() {
            try {
                await this.$axios.post('/', {
                    name: this.name,
                    email: this.email,
                    description: this.description,
                });
                console.log('Form submitted successfully');
                this.clear();
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    },

}
</script>

<template>
    <footer style="width: 100%; height: 100%;" class="foot">
        <v-container class="container">
            <v-row>
                <v-col cols="4">
                    <h1 class="text-h5 text-center pb-1">Наш Адрес</h1>
                    <v-sheet loading="lazy"
                        class="d-flex align-content-center text-center justify-center mx-auto flex-wrap">
                        <iframe class="d-flex justify-center"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.2478865525763!2d78.3442073!3d44.9995878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427f01e34406c5d3%3A0x5b642cc8e248ad07!2z0JbQsNGB0YLQsNGA0pPQsCDSmtGL0LfQvNC10YIg0JrTqdGA0YHQtdGC0YMg0J7RgNGC0LDQu9GL0pPRiw!5e0!3m2!1sru!2skz!4v1701450903593!5m2!1sru!2skz"
                            width="400px" height="500px" style="border:0;" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </v-sheet>
                </v-col>
                <v-col cols="4" class="d-flex justify-center">
                    <div>
                        <div style="max-width: 100%; height: 40%;">
                            <h1 class="text-h5 text-center">Контакты</h1>
                            <div class="rounded">
                                <h4 class="text-center pb-5 pt-5">Адрес</h4>
                                <p>Город: Талдыкорган</p>
                                <p>Адрес:ул Кунаев 47</p>
                                <p>График работы:(пн-пт) 9/17, (сб-вс) выходной</p>
                            </div>
                        </div>

                        <div style="max-width: 100%;">
                            <h3 class="mb-2">Подпишитесь на рассылку</h3>

                            <v-text-field class="bg-silver" v-model="newsletter" label="E-mail"></v-text-field>
                            <v-btn type="submit" style="width: 100%;">send</v-btn>
                        </div>

                        <div style="max-width: 100%; height: 30%;" class="mt-5">
                            <h3 class="pb-5">Следите за нами</h3>
                            <div class="card ma-auto">
                                <button>
                                    <a href="https://www.facebook.com/example" target="_blank">
                                        <img src="../img/svg/facebook.svg" alt="facebook">
                                    </a>
                                </button>
                                <button>
                                    <a href="https://twitter.com/example" target="_blank">
                                        <img src="../img/svg/twitter.svg" alt="twitter">
                                    </a>
                                </button>
                                <button>
                                    <a href="https://www.instagram.com/example" target="_blank">
                                        <img src="../img/svg/instagram.svg" alt="instagram">
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>


                </v-col>
                <v-col cols="4" class="d-flex justify-center flex-wrap">
                    <h1 class="text-h5">Есть вопросы? Напиши нам!</h1>
                    <div class="d-flex align-center">
                        <v-sheet max-width="300" max-height="400px" class="rounded">
                            <v-form @submit.prevent="handleSubmit" ref="form" lazy-validation>
                                <v-text-field v-model="name" label="Имя"></v-text-field>
                                <v-text-field v-model="email" label="E-mail"></v-text-field>
                                <v-textarea class="overflow-auto" v-model="description" clearable
                                    label="Сообщение"></v-textarea>
                                <v-btn color="success" class="mr-4" type="submit" @click="handleSubmit">
                                    Отправить
                                </v-btn>
                                <v-btn color="error" @click="clear({ name: '', email: '', description: '' })">
                                    Сброс
                                </v-btn>
                            </v-form>
                        </v-sheet>
                    </div>
                </v-col>
            </v-row>

        </v-container>
    </footer>
</template>
  
<style scoped>
.container {
    color: rgb(255, 255, 255);
    max-width: 1280px;
    max-height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

}

footer {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

h3 {
    text-align: center;
}

a {
    color: black;
    text-decoration: none;
}


.card {
    width: 290px;
    height: 64px;
    background: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 20px;
    position: relative;
    border: 2px solid transparent;
    transition: all 0.5s ease-in-out;
}

.card:focus-within {
    background-color: rgba(17, 17, 17, 0.5);
    backdrop-filter: blur(10px);
    border: 2px solid rgb(27, 27, 27);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.card button {
    font-size: 34px;
    background-color: transparent;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    transition: all 0.2s ease-in;
    border: 0;
    cursor: pointer;
}

.card button:focus {
    background-color: rgb(255, 255, 255);
    margin-bottom: 50%;
}
</style>