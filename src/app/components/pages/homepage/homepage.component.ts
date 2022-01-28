import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/authentication/services/auth-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }
  public logout() {
    this.authService.logout();
  }
}
