import { APP_NAME } from "../constants/i18n.constants";

export function getMetadataTitle(title: string): string {
    return `${APP_NAME} | ${title}`;
}