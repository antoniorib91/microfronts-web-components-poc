import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloFromVueComponent } from './hello-from-vue/hello-from-vue.component';
import { HelloFromReactComponent } from './hello-from-react/hello-from-react.component';
import { HelloFromAngularComponent } from './hello-from-angular/hello-from-angular.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloFromVueComponent,
    HelloFromReactComponent,
    HelloFromAngularComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}
