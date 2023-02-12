import { Component, Input} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accService: AccountService) {}

  onSetTo(status: string) {
    this.accService.updateStatus(this.id, status);
    this.accService.statusUpdated.emit(status);
  }
}
