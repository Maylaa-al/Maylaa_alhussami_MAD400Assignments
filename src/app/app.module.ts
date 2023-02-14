import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { BlankComponentComponent } from './blank-component/blank-component.component';
import { MyLazyModuleComponent} from './my-lazy-module/my-lazy-module.component';
@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    ContentListComponent,
    ContentListItemComponent,
    BlankComponentComponent,
    MyLazyModuleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
