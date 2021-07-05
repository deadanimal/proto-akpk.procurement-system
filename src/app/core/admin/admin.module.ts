import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { AssetIventoryComponent } from './asset-iventory/asset-iventory.component';
import { ProcurementSupplierComponent } from './procurement-supplier/procurement-supplier.component';
import { ProcurementTenderComponent } from './procurement-tender/procurement-tender.component';
import { ProcurementProcurementComponent } from './procurement-procurement/procurement-procurement.component';
import { ProcurementContractComponent } from './procurement-contract/procurement-contract.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    AssetIventoryComponent,
    ProcurementSupplierComponent,
    ProcurementTenderComponent,
    ProcurementProcurementComponent,
    ProcurementContractComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    LeafletModule
  ]
})
export class AdminModule { }
