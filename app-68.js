const http = new easyHTTP

// Get users
// Not this way  - synchronous:
// const users = http.get('https://jsonplaceholder.typicode.com/users')
// console.log(users)

// This way - asynchronous
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

  // User data
  const data = {
    name: 'Mike Peiman',
    username: 'Snowtigr',
    email: 'mikepeiman@gmail.com'
  }

  // Create post
  // http.post('https://jsonplaceholder.typicode.com/users', data)
  // .then(data => console.log(data) )
  // .catch(err => console.log(err))

  // Update post
  // http.put('https://jsonplaceholder.typicode.com/users/2', data)
  // .then(data => console.log(data))
  // .catch(err => console.log(err))

  // Delete post
  
  http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err))
