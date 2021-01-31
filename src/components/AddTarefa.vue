<template>
    <div>
        Digite sua tarefa: <br/>
        <input @input="texto = $event.target.value" id="tarefa" autocomplete="off">
        <button @click="adicTarefa(texto)"> Adicionar </button>
    </div>
</template>

<script>
export default {
  methods: {
    adicTarefa(texto){
      alert(texto)
      // const novoId = ultimoId + 1;
      // setTarefas([
      //   ...tarefas,
      //   {
      //     id: novoId,
      //     completada: false,
      //     texto
      //   }
      // ]);
      // setUltimoId(novoId);
    }
  }
}
</script>

<style scoped>
  .bg-green {
    padding: 2em;
    color: white;
    background-color: #5cb85c;
  }
  #logo {
    font-family: 'Courier New', Courier, monospace;
    font-size: 3em;
    text-shadow: 0 1px 3px #0000004d;
  }
  #lead {
    font-size: 1.2em;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>