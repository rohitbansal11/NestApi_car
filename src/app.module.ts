import { Module } from '@nestjs/common';
import { CarController } from "./car/car.controller";
import { CarModule } from './car/car.module';
import { CarService } from './car/car.service';
import { StudentModule } from './student/student.module';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Rohit:1111@cluster0.syz8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    CarModule,
     StudentModule,
      TodoModule],
  
})
export class AppModule {}
