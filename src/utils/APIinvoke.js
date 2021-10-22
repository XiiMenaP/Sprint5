import config from '../config';

class APIinvoke {
    async invokeGET(resource, queryParams){

        queryParams = queryParams || []
        const queryString = queryParams.reduce((last, q, i) => last + `${i===0? '?': "&"}${q}`, '')

        const data = {
            method: 'GET',
        }
        const url = `${config.api.baseURL}${resource}${queryString}`
        let response = (await(await fetch(url, data)).json())
        return response
    }

    async invokePUT(resource, body){
        const data = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }

        const url = `${config.api.baseURL}${resource}`
        let response = (await(await fetch(url, data)).json())
        return response
    }

    async invokePOST(resource, body){
        const data = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'content-Type':'application/json'}
        }
        const url = `${config.api.baseURL}${resource}`
        let response = (await(await fetch(url, data)).json())
        return response
    }

    async invokeDELETE(resource){
        const data = {
            method: 'DELETE',
            headers: {'content-Type':'application/json'}
        }
        const url = `${config.api.baseURL}${resource}`
        let response = (await(await fetch(url, data)).json())
        return response
    }
}
export default new APIinvoke()