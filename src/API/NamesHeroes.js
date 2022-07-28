
import axios from 'axios'

export default class NamesHeroes {
    static async getAllName() {
        const response = await axios.get(`https://swapi.dev/api/people/`);
        return response;
    }
}