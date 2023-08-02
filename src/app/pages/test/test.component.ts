/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'TestComponent';

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
    this.app.updateView(this.title);
  }

  async redirectTo(url: any) {
    await this.app.redirectTo(url, this.title);

    this.updateView();
  }

  defaultOrder() { return 0; }

  testHttp() {
    console.log(`[${this.title}#testHttp]`);

    this.app.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data: any) => {
      console.log(`[${this.title}#testHttp] data`, data);

      const textarea = document.getElementById('httpOutputTextarea') as HTMLTextAreaElement;
      textarea.value = JSON.stringify(data, null, 2);
    });
  }
}
