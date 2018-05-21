function findMatching(drivers, findName) {
  drivers.filter(function (name) {return name.toLowerCase() === findName.toLowerCase();});
}
