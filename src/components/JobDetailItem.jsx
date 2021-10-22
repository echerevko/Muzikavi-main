import React from 'react'
import { Link } from 'react-router-dom'

export default function JobDetailItem({ job, id }) {
  return (
    <div key={id}>
      <Link className="H1Link" to={`/jobs/`}>Home</Link>
      <h2>{job.title}</h2>
      <strong>Type of work: {job.type}</strong>
      <br />
      <a>Website: {job.company_url}</a>
      <p>Location: {job.location}</p>
      <h3>Description: </h3>
      <div className="description" dangerouslySetInnerHTML={{ __html: job.description }} />
      <h3>How to apply: </h3>
      <div className="apply" dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
      <img className="img" src={job.company_logo} />
    </div>
  )
}
