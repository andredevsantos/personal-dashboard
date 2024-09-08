// Output format example: Monday, 1 January, 2023

export function getDateString(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}
