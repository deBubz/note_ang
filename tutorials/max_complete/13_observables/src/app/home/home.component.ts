import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs'
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalObservableSubscription: Subscription;
  private customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.intervalObservableSubscription = interval(1000).subscribe(
    //   (count) => console.log(count)
    // )

    const customIntervalObservable = new Observable(
      (observer) => {
        let count: any = 0;

        setInterval(() => {
          observer.next(count);

          // fake complete, closes the stream
          if(count === 5) {
            observer.complete()
          }
          // fake error handling
          if(count>3) {
            observer.error(new Error('limit reached'));
          }
          count++
        },1000);
      }
    );

    // data handling, set what is done to the emission
    // error handling, passing an error callback
    // stream complete
    this.customObsSubscription = customIntervalObservable
    // pipe allow chaining of operators
      .pipe(
        filter((data:any) => data>0),
        map((data:any): any => `Round: ${data+1}`)
      )
      .subscribe(
        (c) => console.log(c),
        (err) => alert(`ErrorThrown: ` + err),
        () => console.log(`Stream finishes`)
      );
  }

  ngOnDestroy(): void {
    // if streams are completed, unsubscribing is not needed
    this.intervalObservableSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }


  /*
  Observables Notes

    rxjs give us many ways to create observables
    e.g interval which is an observable which will fire an event every given time period

    after setting an interval,
    we can subscribe to the observable and trigger something whenever the event is emitted

    this introduced us to the risk of mem-leaks for observable that perpeptually emitted data
    you need to remember to unsubscribe from the observable stream if the data is no longer need
  */

  /* Error and Completion handling

    when an observer stream triggers the error callback of the observable
    the observer is "canceled" halting all emission handling

    this is different from complete and will not trigger the complete callback
  */

    /* Operators


    */
}
