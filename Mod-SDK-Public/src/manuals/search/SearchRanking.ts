import type { SearchDocument } from './SearchDocument';

export class SearchRanking {
  public static Results(documents: SearchDocument[], query: string): SearchDocument[] {
    const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    if (terms.length === 0) {
      return [];
    }
    return documents.map((document) => {
      const title = document.title.toLocaleLowerCase();
      const description = document.description.toLocaleLowerCase();
      const text = document.text.toLocaleLowerCase();
      let score = 0;
      for (const term of terms) {
        if (!title.includes(term) && !description.includes(term) && !text.includes(term)) {
          return { document, score: 0 };
        }
        score += title.includes(term) ? 12 : description.includes(term) ? 5 : 1;
      }
      return { document, score };
    }).filter((entry) => entry.score > 0)
      .sort((left, right) => right.score - left.score || left.document.title.localeCompare(right.document.title))
      .slice(0, 20).map((entry) => entry.document);
  }
}
