import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.listenParams();
  }
  private listenParams() {
    this.route.queryParams.subscribe((params: any) =>
      this.validateCode(params)
    );
  }

  private validateCode({code} : { code: any}) {
    if (code) {
      const params = {
        customerName: '',
        code,
      };
      
      this.authService.intermediateServerLogin(params).subscribe(
        (res: any) => {
          const loginInfo = { ...res };
          // const { loginName = '', fleetId = '', customerName = '' } = loginInfo || {};
          console.log(loginInfo)
        },
        () => {
          this.authService.logout();
        }
      );

      this.router.navigateByUrl('home');
    } else {
      this.authService.authorizeUser();
    }
  }
}
