import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

courses=COURSES;
title = COURSES[1].description;
price = 9.992337447;
rate = 0.67;
course = COURSES[1];
startDate = new Date(2020, 0 , 1);
onCardSelected(course:Course){
  console.log("Bubbled up event",course);
}

}
