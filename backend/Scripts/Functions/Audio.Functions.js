import Query from '../Database/Database.functions.js'

export const GetAllAudio = async () => {
  return await Query(`SELECT * FROM audio`)
}
/*
`
  INSERT INTO `sangit`.`audio`
  (DisplayName,
  DisplayDescription,
  TotalViews,
  WatchTime,
  Likes)
  VALUES
  (,
  <{DisplayDescription: }>,
  <{TotalViews: }>,
  <{WatchTime: }>,
  <{Likes: }>);`
*/
