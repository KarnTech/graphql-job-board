const db  = require('./db')
console.log(db.jobs)
const Query = {
    job:(root, args) => db.jobs.get(args.id),
    jobs:() => db.jobs.list()
};

const job  = {
    company: (job) => db.companies.get(job.companyId)
}

module.exports = { Query, job }