const line = require('@line/bot-sdk')

const client = new line.Client({
  channelAccessToken: '<channel access token>'
})

const message = {
  type: 'text',
  text: 'ラインテスト'
}

client.replyMessage('<replyToken>', message)
  .then(() => {
    ...
  })
  .catch((err) => {
    // error handling
  })