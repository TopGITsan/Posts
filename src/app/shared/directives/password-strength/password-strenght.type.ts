export type PasswordStrength = 'no' | 'weak' | 'medium' | 'strong';

export type PasswordEvaluatorFn = (password: string) => PasswordStrength;
