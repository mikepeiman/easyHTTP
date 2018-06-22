const http = new easyHTTP


// GET posts

// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(error, response) {
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(response)
//   }
// })

// GET single posts

// http.get('https://jsonplaceholder.typicode.com/posts/15', 
// function(error, response) {
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(response)
//   }
// })

// POST post
// create data
const data = {
  title: 'Custom post Mike',
  body: 'This could say ANYTHING YOU WANT! Wow.'
}

// create post
// http.post('https://jsonplaceholder.typicode.com/posts/', data, 
// function(error, post) {
//     if(error) {
//     console.log(error)
//   } else {
//     console.log(post)
//   }

// })

// Update a post
// http.put('https://jsonplaceholder.typicode.com/posts/15', data,
// function(error, post) {
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(post)
//   }
// })

// delete a post
http.delete('https://jsonplaceholder.typicode.com/posts/15', 
function(error, response) {
  if(error) {
    console.log(error)
  } else {
    console.log(response)
  }
})