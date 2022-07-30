import axios from 'axios'

export default class HeroesInfo {
    static async getAll(page=1) {
        const response = await axios.get(`https://swapi.dev/api/people/`, {
            params: {
                page: page
            }
        });
        return response;
    }
}