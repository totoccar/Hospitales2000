import React from "react";
import {today, getLocalTimeZone, isWeekend, DateValue} from "@internationalized/date";
import {Calendar} from "@nextui-org/react";
import { Label } from "@/src/components/ui/label";
import {useLocale} from "@react-aria/i18n";

export default function App() {
  let now = today(getLocalTimeZone());

  // let disabledRanges = [
  //   [now, now.add({days: 5})],
  //   [now.add({days: 14}), now.add({days: 16})],
  //   [now.add({days: 23}), now.add({days: 24})],
  // ];

  let {locale} = useLocale();

  let isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale)

  return (
    <div className="md:mx-3 mx-auto bg-fondo rounded-md my-1 py-2 ">
      <div className="flex justify-center ">
      <Calendar
        aria-label="Date (Unavailable)"
        isDateUnavailable={isDateUnavailable} 
        onChange={(date) => console.log(date)}
        defaultValue={now}
        className="bg-fondo"
        showMonthAndYearPickers
      />
      </div>
    </div>
  );
}
