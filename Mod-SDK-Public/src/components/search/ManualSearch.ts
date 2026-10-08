import type { SearchDocument } from '../../manuals/search/SearchDocument';
import { SearchRanking } from '../../manuals/search/SearchRanking';

export class ManualSearch {
  private readonly _root: HTMLElement;
  private readonly _dialog: HTMLDialogElement;
  private readonly _trigger: HTMLButtonElement;
  private readonly _input: HTMLInputElement;
  private readonly _status: HTMLElement;
  private readonly _results: HTMLUListElement;
  private _documents: Promise<SearchDocument[]> | undefined;
  private _request = 0;

  public constructor ( root: HTMLElement ) {
    this._root = root;
    this._dialog = root.querySelector( 'dialog' )!;
    this._trigger = root.querySelector<HTMLButtonElement>( '[data-search-open]' )!;
    this._input = root.querySelector( 'input' )!;
    this._status = root.querySelector<HTMLElement>( '[data-search-status]' )!;
    this._results = root.querySelector<HTMLUListElement>( '[data-search-results]' )!;
    this._trigger.disabled = false;
    this._trigger.addEventListener( 'click', () => this.__Open() );
    root.querySelector( '[data-search-close]' )!.addEventListener( 'click', () => this._dialog.close() );
    this._dialog.addEventListener( 'close', () => {
      this._request += 1;
      this._trigger.focus();
    } );
    this._dialog.addEventListener( 'click', ( event ) => {
      if ( event.target !== this._dialog ) {
        return;
      }
      const bounds = this._dialog.getBoundingClientRect();
      if ( event.clientX < bounds.left || event.clientX > bounds.right
        || event.clientY < bounds.top || event.clientY > bounds.bottom ) {
        this._dialog.close();
      }
    } );
    this._input.addEventListener( 'input', () => void this.__Search() );
    window.addEventListener( 'keydown', ( event ) => {
      if ( ( event.ctrlKey || event.metaKey ) && event.key.toLowerCase() === 'k' ) {
        event.preventDefault();
        if ( this._dialog.open ) {
          this._dialog.close();
        } else {
          this.__Open();
        }
      }
    } );
  }

  private __Open (): void {
    this._dialog.showModal();
    this._input.focus();
    void this.__Search();
  }

  private async __LoadDocuments (): Promise<SearchDocument[]> {
    if ( !this._documents ) {
      this._documents = fetch( this._root.dataset.searchIndex!, { credentials: 'same-origin' } )
        .then( async ( response ) => {
          if ( !response.ok ) {
            throw new Error( 'Search index is unavailable' );
          }
          return await response.json() as SearchDocument[];
        } ).catch( ( error ) => {
          this._documents = undefined;
          throw error;
        } );
    }
    return this._documents;
  }

  private async __Search (): Promise<void> {
    const request = ++this._request;
    const query = this._input.value.trim();
    this._results.replaceChildren();
    if ( !query ) {
      this._status.textContent = 'Enter a topic or a control name.';
      return;
    }
    this._status.textContent = 'Searching the Toolkit docs...';
    try {
      const documents = await this.__LoadDocuments();
      if ( request !== this._request || !this._dialog.open ) {
        return;
      }
      const results = SearchRanking.Results( documents, query );
      this._status.textContent = results.length === 0
        ? 'No matches in the Toolkit docs. Try a shorter term.'
        : `${ results.length === 20 ? 'First 20' : results.length } result${ results.length === 1 ? '' : 's' } in the Toolkit docs.`;
      for ( const result of results ) {
        const item = document.createElement( 'li' );
        const link = document.createElement( 'a' );
        const title = document.createElement( 'strong' );
        const description = document.createElement( 'p' );
        link.href = result.href;
        title.textContent = result.title;
        description.textContent = result.description;
        link.append( title, description );
        item.append( link );
        this._results.append( item );
      }
    } catch {
      if ( request === this._request ) {
        this._status.textContent = 'Search could not load. Try another query.';
      }
    }
  }
}
