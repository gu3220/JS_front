<template>
  <form @keyup.shift.enter="sendFormData" @submit.prevent="onFormSubmit">
    <div class="info-card">
      <div class="cards">

  <div class="first-card">
    <br />
    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDZ2lTXq_hKowK_nXmT3usuqeId0dJueFsg&usqp=CAU" /> 
    <p> ФИО: Гурина К.В.<br />
      Группа: БСБО-05-19<br />
      Умения: Ничего особенного:(<br />
    </p>
  </div>
  <div class="second-card"><br />
    <input type="text" id="name" required placeholder="Ваше имя:"/> <br />
    <br />
    <input type="text" id="mail" required placeholder="Почта:"/> <br />
    <br />
    <textarea id="message" required placeholder="Сопроводительное письмо:"/> <br />
    <br />
    <button id="sub" type="submit">Отправить</button>
  </div>
  </div>
    </div>
  </form>
</template>

<script>

export default {
  name: "InfoPage",
  data: () => ({
    emailInput: "",
  }),
  methods: {
    btnMandler($event) {
      console.warn($event);
    },
    onMouseOver($event) {
      console.warn($event);
    },
  },
  mounted() {
  },
};
</script>

