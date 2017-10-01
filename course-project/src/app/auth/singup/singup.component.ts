import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email,
      password = form.value.password;
    this.authService.signUpUser(email, password);
    this.router.navigate(['/recipes'], { relativeTo: this.route });
  }

}
