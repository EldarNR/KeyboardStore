<template>
    <div class="container">
        <div class="content">
            <div class="left-box">
                <h3>Контакты</h3>
                <p>
                    Адрес: г. Москва, ул. Ленина, д. 1<br>
                    Телефон: +7 (495) 123-45-67<br>
                    E-mail: info@example.com
                </p>
            </div>
            <div class="right-box">
                <h3>Следите за нами</h3>
                <div class="icon-items">
                    <a href="https://www.facebook.com/example" target="_blank">
                        <img src="../img/svg/facebook.svg" alt="facebook">
                    </a>
                    <a href="https://twitter.com/example" target="_blank">
                        <img src="../img/svg/twitter.svg" alt="twitter">
                    </a>
                    <a href="https://www.instagram.com/example" target="_blank">
                        <img src="../img/svg/instagram.svg" alt="instagram">
                    </a>
                </div>
            </div>
            <div class="form-box">
                <h3 class="form-title">Рассылка</h3>
                <form class="form" action="/subscribe" method="post">
                    <div class="form-group">
                        <label class="mr-10" for="email">Email</label>
                        <input class="bg-white pl-5" type="email" name="email" id="email" placeholder="Введите ваш e-mail">
                    </div>
                    <v-btn color="info" class="mr-4" type="submit">
                        Подписаться
                    </v-btn>
                </form>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.container {
    color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-items {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

h3 {
    text-align: center;
}

a {
    color: black;
    text-decoration: none;
}

.content {
    width: 80%;
    height: 80%;
}

.left-box {
    width: 30%;
    height: 100%;
    float: left;
    padding: 20px;
}

.right-box {
    width: 30%;
    height: 100%;
    float: left;
    padding: 20px;
}

.form-title {
    text-align: center;
    margin-top: 20px;
}

.form-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-right: 10px;
}

.form {

    display: flex;
    justify-content: center;
    align-items: flex-end;
}
</style>