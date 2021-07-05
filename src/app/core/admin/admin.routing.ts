import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { AssetIventoryComponent } from './asset-iventory/asset-iventory.component';
import { ProcurementSupplierComponent } from './procurement-supplier/procurement-supplier.component';
import { ProcurementTenderComponent } from './procurement-tender/procurement-tender.component';
import { ProcurementProcurementComponent } from './procurement-procurement/procurement-procurement.component';
import { ProcurementContractComponent } from './procurement-contract/procurement-contract.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },

            {
                path: 'asset-iventory',
                component: AssetIventoryComponent
            },
            {
                path: 'procurement',
                children: [
                    {
                        path: 'supplier',
                        component: ProcurementSupplierComponent
                    },
                    {
                        path: 'tender',
                        component: ProcurementTenderComponent
                    },
                    {
                        path: 'procurement',
                        component: ProcurementProcurementComponent
                    },
                    {
                        path: 'contract',
                        component: ProcurementContractComponent
                    },
                ]
            },
        ]
    }
]