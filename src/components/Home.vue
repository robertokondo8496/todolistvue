<template>
    <div>
        <ul class="lista-tarefas">
          <li v-for="tarefa of tarefas" v-bind:key="tarefa.id">
            {{ tarefa.texto }}
            <button @click="remove(tarefa)"> Remover </button>
          </li>
        </ul>
    </div>
</template>

<script>

const listaTarefas = [{ id: 1, completada: true, texto: 'Tarefa A' }, 
{ id: 2, completada: false, texto: 'Tarefa B' },
{ id: 3, completada: false, texto: 'Tarefa C' }];

export default {
  data() {
    return {
      tarefas: listaTarefas
    }
  },

  methods: {
    setTarefa(tarefa) {
      listaTarefas.map(_tarefa => {
        if (_tarefa.id === tarefa.id) {
          return {
            id: tarefa.id,
            texto: tarefa.texto
          };
        } else {
          return _tarefa;
        }
      })
    }, 
    remove(tarefa){
      listaTarefas.filter((_tarefa) => _tarefa !== tarefa)
      alert(` A tarefa ${tarefa.texto} foi removida! `)
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