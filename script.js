const getData = () => fetch('./db.json')


const sentData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(response => response.json())
}

sentData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(getData))
.then(data => console.log(data))
.catch(e => console.log(`Error ${e}`))
