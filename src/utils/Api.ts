export const apiRequest = () => {
  const url = 'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json';
  return fetch(url).then((res) => res.json());
};
