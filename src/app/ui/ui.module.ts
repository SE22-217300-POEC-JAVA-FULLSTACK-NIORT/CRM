import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponent } from './components/ui/ui.component';
import { Ui3Component } from './components/ui3/ui3.component';

@NgModule({
  declarations: [UiComponent, Ui3Component],
  imports: [CommonModule],
  exports: [UiComponent, Ui3Component],
})
export class UiModule {}
