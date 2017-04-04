///<reference path="../node_modules/angular2/typings/browser.d.ts" />

import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
    selector: 'app-root',
    template: '<h1>Hello Angular Electron</h1>',
    styleUrls: []
})

export class AppComponent {}
bootstrap(AppComponent);
