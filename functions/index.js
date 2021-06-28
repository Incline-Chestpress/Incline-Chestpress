// "use strict"

const functions = require("firebase-functions")
const express = require("express")
const line = require("@line/bot-sdk")

const config = {
  channelSecret: "c8c54f10b02b0ffb72a17982e0b91054",
  channelAccessToken:
    "prboDo2Eg3uiq5kyY8HQX6eVN7eS/pIz1cuWF+9OKyxhEX2OebotKUbWSb0hLo4EcHaV7KvdZlvpjOiKbFh5odcTCetBkUUoPhn5LSNY3IK8q9RZ+1wqJZiw+c6bz5Z3HgVMc8mwypYY3CuNjn374wdB04t89/1O/w1cDnyilFU=",
}

const app = express()

app.post("/webhook", line.middleware(config), (req, res) => {
  console.log(req.body.events)
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((result) => console.log(result))
})

const client = new line.Client(config)

async function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null)
  }

  return client.replyMessage(event.replyToken, {
    type: "text",
    text: event.message.text + "を受け取りました。",
  })
}

exports.app = functions.https.onRequest(app)
