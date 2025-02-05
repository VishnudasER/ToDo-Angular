import { Component , OnInit , Output , EventEmitter } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Tasks';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter()
  text : string = '';
  day : string  = '';
  reminder : boolean = false;
  showAddTask? : boolean ; 
  subscription? : Subscription
  
  constructor(private uiservice : UiService){
    this.subscription = this.uiservice.onToggle().
    subscribe(value=>this.showAddTask =value)
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a task")
      return
    }

    const newTask = {
      text: this.text,
      day : this.day,
      reminder:this.reminder 
    }


    //@todo -emit event

    this.onAddTask.emit(newTask)

    this.text ='';
    this.day ='';
    this.reminder=false ;

  }
}
