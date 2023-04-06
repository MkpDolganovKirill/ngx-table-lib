import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PaginatePlaces, Theme} from "./ngx-table-lib.enums";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'ngx-table-lib',
  templateUrl: 'ngx-table-lib.component.html',
  styleUrls: ['ngx-table-lib.component.scss']
})
export class NgxTableLibComponent implements OnInit {
  @Input() headers?: string[];

  @Input()
  set data(value: Array<Object> | undefined) {
    this._data = value || [];
    this.paginateData();
  }

  get data(): Record<string, any>[] {
    return this._data;
  }

  @Input()
  set total(value: number | undefined) {
    if (value) {
      this._total = value;
      this.paginateData()
    }
  };

  get total(): number {
    return this._total;
  }

  @Input() sortBy?: Function;
  @Input() paginate?: number;
  @Input() page = 1;
  @Input() paginatePlaced: PaginatePlaces = PaginatePlaces.CENTER;
  @Input() theme?: Theme | Object = 'light';
  @Input() enableLoader? = true;

  @Output() pageWasChanged = new EventEmitter<number>();
  @Output() clickOnElement = new EventEmitter<number>();

  @ViewChild('thead') thead?: ElementRef;

  public pages = 0;

  private _preparedData: Object[] = [];
  set preparedData(data: Object[]) {
    this._preparedData = data;
  }

  get preparedData(): Record<string, any>[] {
    return this._preparedData;
  }

  private _data: Object[] = [];
  private _total = 0;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.showSpinner(true);
  }

  changePageValue(event: any): void {
    this.setPageNumber(event.target.value);
    this.changePaginateData();
  }

  changePaginateData() {
    if (!this.data || !this.data.length || !this.paginate || !this.total) {
      return;
    }
    this.pages = Math.ceil(this.total / this.paginate);
    let startIndex = (this.page - 1) * this.paginate;
    let endIndex = startIndex + this.paginate;
    if (this.data.length <= this.paginate) {
      startIndex = 0;
      endIndex = this.paginate;
    }
    this.preparedData = this.data.slice(startIndex, endIndex);
    if (this.thead) {
      this.thead.nativeElement.scrollIntoView();
    }
    this.showSpinner(false);
  }

  paginateData() {
    if (!this.paginate) {
      this.showAllData();
      this.showSpinner(false);
      return;
    } else if (!this.data || !this.data.length || (this.paginate && !this.total)) {
      return;
    }
    this.changePaginateData();
  }

  showSpinner(state: boolean) {
    if (!this.enableLoader) {
      return;
    }
    if (state) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }

  private showAllData() {
    this.preparedData = this.data;
  }

  setPageNumber(pageNumber: number) {
    if (this.paginate && (this.data.length <= this.paginate)) {
      this.data = [];
    }
    this.showSpinner(true);
    if (pageNumber < 1) {
      this.page = 1;
      this.pageWasChanged.emit(this.page);
      return;
    }
    if (pageNumber > this.pages) {
      this.page = this.pages;
      this.pageWasChanged.emit(this.page);
      return;
    }
    this.page = pageNumber;
    this.pageWasChanged.emit(this.page);
  }

  backPage() {
    this.setPageNumber(this.page - 1);
    this.changePaginateData();
  }

  nextPage() {
    this.setPageNumber(Number(this.page) + 1);
    this.changePaginateData();
  }

  onElementClick(index: number) {
    this.clickOnElement.emit(index);
  }

  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop == event.target.scrollHeight) {
      this.nextPage();
    }
  }
}
