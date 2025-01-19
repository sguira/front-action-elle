
import { Component, Injectable } from '@angular/core';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import { Souscripteur } from '../interface/souscripteur';
import { HtmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

@Component(
  {
    templateUrl:'./pdf-component.html'
  }
)

export class PdfService {



  constructor() {


    " <h1 id='header' >Guira souleymane</h1>"
  }

  formatTitle(title:string):any{
    return `<h1 id='header' >${title}</h1>`;
  }

  generateDevisPdf(){
    const doc=new jsPDF()

    autoTable(doc,{

    })

    doc.save('simulation.pdf')
  }
}
