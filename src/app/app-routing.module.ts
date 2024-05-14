import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { ChatComponent } from './vistas/chat/chat.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'chat/:id',
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
