import { Body, Controller, Delete, Get, Param, Post, Put, Query  } from '@nestjs/common';
import {StudentService} from './student.service';
import {StSchema} from './StSchema'

@Controller('student')
export class StudentController {
    constructor(private studentService:StudentService){}

    @Get()
    public getAllStudent(){
       return this.studentService.getAllStudent();
    }
    @Post()
    public postNewStudent(@Body() newstudent:StSchema){
        return this.studentService.postNewStudent(newstudent);

    }

    @Get(':id')
    public async getStudentById(@Param('id') id:number){
        return await this.studentService.getStudentById(id)
    }

    @Delete(":id")
    public async deleteStudentById(@Param('id') id:number){
            return await this.studentService.deleteStudentById(id)

    }

    @Put(":id")
    public async putStudentById(@Param('id') id:number , @Query() query){
        const propertyName=query.name;
        const propertyValue=query.value;
        return await this.studentService.putStudentById(id,propertyName,propertyValue)


    }

   

}
