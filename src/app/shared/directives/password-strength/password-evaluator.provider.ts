import { PasswordEvaluatorFn } from './password-strenght.type';

export function providePasswordEvaluatorFn(evaluatorFn: PasswordEvaluatorFn) {
  return [
    {
      provide: evaluatorFn,
      useValue: evaluatorFn,
    },
  ];
}
