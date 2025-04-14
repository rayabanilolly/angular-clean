import { NotificationOutput } from "../../../application/outputs/ui/notif.output";

export class BrowserAlertNotification implements NotificationOutput {
    showError(message: string): void {
        alert(`Error: ${message}`);
    }

    showSuccess(message: string): void {
        alert(`${message}`);
    }
}