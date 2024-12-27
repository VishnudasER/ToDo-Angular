import { Component , Input , Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Tasks';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task?:Task ;
  @Output() onDeleteTask : EventEmitter<Task> =new EventEmitter()
  faTimes =faTimes


  @Output() onToggleReminder : EventEmitter<Task> =new EventEmitter()
 

  onDelete(task:any){
    this.onDeleteTask.emit(task)
  }

  onToggle(task:any){
    this.onToggleReminder.emit(task)
  }
}
