// https://www.codewars.com/kata/the-supermarket-queue/

function queueTime(customers, n) {
  if (n < 1) return 0;
  if (n === 1) return customers.reduce((acc, customer) => acc + customer, 0);

  const head = customers.slice(0, n);
  const tail = customers.slice(n);
  const lines = tail.reduce((acc, customer) => {
    const minIndex = acc.indexOf(Math.min(...acc));
    acc[minIndex] += customer;
    return acc;
  }, head);

  return Math.max(...lines);
}
