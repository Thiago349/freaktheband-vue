<template>
  <div class="main-view" id="Contato">
    <PageTitle struct="Mande uma" distinguished="MENSAGEM!" description="Contacte a banda diretamente pela caixa abaixo!"></PageTitle>
    <div class="content-wrapper">
      <form id="form" action="/contato" method="post">
        <InputText label_text="Nome" id_name="name"></InputText>
        <InputText label_text="E-mail" id_name="email"></InputText>
        <InputText label_text="Assunto" id_name="subject"></InputText>
        <InputTextArea label_text="Mensagem" id_name="email-content"></InputTextArea>
        <SubmitButton label_text="Enviar"></SubmitButton>
      </form>
    <div class="contact-display">
      <div class="contact-box">
      </div>
      <div class="contact-box">
      </div>
      <div class="contact-box">
      </div>
      <div class="contact-box">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import InputText from '../components/InputText.vue';
import InputTextArea from '../components/InputTextArea.vue';
import SubmitButton from '../components/SubmitButton.vue';

  export default {
    name: 'ContatoPage',
    components: { PageTitle, InputText, InputTextArea, SubmitButton },
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
  min-height: 70vh;
  width: fit-content;
  padding: 20px;
}

.contact-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 40vw;
  height: 100%;
}

.contact-box {
  display: flex;
  background-color: var(--dark-grey);
  border: solid var(--light) 2px;
  border-radius: 15px;
  width: 15vw;
  height: 45%;
}

@media (max-width: 1100px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
