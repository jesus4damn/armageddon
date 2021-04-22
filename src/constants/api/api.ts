import axios, {AxiosResponse} from "axios";

export const API = {
    baseUrl: '',
    config: {
        headers: {
            'Content-Type': 'application/json',
        }
    },
    get(path: string): Promise<AxiosResponse> {
        return axios.get(this.baseUrl + path, this.config)
    }
};