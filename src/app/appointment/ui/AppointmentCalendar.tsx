import React from "react";
import {today, getLocalTimeZone, isWeekend, DateValue} from "@internationalized/date";
import {Calendar} from "@nextui-org/react";
import {useLocale} from "@react-aria/i18n";

export default function AppointmentCalendar({ onChange }: { onChange: (date: DateValue) => void }) {
  let now = today(getLocalTimeZone());

  let { locale } = useLocale();

  let isDateUnavailable = (date: DateValue) => isWeekend(date, locale);

  return (
    <div className="md:mx-3 mx-auto bg-fondo rounded-md my-1 py-2 ">
      <div className="flex justify-center ">
        <Calendar
          aria-label="Date (Unavailable)"
          isDateUnavailable={isDateUnavailable}
          onChange={onChange}
          defaultValue={now}
          className="bg-fondo"

        />
      </div>
    </div>
  );
}
