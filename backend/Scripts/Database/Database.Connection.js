import mysql from 'mysql2'

const db = mysql.createConnection({
  database: 'sangit',
  host: 'localhost',
  user: 'root',
  password: 'pass',
})
db.connect(function (err) {
  if (err) throw err
  console.log('Database Connected')
})
export default db
