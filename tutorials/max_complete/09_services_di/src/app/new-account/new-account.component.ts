import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent implements OnInit{
  constructor(private accountService : AccountService) {
    this.accountService.statusUpdated.subscribe(
      (str: string) => alert("fucing observables " + str)
    )
  }

  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
