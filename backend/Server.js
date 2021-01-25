import express from 'express'

//Audio
import { GetAllAudio } from './Scripts/Functions/Audio.Functions.js'
import { CreateAudio } from './Scripts/Models/Audio.js'

const app = express()
const PORT = process.env.PORT || 9000

//Routes
app.get('/Audio/All', async (req, res) => {
  res.send(await GetAllAudio())
})
app.get('/Audio/Create', async (req, res) => {
  res.send(
    await CreateAudio({
      DisplayName: 'test',
      DisplayDescription: 'test1111',
    }),
  )
})

app.get('/', (req, res) => {
  res.send('No Vulnerabilities')
})

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`),
)
