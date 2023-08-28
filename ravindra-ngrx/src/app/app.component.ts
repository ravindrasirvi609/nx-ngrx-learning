import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AuthModule } from 'auth/src/lib/auth.module';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainNavComponent, AuthModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ravindra-ngrx';
}
