import {
  PasswordEvaluatorFn,
  PasswordStrength,
} from './password-strenght.type';

export const defaultEvaluatorFn: PasswordEvaluatorFn = (
  password: string
): PasswordStrength => {
  if (password.length == 0) {
    return 'no';
  } else if (password.length < 6) {
    return 'weak';
  } else if (password.length < 10) {
    return 'medium';
  }
  return 'strong';
};
