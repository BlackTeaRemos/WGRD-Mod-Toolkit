import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import type { SearchDocument } from './SearchDocument';

export class SearchIndex {
  public static async Response(context: APIContext): Promise<Response> {
    const documents = await getCollection('docs', (entry) => !entry.data.draft);
    const routeBase = context.url.pathname.replace(/search-index\.json$/, '');
    const entries: SearchDocument[] = documents.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? '',
      href: `${routeBase}${entry.id === 'index' ? '' : `${entry.id.replace(/\/index$/, '')}/`}`,
      text: SearchIndex.__PlainText(entry.body ?? ''),
    }));
    return new Response(JSON.stringify(entries), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  private static __PlainText(source: string): string {
    return source.replace(/^import .+;?$/gm, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/!?\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[`#*_>|]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
}
