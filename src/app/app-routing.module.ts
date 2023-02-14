import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponentComponent } from './blank-component/blank-component.component';
import { MyLazyModuleComponent } from './my-lazy-module/my-lazy-module.component';

const routes: Routes = [
  // {
  // path: "content",
  // // this handles the content li and content detail
  // loadChildren: () =>
  // import("")
  // .then((c) => c.ContentModule),
  // },
  // { path: 'my-lazy', loadChildren: () => import('./my-lazy-module/my-lazy-module.module').then(m => m.MyLazyModuleModule) }
    { path: '', redirectTo: '/my-lazy-module', pathMatch: "full" },
    { path: ":id", component: BlankComponentComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
