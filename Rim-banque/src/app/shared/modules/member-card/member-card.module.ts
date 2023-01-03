import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../../components/member-card/member-card.component';



@NgModule({
  declarations: [
    MemberCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MemberCardComponent
]
})
export class MemberCardModule { }
