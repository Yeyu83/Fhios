import { ViewportScroller } from '@angular/common'
import { Injectable } from '@angular/core'
import { NavigationEnd, NavigationStart, Router } from '@angular/router'
import {
  asyncScheduler, combineLatest, filter, fromEvent,
  map, Observable, observeOn, scan, skip, withLatestFrom,
} from 'rxjs'

export interface HistoryItem {
  url: string;
  scrollY: number;
}

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private allHistoryItems$!: Observable<HistoryItem[]>

  private currentUrl$!: Observable<string>

  private scroll$!: Observable<number>

  private currentHistoryItem$!: Observable<HistoryItem>

  private navigationStart$!: Observable<any>

  constructor(
    private readonly router: Router,
    private readonly viewportScroller: ViewportScroller,
  ) { }

  init(): void {
    this.initObservables()
    this.currentUrl$
      .pipe(
        withLatestFrom(this.allHistoryItems$),
        map(([url, history]) => history.find(historyItem => historyItem.url === url)?.scrollY),
        observeOn(asyncScheduler),
      )
      .subscribe(scrollY => {
        if (scrollY) {
          this.viewportScroller.scrollToPosition([0, scrollY])
        }
      })
  }

  private initObservables(): void {
    this.scroll$ = fromEvent(document, 'scroll')
      .pipe(
        map(event => (event.target as any)?.scrollingElement?.scrollTop),
      )
    this.currentUrl$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => (event as any).url),
      )
    this.navigationStart$ = this.router.events
      .pipe(
        skip(1),
        filter((event) => event instanceof NavigationStart),
      )
    this.currentHistoryItem$ = combineLatest([this.scroll$, this.currentUrl$])
      .pipe(
        map(([scrollY, url]) => ({ scrollY, url })),
      )
    this.allHistoryItems$ = this.navigationStart$.pipe(withLatestFrom(this.currentHistoryItem$))
      .pipe(
        map(([,item]) => ({ url: item.url, scrollY: item.scrollY })),
        scan((all: HistoryItem[], curr: HistoryItem) => this.setHistoryItem(all, curr), []),
      )
  }

  private setHistoryItem(all: HistoryItem[], curr: HistoryItem): HistoryItem[] {
    const newHistory = all
    const index = all.findIndex(historyItem => historyItem.url === curr.url)
    if (index === -1) {
      newHistory.push(curr)
    } else {
      newHistory[index].scrollY = curr.scrollY
    }
    return newHistory
  }
}
