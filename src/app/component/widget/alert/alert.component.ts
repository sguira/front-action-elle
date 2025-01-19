import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  show=true;

  @Input()
  message:string=''

  @Input()
  style:number=1

  @Input()
  action!:Function;

  trigerAction(){
    this.show=false;
    if(this.action!=null){
      this.action()
    }
  }
}
