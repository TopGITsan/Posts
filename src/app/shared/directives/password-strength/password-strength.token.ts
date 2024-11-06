import { InjectionToken } from '@angular/core';
import { PasswordEvaluatorFn } from './password-strenght.type';

export const EVALUATOR_FN_TOKEN = new InjectionToken<PasswordEvaluatorFn>(
  'PasswordEvaluatorFn'
);
