import { Component,Output,EventEmitter } from '@angular/core';
import { task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  text!: string;
  day!: string;
  reminder:boolean = false;
  @Output() addTask:EventEmitter<task> = new EventEmitter();

  onSubmit(){
    if(!this.text){
      alert("Task Input is required")
      return
    }
    let InputTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.addTask.emit(InputTask);
    this.text = '';
    this.day = '';
    this.reminder=false;
  }
}
