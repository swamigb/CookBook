import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert/alert.component';
import { DropDownDirective } from './dropdown.directive';
import { PlaceholderDirective } from './placeholder.directive';


@NgModule({
    declarations: [
    AlertComponent,
    DropDownDirective,
    PlaceholderDirective
    ],
    imports: [CommonModule],
    exports: [
    CommonModule,
    AlertComponent,
    DropDownDirective,
    PlaceholderDirective
    ]
})

export class SharedModule {}