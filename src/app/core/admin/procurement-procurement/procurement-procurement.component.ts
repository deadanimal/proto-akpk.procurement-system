import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-procurement-procurement",
  templateUrl: "./procurement-procurement.component.html",
  styleUrls: ["./procurement-procurement.component.scss"],
})
export class ProcurementProcurementComponent implements OnInit {
  // Table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      id: 1,
      procurementid: "PER-602-rzp",
      procurementtitle: "Bleu, red-cheeked cordon",
      procurementdata1: "3553703088782200",
      procurementdata2: "jcb",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Do Not Pass",
      procurementdate: "02/03/2020",
    },
    {
      id: 2,
      procurementid: "PER-733-gwh",
      procurementtitle: "Otter, north american river",
      procurementdata1: "4041370448938",
      procurementdata2: "visa",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Pass",
      procurementdate: "05/27/2020",
    },
    {
      id: 3,
      procurementid: "PER-163-lxx",
      procurementtitle: "Asian false vampire bat",
      procurementdata1: "3535282646672727",
      procurementdata2: "jcb",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Pass",
      procurementdate: "02/18/2020",
    },
    {
      id: 4,
      procurementid: "PER-207-eog",
      procurementtitle: "Pelican, australian",
      procurementdata1: "5002358388926445",
      procurementdata2: "mastercard",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Pass",
      procurementdate: "06/25/2019",
    },
    {
      id: 5,
      procurementid: "PER-326-lru",
      procurementtitle: "Spotted-tailed quoll",
      procurementdata1: "3572165061103076",
      procurementdata2: "jcb",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Do Not Pass",
      procurementdate: "12/19/2019",
    },
    {
      id: 6,
      procurementid: "PER-611-sxr",
      procurementtitle: "Phascogale, brush-tailed",
      procurementdata1: "3538966862162044",
      procurementdata2: "jcb",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Pass",
      procurementdate: "03/01/2020",
    },
    {
      id: 7,
      procurementid: "PER-733-cft",
      procurementtitle: "Arctic ground squirrel",
      procurementdata1: "5010124428800754",
      procurementdata2: "mastercard",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Pass",
      procurementdate: "03/13/2020",
    },
    {
      id: 8,
      procurementid: "PER-090-nen",
      procurementtitle: "Sandpiper, spotted wood",
      procurementdata1: "3556240742292125",
      procurementdata2: "jcb",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Do Not Pass",
      procurementdate: "02/13/2020",
    },
    {
      id: 9,
      procurementid: "PER-644-pem",
      procurementtitle: "Baboon, olive",
      procurementdata1: "30044234705459",
      procurementdata2: "diners-club-carte-blanche",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Do Not Pass",
      procurementdate: "03/24/2020",
    },
    {
      id: 10,
      procurementid: "PER-416-aiq",
      procurementtitle: "Nine-banded armadillo",
      procurementdata1: "3533608783786767",
      procurementdata2: "jcb",
      procurementdata3: "Shekel",
      procurementdata4: "ILS",
      procurementdata5: "Israel",
      procurementstatus: "Pass",
      procurementdate: "01/30/2020",
    },
  ];
  SelectionType = SelectionType;

  modalPerolehan: BsModalRef;
  modalTitle: string;

  constructor(private modalService: BsModalService) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  ngOnInit() {}

  entriesChange($event) {
    this.entries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onActivate(event) {
    this.activeRow = event.row;
  }

  statusBadge(status: string) {
    if (status == "Pass") return "badge badge-success";
    if (status == "Do Not Pass") return "badge badge-danger";
  }

  openModal(template: TemplateRef<any>, title: string) {
    this.modalTitle = title;
    let options = {
      backdrop: true,
      class: "modal-lg",
      ignoreBackdropClick: false,
    };
    this.modalPerolehan = this.modalService.show(template, options);
  }

  closeModal() {
    this.modalPerolehan.hide();
  }

  clickReset() {
    this.temp = this.rows;
  }

  clickSave() {
    swal
      .fire({
        title: "Success",
        text: "Your data was saved successfully",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
      })
      .then((result) => {
        if (result.value) this.closeModal();
      });
  }

  clickDelete() {
    swal
      .fire({
        title: "Delete data",
        text: "Do you want to delete this data?",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-danger",
        confirmButtonText: "Yes",
        cancelButtonClass: "btn btn-secondary",
        cancelButtonText: "No",
      })
      .then((result) => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Data wipe process successful!",
            text: "Your data was successfully deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-primary",
          });
        }
      });
  }
}
