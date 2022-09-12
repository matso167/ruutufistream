const express = require('express')
const app = express()
const { spawn } = require('child_process')

app.get('/', (req, res) => {
  const child = spawn('./streamlink.sh')
  child.stdout.pipe(res)
})

app.listen(8080)



