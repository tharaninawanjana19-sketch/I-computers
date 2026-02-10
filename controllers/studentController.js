import Student from "../models/student.js";

export function createStudent(req,res){
    const newStudent = new Student({
        name : req.body.name,
        age : req.body.age,
        city : req.body.city
    });
        

  newStudent.save().then(()=> {
            res.json({
                Message : "Student Created Sucessfully",
            });
        }).catch((error) => {
            console.error("Enter creating student:", error);
        });
}

export async function createStudentAsync(){
    try{ 
        const newStudent = new Student({
        name : req.body.name,
        age : req.body.age,
        city : req.body.city
    });
        

  await newStudent.save()
  res.json({
    Message: "Student created Sucessfully",
  });

    }catch(error){
        console.error("Enter creating student:", error);
    }
   

}
export function getStudents(req,res){

    Student.find().then(
        (students)=>{
            
            res.json(students)
            
        }
    )
}
