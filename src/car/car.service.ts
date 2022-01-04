import { Injectable , HttpException } from '@nestjs/common';
import { resolve } from 'path/posix';
import { retry } from 'rxjs';
import { CARS } from "./car.mock";

@Injectable()
export class CarService {
 private cars =CARS;
 
 
    public async getCars(){
        return this.cars
    }
    public postCar(car){
        return this.cars.push(car)

    }

    public getCarById(id:number): Promise<any>{
        const carId =Number(id);
        return new Promise((resolve)=>{
        const car =this.cars.find((car)=>car.id===carId);
            if(car){
               
                return resolve(car);
            }else{
                throw new HttpException('Not Found', 404);
                
            }

        })
        
       

    }
    public deleteCarById(id:number): Promise<any>{
        const carId =Number(id)
        return new Promise((resolve)=>{
            const index =this.cars.findIndex((car)=>car.id===carId);
        if(index == -1){
            throw new HttpException('Not Found', 404);
            
          
        }else{
            this.cars.splice(index ,1)
            return resolve(this.cars)
            
            
        }

        })
        

    }

    public putCarById(id:number, propertyName:string , propertValue:string): Promise<any>{
        const carId =Number(id)
        return new Promise((resolve)=>{
            const index =this.cars.findIndex((car)=>car.id===carId);

        if(index === -1){
           
            throw new HttpException('Not Found', 404);


        }else{
            this.cars[index][propertyName]= propertValue;
            return  resolve(this.cars)
            
        }

        })
        

    }
}
