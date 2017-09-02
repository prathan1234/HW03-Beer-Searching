//ES6

import { getBeersInformation } from './api'

getBeersInformation()
    .then(response => response.json())
    .catch(e => console.error('You failed'))
    .then(response => {
        console.log(response)
    })