<template>

<form> 
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
</form>
     
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
  display: flex;
  padding-top: 25px ;
}
.first-card  {
  margin-left: 250px;
  width: 400px;
  height: 300px;
  box-shadow: 8px 8px 8px lightblue;
  border:solid lightblue;
  border-radius: 5%;
}
.second-card {
  margin-left: 100px;
  width: 400px;
  height: 300px;
  box-shadow: 8px 8px 8px lightblue;
  border:solid lightblue;
  border-radius: 5%;
}
p {
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
  text-align: center;
  color: black;
  line-height: 1.5;
}
#name {
  width: 80%;
  height: 10%;
  border: solid 2px lightblue;
  border-radius: 5px;
}
#mail {
  width: 80%;
  height: 10%;
  border: solid 2px lightblue;
  border-radius: 5px;
}
#message {
  width: 80%;
  height: 30%;
  border: solid 2px lightblue;
  border-radius: 5px;
  font-family: unset;
} 

#sub {
  width: 80%;
  height: 10%;
  border: solid 2px lightblue;
  border-radius: 5px;
}
img {
  height: 120px;
  border-radius: 5px;
}

</style>
