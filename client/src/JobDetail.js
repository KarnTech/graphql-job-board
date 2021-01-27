import React  from 'react';
import { Link } from 'react-router-dom';
import {loadjobid} from './request'
import {useEffect, useState} from 'react'

export function JobDetail(props) {
  const [job, setJob] = useState([]);
 
  useEffect(() => {
    async function getjob(){
    const j  = await loadjobid(props.match.params.jobId)
    
    setJob(j)
    console.log(j)
  }
  getjob()
  },[]);


    return (
      <div>
       <h1 className="title">{job.title}</h1>
        <h2 className="subtitle">
  <Link to={`/companies/${job?.company?.id}`}>{job?.company?.name}</Link>
</h2>
        <div className="box">{job.description}</div>
      </div>
    );
}


