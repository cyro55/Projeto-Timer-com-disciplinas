import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TimerService } from './timer.service';
import { MateriasComponent } from './materias/materias.component';
import { MatfavService } from './matfav.service';
import { MatfavComponent } from './matfav/matfav.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'materias', component:MateriasComponent},
      {path:'matfav', component:MatfavComponent}
    ]) ],
  declarations: [ AppComponent, HelloComponent, MatfavComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TimerService, MatfavService]
})
export class AppModule { }
