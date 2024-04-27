import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

export const loginGuard = () => {
    const router = inject(Router);
    const key = inject(DataService);
    if (key.SDvRecdF9uT5OR8V5vjGYP3hSwhfjDuZHHxLyW9jBXoi8uWApD0ITLAvWhPl67Rw) {
    return true;
    } else {
        router.navigate(['/login']);
        return false;
    }
}