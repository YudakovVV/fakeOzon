const getData = (str) =>{
    return fetch(`https://fakeozon-2c5dd-default-rtdb.firebaseio.com/goods.json`)
    //return fetch(`https://fakeozon-2c5dd-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    .then((response) => {
        return response.json()
    })
     
}

export default getData