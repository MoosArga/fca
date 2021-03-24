import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-entry',
  templateUrl: './icon-entry.component.html',
  styles: [
  ]
})
export class IconEntryComponent implements OnInit {

  @Input() iconName: string = '';
  @Input() iconSize: number = 18;
  @Input() iconColor: string = 'black';

  constructor() { }

  ngOnInit(): void {
  }

}
