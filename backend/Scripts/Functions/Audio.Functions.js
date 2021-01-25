import Query from '../Database/Database.functions.js'

export const GetAllAudio = async () => {
  return await Query(`SELECT * FROM audio`)
}
