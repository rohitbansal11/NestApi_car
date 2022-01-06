import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from "./car.dto";

@Controller('car')
export class CarController {
    constructor(private carService: CarService){}

    @Get()
    public getCars(){
     return   this.carService.getCars();
    }

   









}
