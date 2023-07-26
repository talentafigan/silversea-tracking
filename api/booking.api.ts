import Axios from "axios";

export class BookingApi {
  getTracking(blNumber: any) {
    return Axios.get(
      "https://siveria-express-service-production.up.railway.app/api/booking/tracking/" +
        blNumber
    );
  }
  getPrint(blNumber: any) {
    return Axios.get(
      "https://siveria-express-service-production.up.railway.app/api/booking/tracking/print/" +
        blNumber
    );
  }
}
