const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const pg = require('pg')
const cors = require('cors')

const { 
  courseRoutes, 
  unitRoutes, 
  courseUnitRoutes,
  unitLessonRoutes,
  lessonRoutes,
  teacherRoutes,
  studentRoutes,
  classRoutes 
} = require('./src/routes')

const port = process.env.PORT || 3000

app.disable('x-powered-by')
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/units/:id/lessons', unitLessonRoutes)
app.use('/courses/:id/units', courseUnitRoutes)
app.use('/courses', courseRoutes)
app.use('/units', unitRoutes)
app.use('/lessons', lessonRoutes)
app.use('/teachers', teacherRoutes)
app.use('/students', studentRoutes)
app.use('/classes', classRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app
