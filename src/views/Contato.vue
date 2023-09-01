<template>
  <div class="main-view" id="Contato">
    <PageTitle struct="Mande uma" distinguished="MENSAGEM!" description="Contacte a banda diretamente pela caixa abaixo!"></PageTitle>
    <div class="content-wrapper">
      <form id="form" class="main-card" action="" @submit="sendForm" method="post">
        <InputText label_text="Nome" id_name="name"></InputText>
        <InputText label_text="E-mail" id_name="email"></InputText>
        <InputText label_text="Assunto" id_name="subject"></InputText>
        <InputTextArea label_text="Mensagem" id_name="content"></InputTextArea>
        <SubmitButton label_text="Enviar"></SubmitButton>
      </form>
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
        email_info: {
          name: "",
          email: "",
          subject: "",
          content: "",
        }
      }
    },
    components: { PageTitle, InputText, InputTextArea, SubmitButton },
    methods: { sendForm(event) {
      event.preventDefault();
      this.email_info.name = document.getElementById("name").value;
      this.email_info.email = document.getElementById("email").value; 
      this.email_info.subject = document.getElementById("subject").value; 
      this.email_info.content = document.getElementById("content").value;
      document.getElementById("name").value = "";
      document.getElementById("email").value = ""; 
      document.getElementById("subject").value = ""; 
      document.getElementById("content").value = "";
      axios.post('https://freakapi.azurewebsites.net/contact', this.email_info)
      .then(function (response) {
        console.log(response);
        alert("Mensagem enviada, obrigado!");
      })
      .catch(function (error) {
        console.log(error);
        alert("Falha no envio!");
      });
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
  justify-content: space-evenly;
  min-height: 67.5dvh;
  width: fit-content;
  padding: 20px;
}

.contact-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
}

@media (max-width: 1100px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  #form {
    min-height: 100%;
    width: 100%;
  }
}
</style>
