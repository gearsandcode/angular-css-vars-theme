import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ThemeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
