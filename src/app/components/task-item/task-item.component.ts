import { Component,Input,Output,EventEmitter } from '@angular/core';
import { task } from '../../task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  faTimes = faTimes;
  @Input() task! : task;
  @Output() onDeleteTask:EventEmitter<task> = new EventEmitter()
  @Output() onToggleReminder:EventEmitter<task> = new EventEmitter()
  onDeleteClick(task:task){
    this.onDeleteTask.emit(task)
  }
  onToggle(task:task){
    this.onToggleReminder.emit(task)
  }
}
