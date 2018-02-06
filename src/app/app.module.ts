import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ComponentAComponent } from './header/component-a/component-a.component';
import { ComponentBComponent } from './header/component-b/component-b.component';
import { ComAComponent } from './header/com-a/com-a.component';
import { ComBComponent } from './header/com-b/com-b.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComAComponent,
    ComBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"ca", component:ComponentAComponent},
      {path:"cb",component:ComponentBComponent},
      {path:"cc",component:ComAComponent },
      {path:"cd",component:ComBComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
