
import { environmentDev } from "./environment.dev";
import { environmentProd } from "./environment.prod";

export interface Environment {
    db_uri: string
}

export function getEnvironmentVar () {
    if (process.env.NODE_ENV === "production") {
        return environmentProd;
    }
    return environmentDev;
}