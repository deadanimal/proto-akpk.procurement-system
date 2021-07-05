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
  selector: "app-procurement-supplier",
  templateUrl: "./procurement-supplier.component.html",
  styleUrls: ["./procurement-supplier.component.scss"],
})
export class ProcurementSupplierComponent implements OnInit {
  // Table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      id: 1,
      vendorid: "V-599-zdo",
      vendorname: "Douglas-Konopelski",
      vendorcat: "Technology",
      vendordetail:
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      vendordate: "02/04/2020",
    },
    {
      id: 2,
      vendorid: "V-849-uom",
      vendorname: "Schuppe Inc",
      vendorcat: "Office Equipment",
      vendordetail:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      vendordate: "05/31/2020",
    },
    {
      id: 3,
      vendorid: "V-641-ffa",
      vendorname: "Braun, Zieme and Stiedemann",
      vendorcat: "Office Equipment",
      vendordetail:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      vendordate: "06/06/2020",
    },
    {
      id: 4,
      vendorid: "V-384-mhz",
      vendorname: "Rodriguez and Sons",
      vendorcat: "Office Equipment",
      vendordetail:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      vendordate: "04/07/2020",
    },
    {
      id: 5,
      vendorid: "V-610-oae",
      vendorname: "Mayer LLC",
      vendorcat: "Office Equipment",
      vendordetail:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      vendordate: "07/15/2019",
    },
    {
      id: 6,
      vendorid: "V-117-moa",
      vendorname: "Hoppe-O'Kon",
      vendorcat: "Technology",
      vendordetail:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      vendordate: "11/08/2019",
    },
    {
      id: 7,
      vendorid: "V-993-rrm",
      vendorname: "Smith, Toy and Lakin",
      vendorcat: "Catering",
      vendordetail:
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      vendordate: "03/19/2020",
    },
    {
      id: 8,
      vendorid: "V-785-gyn",
      vendorname: "Hane, Walker and Kihn",
      vendorcat: "Catering",
      vendordetail:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      vendordate: "02/10/2020",
    },
    {
      id: 9,
      vendorid: "V-280-gxc",
      vendorname: "Roob-Stiedemann",
      vendorcat: "Technology",
      vendordetail:
        "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      vendordate: "06/19/2019",
    },
    {
      id: 10,
      vendorid: "V-386-mhw",
      vendorname: "Kiehn Group",
      vendorcat: "Catering",
      vendordetail:
        "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      vendordate: "11/14/2019",
    },
  ];
  SelectionType = SelectionType;

  modalPembekal: BsModalRef;
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
    if (status == "Active") return "badge badge-success";
    if (status == "Not Active") return "badge badge-danger";
  }

  openModal(template: TemplateRef<any>, title: string) {
    this.modalTitle = title;
    let options = {
      backdrop: true,
      class: "modal-lg",
      ignoreBackdropClick: false,
    };
    this.modalPembekal = this.modalService.show(template, options);
  }

  closeModal() {
    this.modalPembekal.hide();
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
