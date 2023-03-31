import { NgModule } from '@angular/core';
import { ShrinkingHeaderDirective } from './shrinking-header.directive';

@NgModule({
    declarations: [
        ShrinkingHeaderDirective
    ],
    exports: [
        ShrinkingHeaderDirective
    ]
})
export class DirectivesModule { }