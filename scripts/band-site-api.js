const apiKey = "cc4d248a-e458-4ca9-b4e2-24966fe4b74a";

class BandSiteAPI {
    constructor(apiKey) {
        this.baseURL = "https://project-1-api.herokuapp.com/";
        this.apiKey = apiKey;
    }

    async postComment(commentObj) {
        try {
            const response = await axios.post(
                `${this.baseURL}comments?api_key=${this.apiKey}`,
                commentObj
            );
        } catch(error) {
            console.error(error);
        }
    }

    /* Here uses XMLHTTPRequest because based on the "Functional 
    Requirement: 'the getComments method must return this sorted 
    array of comments.'" 'Functional Requirement' seems to ask 
    returning the sorted comments array instead of a promise.
    Using async/await and prmoise.then()/catch methods would both
    return the promises rather than the fetched comments. 
    'xhr.open()' 'false' makes the request synchronous */
    getComments() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.baseURL}comments?api_key=${this.apiKey}`, false);
        xhr.send(null);
        if (xhr.status === 200) {
            // sort by highest timestamps
           return JSON.parse(xhr.response)
           .sort((a, b) => b.timestamp - a.timestamp);
        } else {
           throw new Error('Request failed: ' + xhr.statusText);
        }
    }

    getShows() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.baseURL}showdates?api_key=${this.apiKey}`, false);
        xhr.send(null);
        if (xhr.status === 200) {
           return JSON.parse(xhr.response);
        } else {
           throw new Error('Request failed: ' + xhr.statusText);
        }
    }

}

export const bandsiteObj = new BandSiteAPI(apiKey);