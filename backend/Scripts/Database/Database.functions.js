import util from 'util'
import db from './Database.Connection.js'

const query = util.promisify(db.query).bind(db)

const Query = async (querytobeexecuted) => {
  return await query(querytobeexecuted)
}
export default Query
