import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive ({
    selector: '[appDropdown]'
})

export class DropDownDirective {

    @HostBinding('class.open') isOpen = false;
    //console.log('Hey');
   
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
       // console.log(this.elRef.nativeElement);
       // console.log(event.target);
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        // console.log(this.isOpen);
      }
      constructor(private elRef: ElementRef) {}

}