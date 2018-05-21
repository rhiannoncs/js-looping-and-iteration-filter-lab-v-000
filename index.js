function findMatching(drivers, findName) {
  return drivers.filter(function (name) {return name.toLowerCase() === findName.toLowerCase();});
}
