// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(driver=> driver.lowerCase()===name.tOLowerCase());
};

const fuzzyMatch = (drivers, letters) => {
    return drivers.filter(driver => driver.toLoweCase().startsWith(letters.toLoweCase()));
};

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver .name.tOLowerCase()=== name.tOLowerCase());
};

const drivers = [
    { name: "Bobby", hometown: "Bungoma"},
    { name: "Brianna", hometown: "Nakuru"},
    { name: "Kevin", hometown: "Eldoret"},
    { name: "Mary", hometown: "Nairobi"},

];

console.log(findMatching(drivers.map(driver => driver.name), "Bobby"));
console.log(fuzzyMatch(drivers.map(driver => driver.name), "Kevin"));
console.log(matchName(drivers, "Mary"));
