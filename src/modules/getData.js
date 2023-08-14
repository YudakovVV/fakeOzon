const getData = () =>{
    return fetch('https://fakeozon-2c5dd-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
     
}

export default getData