const mainEndPoint = 'https://randomuser.me/api/?results=15';
export const getUsers = () => {
    return fetch(mainEndPoint)
    .then(res => res.json())    
    .then(users => {
        console.log(users)
        return users.results
    });
}