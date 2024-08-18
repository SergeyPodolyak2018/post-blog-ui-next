import { TParametr } from '@/app/lib/definitions';

export const addParamsToUrl = (url: string, params?: TParametr[]): string => {
  if (!params || params.length === 0) return url;
  const paramsStrigs = [];
  for (const item of params) {
    paramsStrigs.push(`${item.name}=${item.value}`);
  }
  return url + '?' + paramsStrigs.join('&');
};
