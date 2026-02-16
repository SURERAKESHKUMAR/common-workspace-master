export class HelperUtil {

  static formatCurrency(amount: number, currency: string = '₹'): string {
    return `${currency}${amount.toFixed(2)}`;
  }

  static formatDate(date: Date): string {
    return date.toLocaleDateString();
  }

  static generateUUID(): string {
    return 'UUID-' + Math.random().toString(36).substring(2, 10);
  }
   // 🔥 NEW FUNCTION
  static calculateTax(amount: number, percentage: number): number {
    return (amount * percentage) / 100;
  }
}
