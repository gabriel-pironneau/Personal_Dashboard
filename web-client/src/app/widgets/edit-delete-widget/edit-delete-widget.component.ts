import { Component, OnInit, Input } from '@angular/core';
import { Calendar } from '../../models/Calendar.model';

@Component({
  selector: 'app-edit-delete-widget',
  templateUrl: './edit-delete-widget.component.html',
  styleUrls: ['./edit-delete-widget.component.scss']
})
export class EditDeleteWidgetComponent implements OnInit {

    @Input() editForm: string;
    @Input() calendarWidget: Calendar;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.editForm);
    }

}
