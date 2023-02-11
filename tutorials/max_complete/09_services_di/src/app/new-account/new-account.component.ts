import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [ LoggingService ]
})
export class NewAccountComponent implements OnInit{
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService : LoggingService) {}

  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    // running the service
    this.loggingService.logStatusChange(accountStatus);
  }
}
