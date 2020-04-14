import queryString from 'query-string'
let rootUrl = 'https://www.fastmock.site/mock/1942df50e67c8173257ad3826b39e159/api'
let myFetch = {    
    get(url,queryParams){
        url=rootUrl+url;
        if(queryParams){
            url = rootUrl+url+"?"+queryString.stringify(queryParams)
        }
        return fetch(rootUrl+url)
            .then(res=>res.json(),
                    console.log(url)
            )
    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                "Content-Type":'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(res=>res.json())
    }
}
export {myFetch};
