



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TextAvatarComponent } from '../components/text-avatar/text-avatar.component';


const components = [
    TextAvatarComponent,
];
@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        ...components,
    ]
})
export class ComponentModule { }
