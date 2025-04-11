import { InjectionToken } from "@angular/core";
import { NotificationOutput } from "../../../application/outputs/ui/notif.output";

export const UI_NOTIFICATION_TOKEN = new InjectionToken<NotificationOutput>('UI_NOTIFICATION_TOKEN');