import { Injectable } from '@angular/core';

/**
 * Serviço de notificações seguro para substituir alert()
 * Previne XSS e fornece interface consistente para mensagens
 */
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  /**
   * Exibe uma mensagem de sucesso de forma segura
   * @param message - Mensagem a ser exibida (será sanitizada)
   */
  showSuccess(message: string): void {
    this.showMessage(message);
  }

  /**
   * Exibe uma mensagem de erro de forma segura
   * @param message - Mensagem a ser exibida (será sanitizada)
   */
  showError(message: string): void {
    this.showMessage(message);
  }

  /**
   * Exibe uma mensagem de informação de forma segura
   * @param message - Mensagem a ser exibida (será sanitizada)
   */
  showInfo(message: string): void {
    this.showMessage(message);
  }

  /**
   * Exibe uma mensagem de aviso de forma segura
   * @param message - Mensagem a ser exibida (será sanitizada)
   */
  showWarning(message: string): void {
    this.showMessage(message);
  }

  /**
   * Método privado para exibir mensagens de forma segura
   * Sanitiza a mensagem para prevenir XSS
   * @param message - Mensagem a ser exibida
   */
  private showMessage(message: string): void {
    // Sanitiza a mensagem removendo caracteres perigosos
    const sanitizedMessage = this.sanitizeMessage(message);
    
    // Usa alert() como fallback, mas com mensagem sanitizada
    // Em produção, considere usar uma biblioteca de notificações como ngx-toastr
    alert(sanitizedMessage);
  }

  /**
   * Sanitiza mensagens para prevenir XSS
   * Remove tags HTML e caracteres perigosos
   */
  private sanitizeMessage(message: string): string {
    if (!message) return '';
    
    // Remove tags HTML
    let sanitized = message.replace(/<[^>]*>/g, '');
    
    // Remove caracteres de controle e caracteres perigosos
    // eslint-disable-next-line no-control-regex
    sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
    
    // Limita o tamanho da mensagem para prevenir DoS
    if (sanitized.length > 500) {
      sanitized = sanitized.substring(0, 500) + '...';
    }
    
    return sanitized;
  }

  /**
   * Exibe uma confirmação de forma segura
   * @param message - Mensagem de confirmação (será sanitizada)
   * @returns true se o usuário confirmou, false caso contrário
   */
  confirm(message: string): boolean {
    const sanitizedMessage = this.sanitizeMessage(message);
    return confirm(sanitizedMessage);
  }
}

