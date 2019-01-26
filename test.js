const {
    hello
} = require('./handler');

(async() => {
  const response = await hello()
  console.log(response)
})()
