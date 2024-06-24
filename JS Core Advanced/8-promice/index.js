import { Axios } from "axios";


/**
 * 
 * @param {string[]} urls 
 */
function getUrlsData(urls) {
    const axios = new Axios({ method: "GET" });
    
    urls.forEach(element => {
        axios.get(element)
            .then((data) => {
                console.log(data.data);
            })
            .catch(err => console.log(err));
    });
}
            
console.log(getUrlsData(["https://www.youtube.com", "https://learn.javascript.ru"]));