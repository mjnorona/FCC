var firebase = require('firebase')

module.exports = {
    createCourse: function(course) {
        var coursesRef = firebase.database().ref('courses/').child("Spring 2018")

        // console.log('reference: ', coursesRef)
        coursesRef.push().set({
            name: course.name,
            days: course.days,
            startTime: course.startTime,
            endTime: course.endTime,
            students: []
        })
        .catch(function(error){
            var errorCode = error.computed
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
        })
    },
    createAllCourses: function(req){

        var promise = new Promise((resolve, reject) => {
            var coursesRef = firebase.database().ref('courses/').child("Spring 2018")
            var userRef = firebase.database().ref('users/').child(req.session.user['id'])
            req.session.courses.forEach(function (course) {


                coursesRef.orderByChild("name").equalTo(course['name']).once("value", function (snapshot) {
                    // console.log("key: " + snapshot.key)
                    // console.log("values: "+JSON.stringify(snapshot.val()))
                    var courseId;
                    if (!snapshot.val()) {
                        var pushedCourseRef = coursesRef.push()
                        courseId = pushedCourseRef.key
                        pushedCourseRef.set({
                            name: course.name,
                            days: course.days,
                            startTime: course.startTime,
                            endTime: course.endTime,
                            students: [req.session.user['id']]
                        })
                            .catch(function (error) {
                                var errorCode = error.computed
                                var errorMessage = error.message;
                                console.log(errorCode)
                                console.log(errorMessage)
                            })

                        //GET THE COURSE ID!!!!
                        console.log("course Id: " + JSON.stringify(pushedCourseRef.key))

                    } else {

                        console.log("course exists")
                        //get course id
                        var newCourse
                        snapshot.forEach(function (data) {
                            var item = {
                                key: data.key,
                                students: data.val().students,
                            }
                            item['students'].push(req.session.user['id'])
                            newCourse = item
                        })

                        //store the user id in the course
                        courseId = newCourse['key']
                        console.log("COURSE ID: " + courseId)
                        var studentCourseRef = firebase.database().ref('courses/').child("Spring 2018").child(newCourse['key']).child("students")
                        studentCourseRef
                            .transaction(function (students) {
                                students = newCourse['students']
                                return students
                            })

                        //WORK ON THIS!!!!

                    }
                    var userRef = firebase.database().ref('users/').child(req.session.user['id'])
                    userRef.once("value", function (snapshot) {
                        if (snapshot.hasChild("courses")) {
                            console.log("has courses")
                            userRef.child("courses").transaction(function (courses) {

                                console.log("check if array: " + Array.isArray(courses))
                                if (courses) {
                                    courses.push(courseId)
                                }
                                return courses
                            })
                        } else {
                            userRef.transaction(function (user) {
                                if (user) {
                                    if (!user.courses) {
                                        user.courses = [courseId]
                                    } else {
                                        user.courses.push(courseId)
                                    }

                                }
                                return user
                            })
                            console.log("doesn't have courses")

                        }
                    })
                })
            })
            setTimeout(()=>resolve(), 1000);
        })

        return promise
    },
   async getAllCourses(req,res,next){
        var promise = new Promise((resolve, reject)=>{
            var userRef = firebase.database().ref('users').child(req.session.user['id'])
            var coursesIds=[]

            var courseData=[]
            req.session.courses = []
            console.log("user id in session: "+req.session.user['id'])
            userRef.once("value", function(snapshot){
                coursesIds = snapshot.val().courses
                console.log("snapshot check: ",JSON.stringify(snapshot.val()))
            }).then(value =>{

                // console.log("course ids: ", coursesIds)
                coursesIds.forEach(function(id){
                    var courseRef = firebase.database().ref('courses/').child("Spring 2018").child(id)
                    console.log("the id: " + id)
                    !function outer(courseData){
                        console.log(id)

                        courseRef.once("value", function(courseSnapshot){

                            // courseData.push(courseSnapshot.val())
                            var inputCourse = courseSnapshot.val()
                            console.log(inputCourse)
                            inputCourse['id'] = id
                            req.session.courses.push(inputCourse)
                            courseData.push(inputCourse);
                            if (coursesIds.length == courseData.length){
                                console.log("course data: " +JSON.stringify(courseData))


                                resolve(courseData);
                               // return promise;
                               // return courseData
                            }
                        })

                    }(courseData)
                // console.log("course names: " +req.session.courseNames)

                })

            })
        })

        // resolve(courseNames);
        return promise;
       // res.redirect('/homepage')
    },

    //test this later
    getMutualCourses(req,res,next, visitedId){
        var visitedRef = firebase.database().ref('users').child(visitedId)
        var courseIds = []
        visitedRef.once("value", function(snapshot){
            courseIds = snapshot.val().courses
        }).then(value =>{
            console.log("course ids: ", coursesIds)
            var visitorCourses = []
            for (var i = 0; i < courseIds.length; i++){
                for (var j = 0; j< req.session.courses.length; j++){
                    if (courseIds[i] == req.session.courses[j]['id']){
                        visitorCourses.push(req.session.courses[j])
                    }
                }
            }
            return visitedCourses
        })
    }

}
