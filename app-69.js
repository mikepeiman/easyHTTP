// async function x() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hello in promise => setTimeout')
//     }, 1000)
//   })

//   const error = false

// if(!error) {
//   const res = await promise
//   return res
// } else {
//   await Promise.reject(new Error('This was an error'))
// }

  
// }

// // console.log(x())
// x().then(res => console.log(res)).catch(err => console.log(err))

async function getUsers() {
  // await the response of the fetch() call
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  // only proceed once the promise is resolved
  const data = await response.json()
  // only proceed once the second promise is resolved
  return data
}
// console.log(getUsers().then(users => {return users}))
// the above does not work. simple console.log returns promise.
// when a promise is returned, invoke the function with .then()
getUsers().then(users => console.log(users))