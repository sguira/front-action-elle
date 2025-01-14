import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input()
  message:string=''

  @Input()
  style:number=1

  @Input()
  action!:()=>void;

  trigerAction(){
    if(this.action!=null){
      this.action()
    }
  }
}
