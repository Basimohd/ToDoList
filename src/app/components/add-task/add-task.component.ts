import { Component,Output,EventEmitter } from '@angular/core';
import { task } from 'src/app/task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  text!: string;
  day!: string;
  reminder:boolean = false;
  showAddTask:boolean = false;
  subscription!:Subscription;

  @Output() addTask:EventEmitter<task> = new EventEmitter();


  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe(
      (value)=>{this.showAddTask=value}
      )
  }


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
