// LINEのプッシュメッセージ
// チャネルシークレット c8c54f10b02b0ffb72a17982e0b91054
// チャネルアクセストークン prboDo2Eg3uiq5kyY8HQX6eVN7eS/pIz1cuWF+9OKyxhEX2OebotKUbWSb0hLo4EcHaV7KvdZlvpjOiKbFh5odcTCetBkUUoPhn5LSNY3IK8q9RZ+1wqJZiw+c6bz5Z3HgVMc8mwypYY3CuNjn374wdB04t89/1O/w1cDnyilFU=
import firebase from "firebase"

data() {
  return {
    uid: "",
    lineId: "",
  }
},
// コレクションがlineid、その中のlineIdにデータ
firebase
  .firestore()
  .collection("lineid")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      this.lineId=doc.lineId,
      })
    })
      

const line = require("@line/bot-sdk")

const client = new line.Client({
  channelAccessToken:
    "<prboDo2Eg3uiq5kyY8HQX6eVN7eS/pIz1cuWF+9OKyxhEX2OebotKUbWSb0hLo4EcHaV7KvdZlvpjOiKbFh5odcTCetBkUUoPhn5LSNY3IK8q9RZ+1wqJZiw+c6bz5Z3HgVMc8mwypYY3CuNjn374wdB04t89/1O/w1cDnyilFU=>",
})

const message = {
  type: "text",
  text: "ラインテスト",
}

client
  .pushMessage("<to>", message)
  .then(() => {})

  .catch((err) => {
    // error handling
    console.log(console.error())
    console.log(err)
  })
