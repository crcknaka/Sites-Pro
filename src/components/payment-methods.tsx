import {
  Bitcoin,
  Building2,
  Coins,
  CreditCard,
  Smartphone,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

const METHODS: { name: string; icon: LucideIcon }[] = [
  { name: 'Visa', icon: CreditCard },
  { name: 'Mastercard', icon: CreditCard },
  { name: 'Apple Pay', icon: Smartphone },
  { name: 'Google Pay', icon: Smartphone },
  { name: 'PayPal', icon: Wallet },
  { name: 'SEPA', icon: Building2 },
  { name: 'Bank transfer', icon: Building2 },
  { name: 'Wise', icon: Coins },
  { name: 'Revolut', icon: Wallet },
  { name: 'Stripe', icon: CreditCard },
  { name: 'Crypto', icon: Bitcoin },
];

/** Slim "we accept" row — lives in the footer, not between services and work. */
export default function PaymentMethods() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-subtle)]">
        We accept
      </span>
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {METHODS.map(({ name, icon: Icon }) => (
          <li key={name} className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
            <Icon className="h-3.5 w-3.5" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
