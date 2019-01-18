import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clocks',
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnInit, OnDestroy {
    public showText = 'HH:MM:SS';
    private timer: any;

    public ngOnInit () {
        this.timer = setInterval( () => {
        this.showText = new Date().toISOString();
        }, 1000);
    }

    public ngOnDestroy () {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
