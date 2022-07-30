import axios from 'axios'

export default class PlanetInfo {
    static async getAll(page=1) {
        const response = await axios.get(`https://swapi.dev/api/planets/`, {
            params: {
                page: page
            }
        });
        return response;
    }
}