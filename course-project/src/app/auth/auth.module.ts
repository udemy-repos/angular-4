import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRountingModule } from './auth-routing.modules';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        SinginComponent,
        SingupComponent
    ],
    imports: [
        CommonModule,
        AuthRountingModule,
        FormsModule
    ],
    exports: [SingupComponent]
})
export class AuthModule { }
