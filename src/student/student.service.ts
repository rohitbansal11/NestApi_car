import { Injectable ,HttpException } from '@nestjs/common';
import {Student} from './studentData'

@Injectable()
export class StudentService {
    private student = Student;

    public  getAllStudent(){
        if(this.student){
            return this.student;
        }else{
            throw new HttpException('Not Found' , 404)
        }
        

    }
    public postNewStudent(newstudent){
        

         if(newstudent){
            this.student.push(newstudent)
            
            let SingleStudent=this.student.filter((e)=>{
                return e.id == newstudent.id
            })

                return SingleStudent;
         }else{
            throw new HttpException('Not Found', 404);
         }
         
        
    }

    public getStudentById(id:number): Promise<any>  {
        const Id=Number(id)
        return new Promise((resolve)=>{
            const singleStudent = this.student.find((w)=>w.id==id)
            if(singleStudent){
                return  resolve(singleStudent)
            }else{
                throw new HttpException('Not Found ' , 404)
            }
        })



    }

    public deleteStudentById(id:number) :Promise<any>{
        const Id= Number(id);
        return new Promise((resolve)=>{
            const index =this.student.findIndex((q)=>q.id == Id)
            if(index == -1){
                throw new HttpException('Not Found' ,404)
                
            }else{
                this.student.splice(index ,1)
                return resolve(this.student)
            }
        })
    }

    public putStudentById(id:number , propertyName:string , propertyValue:string): Promise<any>{
            const Id = Number(id);
            return new Promise((resolve)=>{
                const index  = this.student.findIndex((q)=>q.id==Id);
                const Singlestudentput =this.student.find((q)=>q.id==Id)
                if(index == -1){
                    throw new HttpException("not Found" , 404)
                    
                }else{
                    this.student[index][propertyName]=propertyValue
                    return resolve(Singlestudentput);

                }
            })


    }






}
