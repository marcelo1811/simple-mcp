export function generateRandomCustomersArray(
  length: number = 10
): Array<{ year: number; totalCustomers: number }> {
  const array: Array<{ year: number; totalCustomers: number }> = [];
  const currentYear = new Date().getFullYear();

  for (let i = 0; i < length; i++) {
    array.push({
      year: currentYear - i,
      totalCustomers: Math.floor(Math.random() * 10000) + 1,
    });
  }
  return array;
}

export function generateRandomCalendarEvents(): Array<{ title: string; date: string }> {
  const events: Array<{ title: string; date: string }> = [];
  const currentDate = new Date();
  for (let i = 0; i < 10; i++) {
    events.push({ title: `Event ${i + 1}`, date: currentDate.toISOString() });
  }
  return events;
}
