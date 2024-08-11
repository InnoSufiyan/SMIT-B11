const students = [
    {
        id: 1,
        name: 'aqib',
        score: 80,
        favouriteSubject: 'Maths'
    }, {
        id: 2,
        name: 'aqib',
        score: 87,
        favouriteSubject: 'English'
    }, {
        id: 3,
        name: 'umer',
        score: 75,
        favouriteSubject: 'Urdu'
    }, {
        id: 4,
        name: 'sufiyan',
        score: 67,
        favouriteSubject: 'sindhi'
    }, {
        id: 5,
        name: 'zain',
        score: 99,
        favouriteSubject: 'physics'
    }
]

const updatedStudents = students.map(
    function (saleem) {
        console.log(saleem, "==>> saleem")
        return {
            role: saleem.name == 'sufiyan' ? 'teacher' : 'student',
            ...saleem
        }
    }
)

console.log(updatedStudents)


const lowScores = updatedStudents.filter((anarkali) => {
    return anarkali.score <= 80 && anarkali.role == 'student'
})

console.log(lowScores)

const specificName = students.find((student)=>{
    return student.name == 'aqib' && student.id == 1
})

console.log(specificName)




