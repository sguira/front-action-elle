import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

   private progressSource =new Subject<boolean>

  $progress=this.progressSource.asObservable();


  show(){
    this.progressSource.next(true)
  }

  hide(){
    this.progressSource.next(false)
  }
}
