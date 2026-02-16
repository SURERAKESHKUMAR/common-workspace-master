export class ValidationUtil {

  static isEmailValid(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static isPasswordStrong(password: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return regex.test(password);
  }

  static isRequired(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
  }
}
