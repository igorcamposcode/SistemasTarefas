import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);
  private notificationService = inject(NotificationService);

  canActivate(): boolean {
    if (this.authService.estaAutenticado()) {
      return true;
    }

    // Usa NotificationService ao invés de alert() por segurança
    this.notificationService.showWarning('Acesso negado. Faça login primeiro.');
    this.router.navigate(['/login']);
    return false;
  }
}
