import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  // path: "content",
  // // this handles the content li and content detail
  // loadChildren: () =>
  // import("")
  // .then((c) => c.ContentModule),
  // },
  // { path: 'my-lazy', loadChildren: () => import('./my-lazy-module/my-lazy-module.module').then(m => m.MyLazyModuleModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
