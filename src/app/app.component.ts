import { Component } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  activeTheme = 'oceanBlueThemeProps';

    constructor(private themeService: ThemeService) {
  }

    toggleTheme() {
    // refactor this ugly code :) for demo only
    if (this.activeTheme !== 'deepPurpleThemeProps') {
      this.themeService.setActiveTheme('deepPurpleThemeProps');
      this.activeTheme = 'deepPurpleThemeProps';
    } else {
      this.themeService.setActiveTheme('oceanBlueThemeProps');
      this.activeTheme = 'oceanBlueThemeProps';
    }
  }
}
