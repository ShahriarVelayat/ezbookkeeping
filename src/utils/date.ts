// src/utils/date.ts
import jalaali from "jalaali-js";

export function toPersianDate(date: string | Date | null | undefined): string {
  if (!date) return "";

  const gDate = date instanceof Date ? date : new Date(date);
  if (isNaN(gDate.getTime())) return "";

  const { jy, jm, jd } = jalaali.toJalaali(
    gDate.getFullYear(),
    gDate.getMonth() + 1,
    gDate.getDate()
  );

  return `${jy}/${String(jm).padStart(2, "0")}/${String(jd).padStart(2, "0")}`;
}
