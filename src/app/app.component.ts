import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'dynamic-wrapper';
  isOpen: boolean = false;

  leftWidth: number = 60;
  rightWidth: number = 40;
  mode: 'side' | 'over' = 'side';
  modes = ['side', 'over'];

  open(): void {
    this.isOpen = true;
  }

  cancel(): void {
    this.isOpen = false;
  }
}
