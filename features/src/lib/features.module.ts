import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesRoutes } from './features.routes';

@NgModule({
  imports: [FeaturesRoutes],
  exports: [RouterModule],
})
export class FeaturesModule {}
