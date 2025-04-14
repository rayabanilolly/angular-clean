import { ModuleWithProviders, NgModule } from "@angular/core";
import { UI_NOTIFICATION_TOKEN } from "./adapter/tokens/ui/notification.token";
import { BrowserAlertNotification } from "./adapter/ui/notif/browser-alert";

@NgModule({})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: UI_NOTIFICATION_TOKEN,
                    useClass: BrowserAlertNotification
                }
            ]
        };
    }
}