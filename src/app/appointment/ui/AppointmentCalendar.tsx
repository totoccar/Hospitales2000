import React from "react";
import type {DateValue} from "@react-types/calendar";
import {today, getLocalTimeZone} from "@internationalized/date";
import { Calendar } from "@nextui-org/calendar";
import { Label } from "@/src/components/ui/label";

export default function App() {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState<DateValue>(defaultDate);

  return (
    <div className="w-full rounded-md m-3 p-3">
      <Label className="mb-2 block text-center">Selecciona una fecha</Label>
      <div className="flex gap-x-4 items-center justify-center">
      <Calendar
        aria-label="Date (Controlled Focused Value)"
        focusedValue={focusedDate}
        value={defaultDate}
        onFocusChange={setFocusedDate}
      />
      </div>
    </div>
  );
}
