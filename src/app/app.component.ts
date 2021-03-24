import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  styles = ['solid', 'regular'];
  largeFontSizes = [60, 44, 32];
  smallFontSizes = [24, 18];
  colors = ['#000000', '#FF7900', '#8F8F8F', '#CD3C14'];
  selectedColor: string = this.colors[0];

  constructor() {}

  isSelectedColor(color: string): boolean {
    return this.selectedColor === color;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

}
