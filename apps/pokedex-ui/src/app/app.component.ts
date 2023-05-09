import { Component } from '@angular/core';

@Component({
  selector: 'podex-root',
  template: `
    <mat-toolbar color="primary" class="flex flex-row uppercase justify-between">
      <span>the {{ title }}</span>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styles: [''],
})
export class AppComponent {
  public readonly title = 'pokedex-ui'.split('-')[0];
}
