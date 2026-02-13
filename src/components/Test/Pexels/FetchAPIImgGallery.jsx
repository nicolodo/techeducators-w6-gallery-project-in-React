// fetchAPIImgGallery.jsx

// PEXELS API STUFF
import { createClient } from 'pexels';
const client = createClient('YOUR_API_KEY');
// All requests made with the client will be authenticated
// PEXELS API STUFF

export default function FetchAPIImgGallery() {
    // lthis is the api for pexels
    const api = "uer3qoIBSKD3url77pS8nYiQkM4OsWR1bKqAFbulQu5bkd6O3bXk5z3Q"

    // moodle fetch code
    // The fetch code should probably on the server side
    async function getMyStuffFromOverThere() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log("HTTP Response:", response);
        const json = await response.json();
        console.log("JSON Data:", json);
    }
    getMyStuffFromOverThere();
    // some async function
        
        // wait for the reponse

        // convert it to a json

        // map or loop through a list and
        // parse the json to fill in img tags

        // return some div with a bunch of images in it


}
