import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloFromVueComponent } from './hello-from-vue/hello-from-vue.component';
import { HelloFromReactComponent } from './hello-from-react/hello-from-react.component';
import { HelloFromAngularComponent } from './hello-from-angular/hello-from-angular.component';


const routes: Routes = [
  {
    path: 'front3',
    component: HelloFromVueComponent
  },
  {
    path: 'front2',
    component: HelloFromReactComponent
  },
  {
    path: '',
    component: HelloFromAngularComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

