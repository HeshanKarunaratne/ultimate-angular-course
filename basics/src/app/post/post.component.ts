import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {
  @Input() postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('contructor called');
  }
  ngOnChanges() {
    console.log('ngOnChanges() called');
  }
  ngDoCheck() {
    console.log('ngDoCheck() called');
  }
  ngOnInit() {
    console.log('ngOnInit() called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy() called');
  }
}
