import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrettyJsonModule} from 'angular2-prettyjson';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [PrettyJsonModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return ({
      ngModule: SharedModule,
      providers: [

      ]
    } as ModuleWithProviders);
  }
}
