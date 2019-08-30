import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routes.module';
import { DashboardComponent } from './dashboard.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
    declarations: [
        DashboardComponent,
        IngresoEgresoComponent,
        EstadisticaComponent,
        DetalleComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
    ],
    imports: [CommonModule, DashboardRoutingModule],
    exports: [],
    providers: [],
})
export class DashboardModule { }
