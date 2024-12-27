import { Component  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'
import {ButtonComponent} from './components/button/button.component'
import { TasksComponent } from './components/tasks/tasks.component'
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './components/task-item/task-item.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,RouterModule,HttpClientModule,FontAwesomeModule,RouterOutlet,HeaderComponent, ButtonComponent , TasksComponent,CommonModule, TaskItemComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})







export class AppComponent {
  
}
