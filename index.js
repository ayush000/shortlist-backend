const express = require('express')
const cors = require('cors')
const app = express()
const port = 3050

// Dummy data
const jobs = [{
  id: 1,
  title: 'Director - Software Engineering',
  category: 'IT',
  company: {
    name: 'Gracenote',
    about: 'Gracenote is an entertainment data and technology provider powering the world\'s top music services, automakers, cable and satellite operators, and consumer electronics companies.'
  },
  experience: 3,
  details: 'You will lead a new engineering team building a next generation data platform to link, enhance, and distribute the myriad sources of data that power our core products. You\'ll use the latest technologies running on open source big data platforms and deployed on AWS. The team is comprised of engineers with experience building large data platforms for leading web consumer and open source companies in the Bay Area.',
  location: { city: 'Mumbai' }
}, {
  id: 2,
  title: 'SEO Strategist',
  category: 'Marketing',
  company: {
    name: 'Media.net',
    about: 'Media.net is a leading ad tech company comprising of 1,000+ talented employees exclusively focused on developing innovative monetization products for digital publishers.'
  },
  experience: 1,
  details: 'We are looking for an individual who is enthusiastic about digital marketing and has the ability to strategize and handle SEO activities for a number of web properties. The chosen candidate will be responsible for managing all SEO activities for the team\'s media properties.',
  location: {
    city: 'Bengaluru'
  }
}]
// Global access allow origin *
app.use(cors())

/**
 * API to fetch all jobs, that will be rendered as a table
 */
app.get('/api/jobs', (req, res) => {
  const response = jobs.map(row => ({
    id: row.id,
    title: row.title,
    category: row.category,
    companyName: row.company.name,
    city: row.location.city,
    experience: row.experience
  }))
  res.send(response)
})

/**
 * Get job by id. This will be rendered as a modal for a particular job.
 */
app.get('/api/jobs/:id', (req, res) => {
  const response = jobs.find(row => row.id == req.params.id)
  res.send(response)
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})