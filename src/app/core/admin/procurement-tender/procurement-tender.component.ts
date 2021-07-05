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
  selector: "app-procurement-tender",
  templateUrl: "./procurement-tender.component.html",
  styleUrls: ["./procurement-tender.component.scss"],
})
export class ProcurementTenderComponent implements OnInit {
  // Table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      id: 1,
      tenderid: "TDR-234-sqd",
      tendertitle:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      tenderpublishdate: "03/03/2020",
      tenderclosedate: "06/30/2019",
      tenderdesc:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      tenderdocs: "duis.xls",
      tenderstatus: "New",
    },
    {
      id: 2,
      tenderid: "TDR-298-vho",
      tendertitle:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      tenderpublishdate: "02/14/2020",
      tenderclosedate: "09/22/2019",
      tenderdesc:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      tenderdocs: "vulputate.ppt",
      tenderstatus: "Postponed",
    },
    {
      id: 3,
      tenderid: "TDR-577-hvx",
      tendertitle:
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      tenderpublishdate: "12/04/2019",
      tenderclosedate: "04/10/2020",
      tenderdesc:
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      tenderdocs: "duis_bibendum_felis.xls",
      tenderstatus: "New",
    },
    {
      id: 4,
      tenderid: "TDR-979-tmy",
      tendertitle:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      tenderpublishdate: "12/25/2019",
      tenderclosedate: "01/06/2020",
      tenderdesc:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      tenderdocs: "quam_a.xls",
      tenderstatus: "Cancel",
    },
    {
      id: 5,
      tenderid: "TDR-177-dyc",
      tendertitle:
        "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      tenderpublishdate: "06/29/2019",
      tenderclosedate: "07/06/2019",
      tenderdesc:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      tenderdocs: "platea_dictumst_etiam.pdf",
      tenderstatus: "Awarded",
    },
    {
      id: 6,
      tenderid: "TDR-070-gkt",
      tendertitle:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      tenderpublishdate: "12/21/2019",
      tenderclosedate: "09/20/2019",
      tenderdesc:
        "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      tenderdocs: "vitae.xls",
      tenderstatus: "New",
    },
    {
      id: 7,
      tenderid: "TDR-695-fdl",
      tendertitle:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      tenderpublishdate: "09/12/2019",
      tenderclosedate: "05/30/2020",
      tenderdesc:
        "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      tenderdocs: "sapien_dignissim_vestibulum.xls",
      tenderstatus: "Awarded",
    },
    {
      id: 8,
      tenderid: "TDR-581-ktp",
      tendertitle:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      tenderpublishdate: "03/11/2020",
      tenderclosedate: "03/19/2020",
      tenderdesc:
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      tenderdocs: "vestibulum_eget_vulputate.ppt",
      tenderstatus: "Awarded",
    },
    {
      id: 9,
      tenderid: "TDR-666-hlf",
      tendertitle:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      tenderpublishdate: "11/25/2019",
      tenderclosedate: "12/16/2019",
      tenderdesc:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      tenderdocs: "non_lectus_aliquam.ppt",
      tenderstatus: "New",
    },
    {
      id: 10,
      tenderid: "TDR-626-cza",
      tendertitle:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      tenderpublishdate: "12/20/2019",
      tenderclosedate: "10/19/2019",
      tenderdesc: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      tenderdocs: "mi_in.xls",
      tenderstatus: "New",
    },
    {
      id: 11,
      tenderid: "TDR-658-xxq",
      tendertitle:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      tenderpublishdate: "05/01/2020",
      tenderclosedate: "05/29/2020",
      tenderdesc:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      tenderdocs: "sociis_natoque_penatibus.xls",
      tenderstatus: "New",
    },
    {
      id: 12,
      tenderid: "TDR-169-dwj",
      tendertitle:
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      tenderpublishdate: "10/21/2019",
      tenderclosedate: "05/23/2020",
      tenderdesc:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      tenderdocs: "odio.xls",
      tenderstatus: "Postponed",
    },
    {
      id: 13,
      tenderid: "TDR-818-isa",
      tendertitle:
        "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      tenderpublishdate: "11/12/2019",
      tenderclosedate: "02/28/2020",
      tenderdesc:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      tenderdocs: "vestibulum_aliquet_ultrices.xls",
      tenderstatus: "Awarded",
    },
    {
      id: 14,
      tenderid: "TDR-562-nsl",
      tendertitle:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      tenderpublishdate: "01/31/2020",
      tenderclosedate: "04/01/2020",
      tenderdesc:
        "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      tenderdocs: "dis.xls",
      tenderstatus: "New",
    },
    {
      id: 15,
      tenderid: "TDR-938-dfe",
      tendertitle:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      tenderpublishdate: "05/01/2020",
      tenderclosedate: "01/02/2020",
      tenderdesc:
        "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      tenderdocs: "cubilia_curae.pdf",
      tenderstatus: "Cancel",
    },
    {
      id: 16,
      tenderid: "TDR-107-nqc",
      tendertitle:
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      tenderpublishdate: "10/20/2019",
      tenderclosedate: "02/29/2020",
      tenderdesc:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      tenderdocs: "rhoncus_aliquet.xls",
      tenderstatus: "New",
    },
    {
      id: 17,
      tenderid: "TDR-644-qgp",
      tendertitle:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      tenderpublishdate: "05/19/2020",
      tenderclosedate: "01/02/2020",
      tenderdesc:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      tenderdocs: "neque_aenean_auctor.xls",
      tenderstatus: "New",
    },
    {
      id: 18,
      tenderid: "TDR-507-ldw",
      tendertitle:
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      tenderpublishdate: "09/27/2019",
      tenderclosedate: "02/15/2020",
      tenderdesc:
        "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      tenderdocs: "id_luctus.xls",
      tenderstatus: "Awarded",
    },
    {
      id: 19,
      tenderid: "TDR-689-uhs",
      tendertitle:
        "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      tenderpublishdate: "08/13/2019",
      tenderclosedate: "07/31/2019",
      tenderdesc:
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      tenderdocs: "placerat_ante.ppt",
      tenderstatus: "New",
    },
    {
      id: 20,
      tenderid: "TDR-192-cbf",
      tendertitle:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      tenderpublishdate: "04/15/2020",
      tenderclosedate: "04/16/2020",
      tenderdesc: "Fusce consequat. Nulla nisl. Nunc nisl.",
      tenderdocs: "consequat.ppt",
      tenderstatus: "Cancel",
    },
    {
      id: 21,
      tenderid: "TDR-537-ewd",
      tendertitle:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      tenderpublishdate: "01/20/2020",
      tenderclosedate: "02/16/2020",
      tenderdesc: "Fusce consequat. Nulla nisl. Nunc nisl.",
      tenderdocs: "iaculis.xls",
      tenderstatus: "Cancel",
    },
    {
      id: 22,
      tenderid: "TDR-862-whb",
      tendertitle:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      tenderpublishdate: "11/19/2019",
      tenderclosedate: "08/27/2019",
      tenderdesc:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      tenderdocs: "lorem_integer_tincidunt.xls",
      tenderstatus: "New",
    },
    {
      id: 23,
      tenderid: "TDR-246-xlu",
      tendertitle:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      tenderpublishdate: "01/31/2020",
      tenderclosedate: "11/19/2019",
      tenderdesc:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      tenderdocs: "id_mauris.ppt",
      tenderstatus: "Cancel",
    },
    {
      id: 24,
      tenderid: "TDR-001-kxv",
      tendertitle:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      tenderpublishdate: "03/28/2020",
      tenderclosedate: "04/16/2020",
      tenderdesc:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      tenderdocs: "vitae.xls",
      tenderstatus: "Postponed",
    },
    {
      id: 25,
      tenderid: "TDR-101-gdl",
      tendertitle:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      tenderpublishdate: "05/17/2020",
      tenderclosedate: "07/31/2019",
      tenderdesc:
        "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      tenderdocs: "neque.xls",
      tenderstatus: "Awarded",
    },
    {
      id: 26,
      tenderid: "TDR-005-eyf",
      tendertitle:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      tenderpublishdate: "10/10/2019",
      tenderclosedate: "04/10/2020",
      tenderdesc:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      tenderdocs: "pretium.xls",
      tenderstatus: "Postponed",
    },
    {
      id: 27,
      tenderid: "TDR-745-plx",
      tendertitle:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      tenderpublishdate: "09/15/2019",
      tenderclosedate: "10/13/2019",
      tenderdesc: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      tenderdocs: "magna_bibendum.doc",
      tenderstatus: "New",
    },
    {
      id: 28,
      tenderid: "TDR-207-nin",
      tendertitle:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      tenderpublishdate: "02/17/2020",
      tenderclosedate: "04/23/2020",
      tenderdesc:
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      tenderdocs: "pede_malesuada.ppt",
      tenderstatus: "Cancel",
    },
    {
      id: 29,
      tenderid: "TDR-368-bsc",
      tendertitle:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      tenderpublishdate: "04/10/2020",
      tenderclosedate: "03/03/2020",
      tenderdesc:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      tenderdocs: "ultrices.pdf",
      tenderstatus: "New",
    },
    {
      id: 30,
      tenderid: "TDR-692-szl",
      tendertitle:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      tenderpublishdate: "11/15/2019",
      tenderclosedate: "07/25/2019",
      tenderdesc:
        "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      tenderdocs: "duis_consequat_dui.ppt",
      tenderstatus: "Postponed",
    },
    {
      id: 31,
      tenderid: "TDR-616-yid",
      tendertitle:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      tenderpublishdate: "03/30/2020",
      tenderclosedate: "10/07/2019",
      tenderdesc:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      tenderdocs: "posuere_cubilia.doc",
      tenderstatus: "New",
    },
    {
      id: 32,
      tenderid: "TDR-434-egq",
      tendertitle:
        "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      tenderpublishdate: "05/18/2020",
      tenderclosedate: "06/22/2019",
      tenderdesc:
        "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      tenderdocs: "sociis_natoque.xls",
      tenderstatus: "Postponed",
    },
    {
      id: 33,
      tenderid: "TDR-329-whs",
      tendertitle:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      tenderpublishdate: "09/16/2019",
      tenderclosedate: "03/21/2020",
      tenderdesc:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      tenderdocs: "luctus_et_ultrices.xls",
      tenderstatus: "Postponed",
    },
  ];
  SelectionType = SelectionType;

  modalTender: BsModalRef;
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
    if (status == "Awarded") return "badge badge-success";
    if (status == "Cancel") return "badge badge-danger";
    if (status == "Postponed") return "badge badge-warning";
    if (status == "New") return "badge badge-info";
  }

  openModal(template: TemplateRef<any>, title: string) {
    this.modalTitle = title;
    let options = {
      backdrop: true,
      class: "modal-lg",
      ignoreBackdropClick: false,
    };
    this.modalTender = this.modalService.show(template, options);
  }

  closeModal() {
    this.modalTender.hide();
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
