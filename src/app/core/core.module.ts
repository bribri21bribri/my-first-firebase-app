import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHttpService } from './service/base-http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BaseHttpService,
  ]
})
export class CoreModule {
   constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
   }
}
