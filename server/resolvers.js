const db  = require('./db')

const Query = {
    job:(root, args) => db.jobs.get(args.id),
    jobs:() => db.jobs.list()
};

const job  = {
    company: (job) => db.companies.get(job.companyId)
}

const Mutation  = {
    createJob: (root, {input}) => {
      
        const id  =  db.jobs.create({input})
        console.log(id)
       return db.jobs.get(id)
    }
}



module.exports = { Query, job, Mutation }