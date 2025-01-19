import { Component, Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})


export class PdfComponent {


  generatePdf(){
    let doc=new jsPDF()

    autoTable(doc,{
      html:"#title"
    })

    doc.output('datauristring',{
      filename:'exemple.pdf'
    });
  }

}
