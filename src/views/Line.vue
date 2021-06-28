<template>
  <div class="SignUp">
    <!-- LINE送信希望者のIDを習得 -->
    <div class="sign_title">毎朝9:00にトレーニングメニューが届きます</div>
    <div class="sign_input">
      <input type="email" class="sign" v-model="lineId" placeholder="LINE ID" />
    </div>
    <button class="sign_button" v-on:click="signUp">LINE登録</button>
  </div>
</template>

<script>
import firebase from "firebase"
// import line from "@/components/index.js"

export default {
  data() {
    return {
      uid: "",
      lineId: "",
    }
  },
  methods: {
    // firebaseにLINE iDを登録する
    // ドキュメントにLINEid追加、ユーザーidと結びつける
    signUp() {
      if (this.lineId != this.lineId) {
        alert("LINE IDを入力してください")
        return
      }
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.uid = user.uid
        } else {
          // this.uid = Number(this.length)
        }
      })
      firebase.firestore().collection("lineid").add({
        uid: this.uid,
        lineId: this.lineId,
      })
      alert("LINE登録が完了しました")
    },
  },
}
</script>

<style>
.SignUp {
  margin: auto;
  /* width: 85%; */
  /* max-width: 400px;
  min-width: 300px; */
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  background-blend-mode: lighten;
  background-image: url("../assets/main.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
/* タイトル */
.sign_title {
  padding-top: 30px;
  color: #383838;
  font-weight: bold;
}
.sign_input {
  display: flex;
}
/* LINE IDインプット */
.sign {
  width: 45%;
  height: 25px;
  font-size: 15px;
  line-height: 22px;
  border: 0.5px solid #f2e9e3;
  border-radius: 5px;
  align-items: center;
  margin: 10px auto;
}
/* LINE登録ボタン */
.sign_button {
  border: 1px solid #52e01a;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #52e01a;
  width: 100px;
  height: 30px;
  margin: 5px auto;
  display: flex;
  font-weight: bold;
  text-align: center;
  align-items: center;
  color: white;
  text-align: center;
}
</style>
