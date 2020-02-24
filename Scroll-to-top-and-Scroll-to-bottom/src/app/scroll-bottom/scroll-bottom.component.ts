import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-bottom',
  templateUrl: './scroll-bottom.component.html',
  styleUrls: ['./scroll-bottom.component.css']
})
export class ScrollBottomComponent implements OnInit {

  windowScrolled: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  @HostListener("window:scroll", [])

  onWindowScroll() {

    if ( window.pageYOffset ) {
        this.windowScrolled = true;

    } else if ( this.windowScrolled && window.pageYOffset
      || window.pageYOffset < 10 ) {
        this.windowScrolled = false;

    }
  }

  scrollToBottom() {
    const element = document.getElementById('lowest-diversion');
    element.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }
}
