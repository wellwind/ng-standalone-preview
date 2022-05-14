import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-root',
  template: `
  <h1>Todo List</h1>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'ngx-14-standalone-demo';
}
