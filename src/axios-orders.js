import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://build-a-burger-6524d.firebaseio.com/'
});

export default instance;
