const url  = 'http://localhost:9000/graphql'

export async function loadJobs(){
    const res  = await fetch(url, 
        {method:'POST', headers: {'content-type': 'application/json'}, 
        body: JSON.stringify({
            query:`{
                jobs {
                id
                description
                company{
                id
                name
                }
            }
        }` })});

    const resposneBody  = await res.json()
    console.log(resposneBody.data)
    return resposneBody.data
}

export async function loadjobid(id){
    const res  = await fetch(url, 
        {method:'POST', headers: {'content-type': 'application/json'}, 
        body: JSON.stringify({
            query:`query JobQuery($id:ID!){
                job(id: $id){
                  id
                  title
                  company{
                    id 
                    name
                  }
                  description
                }
              }`,
              variables: {id}
             })});

    const resposneBody  = await res.json()
    return resposneBody.data.job
}

async function graphqlrequest(){
    
}