import { Injectable } from '@angular/core';

/**
 * Serviço de validação de inputs seguindo OWASP
 * Previne injection attacks, XSS e valida dados de entrada
 */
@Injectable({
  providedIn: 'root',
})
export class InputValidatorService {
  /**
   * Valida e sanitiza email
   * @param email - Email a ser validado
   * @returns Email sanitizado ou null se inválido
   */
  validarEmail(email: string): string | null {
    if (!email || typeof email !== 'string') {
      return null;
    }

    // Remove espaços e caracteres de controle
    // eslint-disable-next-line no-control-regex
    const sanitized = email.trim().replace(/[\x00-\x1F\x7F]/g, '');
    
    // Limita tamanho (RFC 5321)
    if (sanitized.length > 254) {
      return null;
    }

    // Valida formato básico de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized)) {
      return null;
    }

    // Previne caracteres perigosos
    if (/[<>"'%;()&+]/.test(sanitized)) {
      return null;
    }

    return sanitized.toLowerCase();
  }

  /**
   * Valida e sanitiza telefone
   * @param telefone - Telefone a ser validado
   * @returns Telefone sanitizado ou null se inválido
   */
  validarTelefone(telefone: string): string | null {
    if (!telefone || typeof telefone !== 'string') {
      return null;
    }

    // Remove caracteres não numéricos (exceto + no início)
    let sanitized = telefone.trim();
    if (sanitized.startsWith('+')) {
      sanitized = '+' + sanitized.substring(1).replace(/\D/g, '');
    } else {
      sanitized = sanitized.replace(/\D/g, '');
    }

    // Valida tamanho (10-15 dígitos conforme ITU-T E.164)
    if (sanitized.length < 10 || sanitized.length > 15) {
      return null;
    }

    return sanitized;
  }

  /**
   * Valida e sanitiza nome
   * @param nome - Nome a ser validado
   * @returns Nome sanitizado ou null se inválido
   */
  validarNome(nome: string): string | null {
    if (!nome || typeof nome !== 'string') {
      return null;
    }

    // Remove espaços extras e caracteres de controle
    let sanitized = nome.trim().replace(/\s+/g, ' ');
    
    // Remove caracteres de controle
    // eslint-disable-next-line no-control-regex
    sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');

    // Valida tamanho
    if (sanitized.length < 2 || sanitized.length > 100) {
      return null;
    }

    // Permite apenas letras, espaços, hífens e apóstrofes
    if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(sanitized)) {
      return null;
    }

    return sanitized;
  }

  /**
   * Valida e sanitiza texto genérico (título, descrição)
   * @param texto - Texto a ser validado
   * @param maxLength - Tamanho máximo (padrão: 1000)
   * @returns Texto sanitizado ou null se inválido
   */
  validarTexto(texto: string, maxLength = 1000): string | null {
    if (!texto || typeof texto !== 'string') {
      return null;
    }

    // Remove tags HTML
    let sanitized = texto.replace(/<[^>]*>/g, '');
    
    // Remove caracteres de controle
    // eslint-disable-next-line no-control-regex
    sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

    // Valida tamanho
    if (sanitized.length > maxLength) {
      return null;
    }

    // Remove espaços extras
    sanitized = sanitized.trim().replace(/\s+/g, ' ');

    return sanitized;
  }

  /**
   * Valida número inteiro positivo
   * @param valor - Valor a ser validado
   * @returns Número ou null se inválido
   */
  validarNumeroPositivo(valor: string | number): number | null {
    if (typeof valor === 'number') {
      return valor > 0 && Number.isInteger(valor) ? valor : null;
    }

    if (typeof valor !== 'string') {
      return null;
    }

    const num = parseInt(valor, 10);
    if (isNaN(num) || num <= 0) {
      return null;
    }

    return num;
  }

  /**
   * Sanitiza dados do localStorage antes de salvar
   * Previne injection através de dados armazenados
   */
  sanitizarDadosLocalStorage(dados: unknown): string | null {
    try {
      // Converte para string JSON
      const jsonString = JSON.stringify(dados);
      
      // Valida tamanho (previne DoS)
      if (jsonString.length > 10000) {
        return null;
      }

      // Remove caracteres de controle
      // eslint-disable-next-line no-control-regex
      const sanitized = jsonString.replace(/[\x00-\x1F\x7F]/g, '');
      
      return sanitized;
    } catch {
      // Erro ao serializar - dados inválidos
      return null;
    }
  }
}

