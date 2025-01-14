import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input()
  diameter:number|null=null

  @Input()
  label:string|null=null;

  @Input()
  couleur:string='primary'

}
