import React from 'react'
import { Link } from 'react-router-dom'

export default function JobListItem({ job, id }) {
  return (
    <div className="jobListItem" key={id}>

      <Link className="link" to={`/jobs/${id}`}><h2>{job.title}</h2></Link>
      <strong>Type of work: {job.type}</strong><br />
      <a>Website: {job.company_url}</a>
      <h3>Description: </h3>
      <div className="description" dangerouslySetInnerHTML={{ __html: job.description }} />
      <img className="img" src={job.company_logo} />
      <hr />

    </div>
  )
}
