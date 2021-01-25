import Query from '../Database/Database.functions.js'

export const CreateAudio = async (Audio) => {
  const response = await Query(`
    INSERT INTO audio
    (DisplayName,
    DisplayDescription,
    TotalViews,
    WatchTime,
    Likes)
    VALUES
    ('${Audio.DisplayName}',
    '${Audio.DisplayDescription}',
    ${0},
    ${0},
    ${0});`)
  return await GetAudio(response.insertId)
}
export const GetAudio = async (id) => {
  return await Query(`SELECT * FROM audio WHERE id = ${id}`)
}
