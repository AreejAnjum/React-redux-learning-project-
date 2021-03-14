

import axios from 'axios'

const instance= axios.create({
    baseURL: 'https://real-burger-builder-project-default-rtdb.firebaseio.com/'
})

export default instance;