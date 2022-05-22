
import { toast } from "react-toastify";
export const success = (msg) => {
    toast.success(msg);
}
export const failure = (msg) => {
    toast.error(msg);
}