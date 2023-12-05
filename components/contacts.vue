<script>

export default {
    data() {
        return {
            name: '',
            email: '',
            description: '',
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
}

</script>

<template>
    <v-container class="text-center d-flex" height="600" fluid text-center>

        <v-row>
            <h1 class="d-flex text-center text-h2 align-center pl-5 justify-center">Свяжитесь <br />с нами</h1>
            <v-col>
                <h1 class="text-center text-h5 pb-4 pt-5">Наш Адрес</h1>
                <v-sheet
                    class="d-flex align-content-center text-center justify-center  mx-auto flex-wrap bg-surface-variant"
                    min-width="400" min-height="500">

                    <div class="d-flex mt-auto">
                        <iframe class="d-flex justify-content-center justify-center"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.2478865525763!2d78.3442073!3d44.9995878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427f01e34406c5d3%3A0x5b642cc8e248ad07!2z0JbQsNGB0YLQsNGA0pPQsCDSmtGL0LfQvNC10YIg0JrTqdGA0YHQtdGC0YMg0J7RgNGC0LDQu9GL0pPRiw!5e0!3m2!1sru!2skz!4v1701450903593!5m2!1sru!2skz"
                            width="800" height="500" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </v-sheet>
            </v-col>
            <v-col>
                <h1 class="text-center text-h5 pb-4 pt-5">Есть вопросы? Напиши нам!</h1>
                <v-sheet class="d-flex align-content-center justify-center flex-wrap" min-width="400" min-height="500">

                    <v-form @submit.prevent="handleSubmit" ref="form" lazy-validation>
                        <v-text-field v-model="name" :rules="nameRules" label="Имя"></v-text-field>

                        <v-text-field v-model="email" :rules="emailRules" label="E-mail"></v-text-field>

                        <v-textarea v-model="description" clearable label="Сообщение"></v-textarea>

                        <v-btn color="success" class="mr-4" type="submit" @click="handleSubmit">
                            Отправить
                        </v-btn>

                        <v-btn color="error" class="mr-4" @click="clear({ name: '', email: '', description: '' })">
                            Сброс
                        </v-btn>

                    </v-form>

                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>