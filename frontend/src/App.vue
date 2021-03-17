<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">StartBid</a>
      </div>
    </nav>

    <div class="container">

      <form>
          <label>Data da Assinatura</label>
          <input type="date" class="datepicker">
          
          <label>Numero Da Arp</label>
          <input type="text" placeholder="Digite o numero da Arp">
          
          <label>Numero Do Processo Adm</label>
          <input type="text" placeholder="Digite o numero da Arp">
          <label>Numero Do Edital</label>
          <input type="text" placeholder="Digite o numero da Arp">
          
          <label>Quantidade</label>
          <input type="number" placeholder="QTD">
          
          <label>Valor</label>
          <input type="text" placeholder="Valor">
          
          <label for="">Selecione o fornecedor</label>
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
          
      </form>
      <table>
        <thead>
          <tr>
            <th>Numero Da Arp</th>
            <th>Numero Do Processo Adm</th>
            <th>Numero Do Edital</th>
            <th>Data da Assinatura</th>
            <th>Fornecedor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Arduino</td>
            <td>100</td>
            <td>50.00</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>
          </tr>
        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

  import GestArp from './services/Arp'
  export default{
    mounted() {
      GestArp.list().then(res => {
        console.log(res);
      })
    },
  }  

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
