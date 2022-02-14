function dateFormat(date) {
  return date.toISOString().slice(0, 19).replace(/ - /g, "/").replace("T", " ");
}

module.exports = dateFormat