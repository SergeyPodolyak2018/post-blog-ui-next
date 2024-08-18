import { TBlog, TBlogPatched } from '@/app/lib/definitions';
import { PATH, SUB_PATH } from './const';
import { addParamsToUrl } from '@/app/lib/utils';

export async function fetchBlog() {
  try {
    const url = addParamsToUrl(PATH['api'] + SUB_PATH['blog'], []);

    const data = await fetch(url, {
      signal: AbortSignal.timeout(10000),
    });

    const rez: TBlogPatched[] = await data.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch blogs.');
  }
}

export async function fetchSingleBlog(id: string) {
  try {
    const url = addParamsToUrl(PATH['api'] + SUB_PATH['blog'] + `/${id}`, []);
    console.log('Fetch blog url = ' + url);
    const data = await fetch(url, {
      signal: AbortSignal.timeout(10000),
    });
    console.log(data);

    const rez: TBlogPatched = await data.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch cats.');
  }
}

export async function createPost(data: TBlog) {
  try {
    const url = addParamsToUrl(PATH['api'] + SUB_PATH['create'], []);

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json, text/plain, */*',
      },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(10000),
    });

    const rez: TBlogPatched = await resp.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch cats.');
  }
}
export async function updatePost(id: string, data: TBlog) {
  try {
    const url = addParamsToUrl(PATH['api'] + SUB_PATH['blog'] + `/${id}`, []);

    const resp = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json, text/plain, */*',
      },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(10000),
    });

    const rez: TBlogPatched = await resp.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch cats.');
  }
}

export async function deletePost(id: string) {
  try {
    const url = addParamsToUrl(PATH['api'] + SUB_PATH['blog'] + `/${id}`, []);

    const resp = await fetch(url, {
      method: 'DELETE',
      signal: AbortSignal.timeout(10000),
    });

    const rez: TBlogPatched = await resp.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch cats.');
  }
}
