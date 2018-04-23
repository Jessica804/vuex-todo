/**
 * mutations，统一使用大写字母，以下划线分割
 */
export default {
  /**
   * 保存TODO信息
   * @param state
   * @param todos
   * @constructor
   */
  GET_TODOS (state, todos) {
    state.todos = todos
  },
  /**
   * 新增TODO
   * @param state
   * @param todo
   * @constructor
   */
  ADD_TODO (state, todo) {
    state.todos.push(todo)
  },
  /**
   * 切换所有todo的complete值
   * @param state
   * @param status
   * @constructor
   */
  TOGGLE_ALL_TODOS (state, status) {
    state.todos.forEach(function (todo) {
      todo.completed = status
    })
  },
  /**
   * 设置visibility
   * @param state
   * @param type
   * @constructor
   */
  SET_VISIBILITY (state, type) {
    state.visibility = type
  },
  REM_TODO (state, id) {
    state.todos.forEach(function (todo) {
      if (todo.id === id) {
        const index = state.todos.indexOf(todo)
        state.todos.splice(index, 1)
      }
    })
  },
  UPDATE_TODO (state, item) {
    state.todos.forEach(function (todo) {
      debugger;
      if (todo.id === item.id) {
        todo.title = item.title
        todo.completed = item.completed
      }
    })
  },
  REMOVE_COMPLETED_TODOS (state) {
    state.todos = state.todos.filter(function (todo) {
      return !todo.completed
    })
  }
}
