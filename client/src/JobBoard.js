import React, { Component } from 'react';
import { JobList } from './JobList';
import {loadJobs} from "./request"
import {useEffect, useState} from 'react'

export function JobBoard(){

  const [jobs, setJobs] = useState([]);

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
