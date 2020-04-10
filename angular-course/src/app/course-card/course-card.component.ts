import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';



@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  
  @Input()
  course:Course;

  @Input()
  cardIndex:Number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }
  onCourseViewed(){
    console.log("Card Component button clicked");
    this.courseEmitter.emit(this.course);
  }

  isImageValid(){
    return this.course && this.course.iconUrl;
  }
}
