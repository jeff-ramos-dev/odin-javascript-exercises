const findTheOldest = function(people) {
    const agedPeople = people.map(person => {
        if (!person.yearOfDeath) {
            age = new Date().getFullYear() - person.yearOfBirth
        } else {
            age = person.yearOfDeath - person.yearOfBirth
        }
        return {
            "age": age,
            ...person
        }
    }) 
    return agedPeople.reduce((oldest, currentPerson) => {
        return currentPerson.age > oldest.age ? currentPerson : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
