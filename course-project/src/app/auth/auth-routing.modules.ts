import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const authRoutes: Routes = [
    { path: 'signup', component: SingupComponent },
    { path: 'signin', component: SinginComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRountingModule {}
