function easyHTTP() {
  this.http = new XMLHttpRequest()
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true)

  // arrow function works here - adds a "lexical 'this'"
  // this.http.onload = () => {
  //   if(this.http.status === 200) {
  //     console.log(this.http.responseText)
  //   }
  // }

  let self = this // this brings 'this' into the onload function scope via new variable 'self'
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText)
    } else {
      callback('Custom Error: ' + self.http.status)
    }
  }

  this.http.send()
}


// Make an HTTP POST request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true)
  this.http.setRequestHeader('Content-type', 'application/json')

  let self = this
  this.http.onload = function() {
      callback(null, self.http.responseText)
  }

  this.http.send(JSON.stringify(data))
}


// Make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true)
  this.http.setRequestHeader('Content-type', 'application/json')

  let self = this
  this.http.onload = function() {
      callback(null, self.http.responseText)
  }

  this.http.send(JSON.stringify(data))
}


// Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true)

  let self = this // this brings 'this' into the onload function scope via new variable 'self'
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post deleted')
    } else {
      callback('Custom Error: ' + self.http.status)
    }
  }

  this.http.send()
}