import { Component } from '@angular/core';
import {Task} from '../../Tasks'
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component'
import {AddTaskComponent} from '../../components/add-task/add-task.component'
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AddTaskComponent,CommonModule , TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks: Task[] = []
  constructor(private taskService : TaskService){}


  ngOnInit() : void{
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks = tasks))
  }

  deleteTask(task : Task){
    this.taskService
    .deletTasks(task)
    .subscribe(
      ()=>(this.tasks=this.tasks.filter( t =>t.id !==task.id)));

  }

  toggleReminder(task : Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }


  addTask(task : Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)))

    console.log(task)
  }



}
