import React, { Component } from 'react';
import { JobList } from './JobList';
import {loadJobs} from "./request"
import {useEffect, useState} from 'react'
import { useQuery, gql } from '@apollo/client';


const getjobs = gql`
{
    jobs {
      id
    }
  }
`

export function JobBoard(){

  const [jobs, setJobs] = useState([]);
  const { loading, error, data } = useQuery(getjobs);
  console.log(data)
  useEffect(() => {
    async function getjobs(){
    const j  = await loadJobs()
    const {jobs}  = j
    setJobs(jobs)
  }

  getjobs()
  },[]);
    return (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList  jobs ={jobs} />
      </div>
    );
}
