<template>
  <div class="SignUp">
    <!-- LINE送信希望者のIDを習得 -->
    <div class="sign_title">毎朝9:00にトレーニングメニューが届きます</div>
    <div class="sign_input">
      <input type="email" class="sign" v-model="lineID" placeholder="lINE ID" />
    </div>
    <div class="sign_button" v-on:click="signUp">LINE登録</div>
  </div>
</template>

<script>
import firebase from "firebase"
import line from "@/components/index.js"
// プロップス（親から子に渡す）を書く

export default {
  data() {
    return {
      lineId: "",
    }
  },
  methods: {
    // firebaseにLINE iDを登録する
    // これドキュメントの追加でLINEidとユーザーid結びつければいい？
    signUp() {
      if (this.lineId != this.lineId) {
        alert("LINE IDを入力してください")
        return
      }
      firebase.firestore().collection("lineid").add({
        this.lineId: ""
      });
    }
      // firebase.auth().then((res) => {
      //   console.log(res)
      //   const lineInfo = {
      //     line_id: this.lineId,
      //   }
      //   this.$router.push("/")
      //   firebase.firestore().collection("line").add(lineInfo)
      // })
      //         .catch(function(error) {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // ...
      //   alert(
      //     "ログインに失敗しました エラーコード" +
      //       errorCode +
      //       "エラーメッセージ" +
      //       errorMessage
      //   );
      // });
    },
  },
}
</script>

<style>
.SignUp {
  margin: auto;
  width: 85%;
  max-width: 400px;
  min-width: 300px;
  text-align: center;
  /* 背景画像 */
  background-image: url("../assets/main.jpg");
}
/* タイトル */
.sign_title {
  color: white;
}
.sign_input {
  display: flex;
}
/* LINE IDインプット */
.sign {
  width: 70%;
  height: 25px;
  font-weight: bold;
  font-size: 15.5px;
  line-height: 22px;
  border: 0.5px solid #f2e9e3;
  border-radius: 5px;
  align-items: center;
  text-align: center;
  margin: 10px auto;
}
/* LINE登録ボタン */
.sign_button {
  border: 1px solid #52e01a;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #52e01a;
  width: 75px;
  height: 30px;
  margin: 5px auto;
  display: flex;
  font-weight: bold;
}
</style>
