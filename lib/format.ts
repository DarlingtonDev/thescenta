export default function formatNumber(amount: number | string) {
  const newNumber = Number(amount);
  if (isNaN(newNumber)) return amount;
  return new Intl.NumberFormat("en-US", {
    // minimumFractionDigits: 2,
    // maximumFractionDigits: 2,
  }).format(newNumber);
}
