/**
 * Shared between the form (client) and the server action: the server only
 * accepts the select values the form actually offers, and both sides use
 * the same length limits.
 */

export const SERVICES = [
  'Website',
  'Web platform / application',
  'AI & automation',
  'Consulting',
  'Not sure yet',
] as const;

export const BUDGETS = [
  'Under €3,000',
  '€3,000 – €10,000',
  '€10,000 – €30,000',
  '€30,000+',
  'Not decided yet',
] as const;

export const LIMITS = {
  name: 100,
  email: 254,
  message: 5000,
} as const;

/** Why a submission was refused — the form turns each into a message. */
export type ContactResult =
  | { ok: true }
  | { ok: false; reason: 'captcha' | 'invalid' | 'rate' | 'send' };
