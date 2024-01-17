import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedRoutes } from './shared.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MaterialModule } from '@material';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, MaterialModule, SharedRoutes],
  declarations: [LayoutComponent, DashboardComponent, SidenavComponent],
})
export class SharedModule {}
