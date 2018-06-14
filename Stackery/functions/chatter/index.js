module.exports = function handler(message, context, callback) {
  console.dir(message);

  callback(context, message)
}