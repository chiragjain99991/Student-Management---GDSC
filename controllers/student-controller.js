const StudentService = require("./services/student-service")
class StudentControler{

    async createStudent(req, res){
        const { name, division, id, year} = req.body
        if(!name || !division || !id || !year){
            return res.status(400).send({ message:"all fields are required"})
        }
        let student;
        try{
            const findStudent = await StudentService.findStudentById({id})
            if(findStudent){
                return res.status(400).json({msg:`User with id ${id} already exists`})
            }else{
                student = await StudentService.create({name, division, id, year})
                return res.status(200).json(student)
            }
            
        }catch(err){
            return res.status(500).send({error:err.message})
        }     
        
    } 

    async findStudentById(req, res){
        const { studentId } = req.params;
        if(!studentId){
            return res.status(400).send({ msg:"id is required"})
        }
        const id = String(studentId)
        try{
            const findStudent = await StudentService.findStudentById({id})
            if(findStudent){
                return res.status(200).json(findStudent)
            }else{
                return res.status(500).json({msg:"User doesn't exist"})
            }
            
        }catch(err){
            console.log(err)
        }
    }


    async deleteStudent(req, res){
        const { studentId } = req.params;
        if(!studentId){
            return res.status(400).send({ msg:"id is required"})
        }
        const id = String(studentId)
        try{      
                const student = await StudentService.delete({id});
                if(student){
                    return res.status(200).json({msg:"user deleted successfully"})
                }else{
                    return res.status(500).json({msg:"User doesn't exist"})
                }
            
        }catch(err){
            console.log(err)
        }
    }


    async updateStudent(req, res){
        let { studentId } = req.params;
        const { name, division, id, year} = req.body
        if(!studentId){
            return res.status(400).send({ msg:"id is required"})
        }
        studentId = String(studentId)
        try{      
                const student = await StudentService.update({studentId, name, division, id, year});
                if(student){
                    return res.status(200).json({msg:"user updated successfully", student})
                }else{
                    return res.status(500).json({msg:"User doesn't exist"})
                }
            
        }catch(err){
            console.log(err)
        }
    }

    async getAllStudentsByDiv(req, res){
        const { division } = req.params;
        try{      
            const students = await StudentService.allStudentsByDiv({ division });
            return res.status(200).json(students)
        
        }catch(err){
            console.log(err)
        }
    }

    async getAllStudents(req, res){
        try{      
            const students = await StudentService.allStudents();
            return res.status(200).json(students)
        
        }catch(err){
            console.log(err)
        }
    }

}

module.exports = new StudentControler()