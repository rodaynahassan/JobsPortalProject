const express = require('express')
const mongoose = require('mongoose')
const jobSeekers = require('./routes/api/jobSeekers')
const employers = require('./routes/api/employers')
const jobs = require('./routes/api/jobs')
const applications = require('./routes/api/applications')
const userApplications = require('./routes/api/userApplications')
const cvs = require('./routes/api/cvs')
const careerAdvisors = require('./routes/api/careerAdvisors')

const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/routes/api/jobSeekers', jobSeekers)
app.use('/routes/api/employers', employers)
app.use('/routes/api/jobs', jobs)
app.use('/routes/api/applications', applications)
app.use('/routes/api/userApplications', userApplications)
app.use('/routes/api/cvs', cvs)
app.use('/routes/api/careerAdvisors', careerAdvisors)


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client/build')))
  //
  app.get('*', (req, res) => {
    res.sendfile(path.resolve((__dirname = 'client/build/index.html')))
  })
}

// Handling 404
app.use((req, res) => {
  res.status(404).send({ err: 'We can not find what you are looking for' })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
