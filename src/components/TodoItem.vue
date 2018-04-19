<template>
  <li class="todo">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed" >
      <!--TODO  双击此元素，该todo进入编辑状态，显示下方的input.edit元素-->
      <label @dblclick="editTodo(todo)" v-show="!todo.editing">{{todo.title}}</label>
      <!--TODO  点击此元素，删除该todo-->
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input ref="inputEdit" class="edit" v-show="todo.editing" type="text" v-model="todoTitle" v-todo-focus @keyup.enter="doneEdit(todo)">
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  data () {
    return {
      todoTitle: ''
    }
  },
  props: {
    todo: Object
  },
  methods: {
    removeTodo: function (todo) {
      this.$store.dispatch('removeTodo', todo)
    },
    editTodo: function (todo) {
      this.todoTitle = todo.title
      this.$set(todo, 'editing', true)
    },
    doneEdit: function (todo) {
      todo.title = this.todoTitle
      this.$store.dispatch('updateTodo', todo)
      this.todoTitle = ''
      todo.editing = false
    }
  },
  directives: {
    'todo-focus': function (el, binging) {
      if (binging.value) {
        el.focus()
      }
    }
  }
}
</script>

<style scoped>

</style>
