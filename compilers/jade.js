module.exports = function (raw, cb) {
  try {
    var jade = require('jade')
  } catch (err) {
    return cb(err)
  }
  try {
    var html = jade.compile(raw)({})
  } catch (err) {
    return cb(err)
  }
  cb(null, html)
}