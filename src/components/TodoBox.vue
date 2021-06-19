<template>
  <div>
    <div class="box">
      <div class="box-head">
        <h3>Task</h3>
        <h3>Weight</h3>
        <h3>Number of Time</h3>
        <h3>Set</h3>
        <button id="save-button" v-on:click="saveTodo">Done</button>
      </div>
      <table class="card-container">
        <tr class="todo-card" v-for="(todo, i) in todos" v-bind:key="i">
          <!-- <td>{{ i }}</td> -->
          <td class="todos" id="task-catd">{{ todo.tasks }}</td>
          <td class="todos" id="weight-catd">{{ todo.weights }}kg</td>
          <td class="todos" id="number-catd">{{ todo.numbers }}</td>
          <td class="todos" id="set-catd">{{ todo.sets }}</td>
          <td id="delete-button" v-on:click="deleteTodo(i)">
            <img
              src="@/components/img/DeleteButton.png"
              height="15px"
              width="15px"
              alt=""
            />
          </td>
        </tr>
      </table>
    </div>
    <table class="item-container">
      <tr class="todo-item">
        <td class="task-td"><input type="text" v-model="taskData" /></td>
        <td class="weight-td">
          <input type="number" v-model="weightData" />
        </td>
        <td class="time-td">
          <input list="NumberTime" v-model="numberData" />
          <datalist id="NumberTime">
            <option value="5回"></option>
            <option value="6回"></option>
            <option value="7回"></option>
            <option value="8回"></option>
            <option value="9回"></option>
            <option value="10回"></option>
            <option value="12回"></option>
            <option value="15回"></option>
            <option value="20回"></option>
          </datalist>
        </td>
        <td class="set-td">
          <input list="SetCount" v-model="setData" />
          <datalist id="SetCount">
            <option value="1セット"></option>
            <option value="2セット"></option>
            <option value="3セット"></option>
            <option value="4セット"></option>
            <option value="5セット"></option>
            <option value="6セット"></option>
          </datalist>
        </td>
        <td class="add-button" v-on:click="addTodo">
          <img
            src="@/components/img/PlusIcon.png"
            width="30px"
            height="30px"
            alt=""
          />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api"
import firebase from "firebase"
export default {
  data() {
    return {
      taskData: "",
      weightData: "",
      numberData: "",
      setData: "",
      todos: [],
      // users: [],
    }
  },
  methods: {
    addTodo() {
      if (
        this.taskData !== "" &&
        this.weightData !== "" &&
        this.numberData !== "" &&
        this.setData !== ""
      ) {
        let task = { item: this.taskData }
        let weight = { item: this.weightData }
        let number = { item: this.numberData }
        let set = { item: this.setData }
        this.todos.push({
          tasks: task.item,
          weights: weight.item,
          numbers: number.item,
          sets: set.item,
        })
        this.taskData = ""
        this.weightData = ""
        this.numberData = ""
        this.setData = ""
      }
    },
    deleteTodo(i) {
      if (confirm("本当に削除してよろしいですか？")) {
        this.todos.splice(i, 1)
      }
    },
    saveTodo() {
      // firebase.initializeApp()
      firebase.firestore().collection("users").add({
        todos: this.todos,
      })
    },
  },
}
</script>
