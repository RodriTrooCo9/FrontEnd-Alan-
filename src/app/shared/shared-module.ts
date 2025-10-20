import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Spinner } from './components/spinner/spinner';
import { Modal } from './components/modal/modal';



@NgModule({
  declarations: [
    Spinner,
    Modal
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
