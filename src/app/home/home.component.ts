import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  public onLoginClick() {
    this._router.navigate(['login']);
  }

  public onRegistrationClick() {
    this._router.navigate(['registration']);
  }

  public onFeatureClick() {
    this._router.navigate(['feature']);
  }

  ngOnInit() { }
}
