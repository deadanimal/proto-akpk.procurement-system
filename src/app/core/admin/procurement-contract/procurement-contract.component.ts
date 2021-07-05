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
  selector: "app-procurement-contract",
  templateUrl: "./procurement-contract.component.html",
  styleUrls: ["./procurement-contract.component.scss"],
})
export class ProcurementContractComponent implements OnInit {
  // Table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      id: 1,
      contractid: "CON-380-mbcn",
      contracttitle: "Diceros bicornis",
      contractdate: "05/22/2020",
      contractsubid: "SUB-709-ddxq",
      contractstatus: "Tidak Aktif",
      contractremark:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    },
    {
      id: 2,
      contractid: "CON-578-auln",
      contracttitle: "Meles meles",
      contractdate: "02/29/2020",
      contractsubid: "SUB-826-ptwc",
      contractstatus: "Aktif",
      contractremark:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    },
    {
      id: 3,
      contractid: "CON-676-gdmv",
      contracttitle: "Zalophus californicus",
      contractdate: "02/02/2020",
      contractsubid: "SUB-077-ltsl",
      contractstatus: "Tidak Aktif",
      contractremark:
        "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    },
    {
      id: 4,
      contractid: "CON-731-rxtl",
      contracttitle: "Haliaeetus leucocephalus",
      contractdate: "02/01/2020",
      contractsubid: "SUB-093-aeys",
      contractstatus: "Aktif",
      contractremark:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      id: 5,
      contractid: "CON-948-brwt",
      contracttitle: "Galago crassicaudataus",
      contractdate: "08/01/2019",
      contractsubid: "SUB-970-fqra",
      contractstatus: "Tidak Aktif",
      contractremark:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    },
    {
      id: 6,
      contractid: "CON-010-iqjq",
      contracttitle: "Canis aureus",
      contractdate: "07/29/2019",
      contractsubid: "SUB-291-jhqm",
      contractstatus: "Aktif",
      contractremark:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    },
    {
      id: 7,
      contractid: "CON-120-bxuo",
      contracttitle: "Ara ararauna",
      contractdate: "10/08/2019",
      contractsubid: "SUB-022-haqs",
      contractstatus: "Aktif",
      contractremark:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    },
    {
      id: 8,
      contractid: "CON-324-znru",
      contracttitle: "Erethizon dorsatum",
      contractdate: "12/15/2019",
      contractsubid: "SUB-052-ofzs",
      contractstatus: "Tidak Aktif",
      contractremark:
        "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    },
    {
      id: 9,
      contractid: "CON-938-wxyk",
      contracttitle: "Tiliqua scincoides",
      contractdate: "10/31/2019",
      contractsubid: "SUB-076-ygzh",
      contractstatus: "Tidak Aktif",
      contractremark:
        "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    },
    {
      id: 10,
      contractid: "CON-931-dhqd",
      contracttitle: "Bassariscus astutus",
      contractdate: "06/23/2019",
      contractsubid: "SUB-040-bctl",
      contractstatus: "Tidak Aktif",
      contractremark:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    },
  ];
  SelectionType = SelectionType;

  modalKontrak: BsModalRef;
  modalKontrak1: BsModalRef;
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
    if (status == "Aktif") return "badge badge-success";
    if (status == "Tidak Aktif") return "badge badge-danger";
  }

  openModal(template: TemplateRef<any>, title: string) {
    this.modalTitle = title;
    let options = {
      backdrop: true,
      class: "modal-lg",
      ignoreBackdropClick: false,
    };
    this.modalKontrak = this.modalService.show(template, options);
  }

  openModal1(template: TemplateRef<any>) {
    this.modalKontrak1 = this.modalService.show(template);
  }

  closeModal() {
    this.modalKontrak.hide();
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

  clickSave2() {
    swal
      .fire({
        title: "Success",
        text: "Your data was saved successfully",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
      })
      .then((result) => {
        if (result.value) this.modalKontrak1.hide();
      });
  }


  clickSave1() {
    swal.fire({
      title: "Success",
      text: "Your data was saved successfully",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
  }

  validation() {
    swal
      .fire({
        title: "Luluskan permohonan perolehan ini?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Lulus",
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Gagal",
      })
      .then((result) => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Lulus!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
          });
        } else {
          // Show confirmation
          swal.fire({
            title: "Gagal!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-danger",
          });
        }
      });
  }

  email() {
    swal
      .fire({
        title: "Hantar emel pemberitahuan ini?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Ya",
        cancelButtonClass: "btn btn-secondary",
        cancelButtonText: "Tidak",
      })
      .then((result) => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Emel pemberitahuan sudah dihantar!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
          });
        }
      });
  }
}
