import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.email,
      password = form.value.password;

    this.authService.signInUser(email, password);
    this.router.navigate(['/recipes'], { relativeTo: this.route });
  }
}
