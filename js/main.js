import { getGithubProfile } from './api'

getGithubProfile()
    .then(response => response.json())
    .catch(e => console.error('You failed'))
    .then(response => console.log('response', response))

//Or
// import getGithubProfile from './api'
// getGithubProfile()
//     .then(response => response.json())
//     .catch(e => console.error('You failed'))
//     .then(response => console.log('response', response))