import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  @Input() title: string = '';
  @Input() leftWidth: number = 0;
  @Input() rightWidth: number = 0;
  @Input() isOpen: boolean = false;

  constructor() { }

  get left(): string {
    return `0 1 ${this.leftWidth}%`;
  }

  get right(): string {
    return `0 0 ${this.rightWidth}%`;
  }

  ngOnInit(): void {
    this.leftWidth = this.leftWidth === 0 ? (100 - this.rightWidth) : this.leftWidth;
  }
}
