<template>
  <div id="todo-box">
    <link
      href="https://fonts.googleapis.com/css?family=Acme"
      rel="stylesheet"
    />
    <div class="box">
      <h2>Todo Box</h2>
      <div class="box-head">
        <!-- <h3 class="heading task">Task</h3>
        <h3 class="heading weight">Weight</h3>
        <h3 class="heading number">Number of Time</h3>
        <h3 class="heading set">Set</h3> -->
        <!-- <button id="save-button" v-on:click="saveTodo">Done</button> -->
      </div>
      <table class="card-container">
        <tr id="heading">
          <th id="heading-task" class="headings">Task</th>
          <th id="heading-weight" class="headings">Weight</th>
          <th id="heading-number" class="headings">Number of Time</th>
          <th id="heading-set" class="headings">Set</th>
        </tr>
        <tr class="todo-card" v-for="(todo, i) in todos" v-bind:key="i">
          <!-- <td>{{ i }}</td> -->
          <label class="todo-card-label" for="">
            <input id="check-box" type="checkbox" class="todo-button" />

            <td id="todo-task" class="todos task">{{ todo.tasks }}</td>
            <td class="todos weight">{{ todo.weights }}kg</td>
            <td class="todos number">{{ todo.numbers }}</td>
            <td class="todos set">{{ todo.sets }}</td>
          </label>
          <td id="delete-button" class="todo-button" v-on:click="deleteTodo(i)">
            <img
              src="@/components/img/DeleteButton.png"
              height="20px"
              width="20px"
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
<style scoped>
#todo-box {
  font-family: acme;
  /* margin-top: 20px; */
}
.box {
  width: 500px;
  height: 600px;
  border: 2px black solid;
  margin: 0 auto 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
}
.box h2 {
  text-align: center;
}
.card-container {
  padding: 0;
  margin: 0;
}
#save-button {
  position: fixed;
  top: 97px;
  right: 550px;
  width: 50px;
  height: auto;
  border: 2px black solid;
  border-radius: 6px;
  background: black;
  color: white;
}
#save-button:hover {
  cursor: pointer;
}
#heading {
  width: 500px;
  height: 50px;
  display: flex;
}
.headings {
  text-align: center;
  width: 22%;
}

.todos {
  text-align: center;
  line-height: 40px;
}
.task {
  width: 23%;
  /* overflow: scroll; */
  overflow-x: auto;
  white-space: nowrap;
}
.number {
  width: 24%;
  margin-right: 10px;
  margin-left: 10px;
}
.weight {
  width: 24%;
}
.set {
  width: 24%;
}
.todo-card {
  width: 480px;
  display: flex;
  /* justify-content: start; */
  border: 2px black solid;
  border-radius: 9px;
  height: 40px;
  margin: 1px 1px;
  /* width: 95%; */
}
.todo-card-label {
  display: flex;
  width: 90%;
}
.todo-button {
  margin: auto;
}
#check-box {
  margin-left: 5px;
  height: 40px;
  width: auto;
}

/* .task-card {
  width: 120px;
  line-height: 40px;
}
.weight-card {
  width: 120px;
  line-height: 40px;
}
.number-card {
  width: 120px;
  line-height: 40px;
}
.set-card {
  width: 90px;
  margin-left: 15px;
  line-height: 40px;
} */
#delete-button {
  line-height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  /* margin-left: 10px; */
  /* margin-right: 10px; */
  margin: auto 10px;
}
#delete-button:hover {
  cursor: pointer;
}
.item-container {
  width: 500px;
  border: 2px black solid;
  padding: 5px;
  margin: 20px auto 0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
}
.task-td {
  width: 40%;
  border: 2px black solid;
}
.weight-td {
  border: 2px black solid;
  width: 18%;
}
.time-td {
  border: 2px black solid;
  width: 18%;
}
.set-td {
  border: 2px black solid;
  width: 18%;
}
.add-td {
  width: 6%;
}
td input {
  width: 100%;
  height: 40px;
  border: none;
  padding: 0;
}
.add-button {
  width: 30px;
  height: 30px;
}
.add-button:hover {
  cursor: pointer;
}
.unvisible {
  opacity: 0;
}
</style>
