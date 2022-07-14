<template>

  <form>
    <div class="header">
      <h1>
        Formulário <br />
        para compra de <br />
        <span>Pacotes de adesivos</span>
      </h1>
    </div>
    <div>
      <h3>Parabéns! <br />A sua compra foi realizada da seguinte forma:</h3>
    </div>
    <div class="formData">
      
      <!-- <p>Forma de pagamento: {{ store.payment }}</p>
      <p>Obersvações: {{ store.comments }}</p> -->
    </div>

    
  </form>

</template>
      <script>
      // import {store} from '../store'
      </script>


<style>
.header {
  height: 20vh;
  width: 100%;
  padding: 10px 40px;
  margin-top: -40px;
  margin-left: -40px;
  background-color: #2f3675;
  border-radius: 10px 10px 100% 50%;
}

h1 {
  color: rgb(180, 180, 180);
  font-size: 20px;
}

span {
  color: white;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

.formData {
  display: flex;
  flex-direction: column;
}

</style>
