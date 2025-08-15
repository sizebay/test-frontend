import * as dateFns from "date-fns";

export class DateFormatter {
  static toReadableString(date: string, pattern = "dd/MM/yyyy, HH:mm:ss") {
    return dateFns.format(date, pattern);
  }
}
