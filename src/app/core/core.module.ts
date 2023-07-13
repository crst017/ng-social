import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [FooterComponent, NavbarComponent],
})
export class CoreModule {}
