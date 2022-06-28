import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewChecked, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';
import { of } from 'rxjs';
import { RightDirective } from '../directives/right.directive';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, AfterViewChecked {
  @Input() title: string = '';
  @Input() leftWidth: number = 0;
  @Input() rightWidth: number = 0;
  @Input() isOpen: boolean = false;
  @Input() mode: 'side' | 'over' = 'side';

  @ContentChildren(RightDirective, { descendants: true, read: ElementRef }) rights: QueryList<ElementRef> = new QueryList<ElementRef>();

  height = 'auto';

  constructor(private cdref: ChangeDetectorRef) { }


  get left(): string {
    return `0 1 ${this.leftWidth}%`;
  }

  get right(): string {
    return `0 0 ${this.rightWidth}%`;
  }

  get rightChildren () {
    if ( this.rights && this.rights.length ) {
      return this.rights.map((elRef:ElementRef) => elRef.nativeElement);
    }
    
    return [];
  }

  ngOnInit(): void {
    this.leftWidth = this.leftWidth === 0 ? (100 - this.rightWidth) : this.leftWidth;
  }

  ngAfterViewChecked(): void {
    const observable = of(this.rightChildren);
    observable.subscribe(right => {
      console.log(right[0].offsetHeight);
      this.height = this.isOpen ? `calc(${right[0].offsetHeight}px + 2rem)` : 'auto';
      this.cdref.detectChanges();
    });
  }
}
