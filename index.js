function findMatching(drivers, findName) {
  return drivers.filter(function (name) {return name.toLowerCase() === findName.toLowerCase();});
}

function fuzzyMatch(drivers, letters) {
  const lettersLength = letters.length
  return drivers.filter(function (name) {return  })
}
