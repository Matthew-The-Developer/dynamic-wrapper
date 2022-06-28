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

  legacy(): void {
    this.leftWidth = 60;
    this.rightWidth = 40;
    this.mode = 'over';
  }

  side(): void {
    this.leftWidth = 100;
    this.rightWidth = 40;
    this.mode = 'side';
  }

  over(): void {
    this.leftWidth = 100;
    this.rightWidth = 40;
    this.mode = 'over';
  }
}
