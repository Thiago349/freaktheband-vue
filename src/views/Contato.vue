<template>
  <div class="main-view" id="Contato">
    <PageTitle struct="Mande uma" distinguished="MENSAGEM!" description="Contacte a banda diretamente pela caixa abaixo!"></PageTitle>
    <div class="content-wrapper">
      <form id="form" action="" @submit="sendForm" method="post">
        <InputText label_text="Nome" id_name="name"></InputText>
        <InputText label_text="E-mail" id_name="email"></InputText>
        <InputText label_text="Assunto" id_name="subject"></InputText>
        <InputTextArea label_text="Mensagem" id_name="content"></InputTextArea>
        <SubmitButton label_text="Enviar"></SubmitButton>
      </form>
    <div class="contact-display">
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PageTitle from '../components/PageTitle.vue';
import InputText from '../components/InputText.vue';
import InputTextArea from '../components/InputTextArea.vue';
import SubmitButton from '../components/SubmitButton.vue';

  export default {
    name: 'ContatoPage',
    data() {
      return {
        email_info: ""
      }
    },
    components: { PageTitle, InputText, InputTextArea, SubmitButton },
    methods: { sendForm(event) {
      event.preventDefault();
      this.email_info = {"data": {"name": document.getElementById("name").value, "email": document.getElementById("email").value, "subject": document.getElementById("subject").value, "content": document.getElementById("content").value}}
      console.log(this.email_info);
      axios.post("https://freakapi.azurewebsites.net/contact", this.email_info)
      .then(function (response) {
      console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log("Enviado!");
    }}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-wrapper {
  border-radius: 15px;
  justify-content: space-evenly;
  margin: 0;
}

#form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark-grey);
  border: solid var(--light) 2px;
  border-radius: 15px;
  min-height: 67.5vh;
  width: fit-content;
  padding: 20px;
}

.contact-display {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 40vw;
  height: 100%;
}

@media (max-width: 1100px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }

  #form {
    min-height: 100%;
    width: 100%;
  }
}
</style>
