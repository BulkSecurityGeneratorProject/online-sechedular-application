import { NgModule } from '@angular/core';

import { OnlineSchedulerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [OnlineSchedulerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [OnlineSchedulerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class OnlineSchedulerSharedCommonModule {}
