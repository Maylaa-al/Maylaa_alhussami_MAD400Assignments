import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { path: '', redirectTo: '/content', pathMatch: "full" },
    // { path: "content", component: BlankComponentComponent },
    // { path: "content/:id", component: BlankComponentComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
