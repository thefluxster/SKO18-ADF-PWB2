

import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

declare var componentHandler;

@Component({
    selector: 'form-viewer',
    templateUrl: './form-viewer.component.html',
    styleUrls: ['./form-viewer.component.css']
})
export class MincorroFormViewer implements OnInit, OnDestroy, AfterViewChecked {

    taskId: string;

    private sub: Subscription;

    constructor(private route: ActivatedRoute,
				private router: Router) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.taskId = params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    ngAfterViewChecked() {
        // workaround for MDL issues with dynamic components
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    }
	
	onFormCompleted(data) {
		console.log("formCompleted with " + data);
		this.router.navigate(['/mincorro/apps/1/tasks']);
	}
	
	onExecuteOutcome(data) {
		console.log("executeOutcome with " + data);
	}
	
	navigateToTaskList() {
		this.router.navigate(['/mincorro/apps/1/tasks']);
	}
}
