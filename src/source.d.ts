import type { ColumnType } from "kysely";

export type Decimal = ColumnType<string, number | string, number | string>;

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface MatomoAccess {
  access: Generated<string | null>;
  idaccess: Generated<number>;
  idsite: number;
  login: string;
}

export interface MatomoAlert {
  additional_emails: Generated<string | null>;
  compared_to: Generated<number>;
  email_me: Generated<number>;
  idalert: number;
  login: string;
  metric: string;
  metric_condition: string;
  metric_matched: number;
  name: string;
  period: string;
  phone_numbers: Generated<string | null>;
  report: string;
  report_condition: Generated<string | null>;
  report_matched: Generated<string | null>;
}

export interface MatomoAlertSite {
  idalert: number;
  idsite: number;
}

export interface MatomoAlertTriggered {
  additional_emails: Generated<string | null>;
  compared_to: Generated<number>;
  email_me: Generated<number>;
  idalert: number;
  idsite: number;
  idtriggered: Generated<number>;
  login: string;
  metric: string;
  metric_condition: string;
  metric_matched: number;
  name: string;
  period: string;
  phone_numbers: Generated<string | null>;
  report: string;
  report_condition: Generated<string | null>;
  report_matched: Generated<string | null>;
  ts_last_sent: Generated<Date | null>;
  ts_triggered: Generated<Date>;
  value_new: Generated<Decimal | null>;
  value_old: Generated<Decimal | null>;
}

export interface MatomoArchiveBlob201201 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201301 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201307 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201308 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201309 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201310 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201311 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201312 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201401 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201402 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201403 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201404 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201405 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201406 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201407 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201408 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201409 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201410 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201411 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201412 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201501 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201502 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201503 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201504 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201505 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201506 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201507 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201508 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201509 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201510 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201511 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201512 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201601 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201602 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201603 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201604 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201605 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201606 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201607 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201608 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201609 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201610 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201611 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201612 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201701 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201702 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201703 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201704 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201705 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201706 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201707 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201708 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201709 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201710 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201711 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201712 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201801 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201802 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201803 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201804 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201805 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201806 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201807 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201808 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201809 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201810 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201811 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201812 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201901 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201902 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201903 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201904 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201905 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201906 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201907 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201908 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201909 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201910 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201911 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob201912 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202001 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202002 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202003 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202004 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202005 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202006 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202007 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202008 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202009 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202010 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202011 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202012 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202101 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202102 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202103 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202104 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202105 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202106 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202107 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202108 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202109 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202110 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202111 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202112 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202201 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202202 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202203 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202204 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202205 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202206 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202207 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202208 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202209 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202210 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202211 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202212 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202301 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202302 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202303 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202304 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202305 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202306 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202307 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202308 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202309 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202310 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202311 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202312 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202401 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202402 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202403 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202404 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202405 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202406 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202407 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202408 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202409 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202410 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202411 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202412 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveBlob202501 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<Buffer | null>;
}

export interface MatomoArchiveInvalidations {
  date1: Date;
  date2: Date;
  idarchive: Generated<number | null>;
  idinvalidation: Generated<number>;
  idsite: number;
  name: string;
  period: number;
  report: Generated<string | null>;
  status: Generated<number | null>;
  ts_invalidated: Generated<Date | null>;
  ts_started: Generated<Date | null>;
}

export interface MatomoArchiveNumeric201201 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201301 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201307 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201308 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201309 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201310 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201311 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201312 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201401 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201402 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201403 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201404 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201405 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201406 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201407 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201408 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201409 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201410 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201411 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201412 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201501 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201502 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201503 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201504 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201505 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201506 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201507 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201508 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201509 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201510 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201511 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201512 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201601 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201602 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201603 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201604 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201605 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201606 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201607 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201608 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201609 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201610 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201611 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201612 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201701 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201702 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201703 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201704 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201705 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201706 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201707 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201708 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201709 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201710 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201711 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201712 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201801 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201802 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201803 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201804 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201805 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201806 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201807 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201808 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201809 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201810 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201811 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201812 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201901 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201902 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201903 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201904 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201905 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201906 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201907 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201908 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201909 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201910 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201911 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric201912 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202001 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202002 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202003 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202004 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202005 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202006 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202007 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202008 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202009 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202010 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202011 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202012 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202101 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202102 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202103 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202104 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202105 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202106 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202107 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202108 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202109 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202110 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202111 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202112 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202201 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202202 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202203 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202204 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202205 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202206 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202207 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202208 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202209 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202210 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202211 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202212 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202301 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202302 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202303 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202304 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202305 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202306 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202307 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202308 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202309 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202310 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202311 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202312 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202401 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202402 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202403 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202404 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202405 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202406 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202407 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202408 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202409 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202410 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202411 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202412 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoArchiveNumeric202501 {
  date1: Generated<Date | null>;
  date2: Generated<Date | null>;
  idarchive: number;
  idsite: Generated<number | null>;
  name: string;
  period: Generated<number | null>;
  ts_archived: Generated<Date | null>;
  value: Generated<number | null>;
}

export interface MatomoBingStats {
  data: Generated<Buffer | null>;
  date: Date;
  type: string;
  url: string;
}

export interface MatomoBruteForceLog {
  attempted_at: Date;
  id_brute_force_log: Generated<number>;
  ip_address: Generated<string | null>;
  login: Generated<string | null>;
}

export interface MatomoChanges {
  created_time: Date;
  description: Generated<string | null>;
  idchange: Generated<number>;
  link: Generated<string | null>;
  link_name: Generated<string | null>;
  plugin_name: string;
  title: string;
  version: string;
}

export interface MatomoCustomDimensions {
  active: Generated<number>;
  case_sensitive: Generated<number>;
  extractions: Generated<string>;
  idcustomdimension: number;
  idsite: number;
  index: number;
  name: string;
  scope: string;
}

export interface MatomoCustomReports {
  category: Generated<string>;
  created_date: Date;
  description: Generated<string>;
  dimensions: string;
  idcustomreport: Generated<number>;
  idsite: number;
  metrics: string;
  name: string;
  report_type: Generated<string>;
  revision: Generated<number>;
  segment_filter: Generated<string>;
  status: Generated<string>;
  subcategory: Generated<string>;
  updated_date: Date;
}

export interface MatomoExperiments {
  confidence_threshold: Generated<Decimal>;
  description: string;
  end_date: Generated<Date | null>;
  excluded_targets: string;
  forward_utm_params: Generated<number>;
  hypothesis: string;
  idexperiment: Generated<number>;
  idsite: number;
  included_targets: string;
  mde_relative: Generated<number>;
  modified_date: Date;
  name: string;
  original_redirect_url: Generated<string | null>;
  percentage_participants: Generated<number>;
  start_date: Generated<Date | null>;
  status: string;
  success_metrics: string;
}

export interface MatomoExperimentsStrategy {
  idexperiment: number;
  metric: string;
  strategy: string;
}

export interface MatomoExperimentsVariations {
  deleted: Generated<number>;
  idexperiment: number;
  idvariation: Generated<number>;
  name: string;
  percentage: Generated<number | null>;
  redirect_url: Generated<string | null>;
}

export interface MatomoFunnel {
  activated: Generated<number>;
  created_date: Date;
  deleted: Generated<number>;
  deleted_date: Generated<Date | null>;
  idfunnel: Generated<number>;
  idgoal: number;
  idsite: number;
  name: Generated<string | null>;
  revision: Generated<number>;
}

export interface MatomoFunnelSteps {
  idfunnel: number;
  name: Generated<string>;
  pattern: string;
  pattern_type: string;
  position: Generated<number>;
  required: Generated<number>;
}

export interface MatomoGoal {
  allow_multiple: number;
  case_sensitive: number;
  deleted: Generated<number>;
  description: Generated<string>;
  event_value_as_revenue: Generated<number>;
  idgoal: number;
  idsite: number;
  match_attribute: string;
  name: string;
  pattern: string;
  pattern_type: string;
  revenue: number;
}

export interface MatomoGoogleStats {
  data: Generated<Buffer | null>;
  date: Date;
  type: string;
  url: string;
}

export interface MatomoLocks {
  expiry_time: Generated<number | null>;
  key: string;
  value: Generated<string | null>;
}

export interface MatomoLogAbtesting {
  entered: Generated<number | null>;
  idexperiment: number;
  idsite: number;
  idvariation: number;
  idvisit: number;
  idvisitor: Buffer;
  server_time: Date;
}

export interface MatomoLogAction {
  hash: number;
  idaction: Generated<number>;
  name: Generated<string | null>;
  type: Generated<number | null>;
  url_prefix: Generated<number | null>;
}

export interface MatomoLogConversion {
  buster: number;
  config_browser_name: Generated<string | null>;
  config_client_type: Generated<number | null>;
  config_device_brand: Generated<string | null>;
  config_device_model: Generated<string | null>;
  config_device_type: Generated<number | null>;
  custom_dimension_1: Generated<string | null>;
  custom_dimension_2: Generated<string | null>;
  custom_dimension_3: Generated<string | null>;
  custom_dimension_4: Generated<string | null>;
  custom_dimension_5: Generated<string | null>;
  idaction_url: Generated<number | null>;
  idgoal: number;
  idlink_va: Generated<number | null>;
  idorder: Generated<string | null>;
  idsite: number;
  idvisit: number;
  idvisitor: Buffer;
  items: Generated<number | null>;
  location_city: Generated<string | null>;
  location_country: Generated<string | null>;
  location_latitude: Generated<Decimal | null>;
  location_longitude: Generated<Decimal | null>;
  location_region: Generated<string | null>;
  pageviews_before: Generated<number | null>;
  referer_keyword: Generated<string | null>;
  referer_name: Generated<string | null>;
  referer_type: Generated<number | null>;
  revenue: Generated<number | null>;
  revenue_discount: Generated<number | null>;
  revenue_shipping: Generated<number | null>;
  revenue_subtotal: Generated<number | null>;
  revenue_tax: Generated<number | null>;
  server_time: Date;
  url: string;
  visitor_count_visits: Generated<number>;
  visitor_returning: Generated<number | null>;
  visitor_seconds_since_first: Generated<number | null>;
  visitor_seconds_since_order: Generated<number | null>;
}

export interface MatomoLogConversionItem {
  deleted: number;
  idaction_category: number;
  idaction_category2: number;
  idaction_category3: number;
  idaction_category4: number;
  idaction_category5: number;
  idaction_name: number;
  idaction_sku: number;
  idorder: string;
  idsite: number;
  idvisit: number;
  idvisitor: Buffer;
  price: number;
  quantity: number;
  server_time: Date;
}

export interface MatomoLogForm {
  converted: Generated<number>;
  first_idformview: string;
  form_last_action_time: Date;
  idlogform: Generated<number>;
  idsite: number;
  idsiteform: number;
  idvisit: number;
  idvisitor: Buffer;
  last_idformview: string;
  num_starts: Generated<number>;
  num_submissions: Generated<number>;
  num_views: Generated<number>;
  time_hesitation: Generated<number>;
  time_spent: Generated<number>;
  time_to_first_submission: Generated<number>;
}

export interface MatomoLogFormField {
  field_name: string;
  field_size: Generated<number>;
  idformview: string;
  idlogform: number;
  idlogformpage: number;
  idpageview: Generated<string | null>;
  left_blank: Generated<number>;
  num_changes: Generated<number>;
  num_cursor: Generated<number>;
  num_deletes: Generated<number>;
  num_focus: Generated<number>;
  submitted: Generated<number>;
  time_hesitation: Generated<number>;
  time_spent: Generated<number>;
}

export interface MatomoLogFormPage {
  entry_field_name: Generated<string | null>;
  exit_field_name: Generated<string | null>;
  idaction_url: Generated<number | null>;
  idlogform: number;
  idlogformpage: Generated<number>;
  num_starts: Generated<number>;
  num_submissions: Generated<number>;
  num_views: Generated<number>;
  time_hesitation: Generated<number>;
  time_spent: Generated<number>;
  time_to_first_submission: Generated<number>;
}

export interface MatomoLogFunnel {
  created_time: Date;
  idaction: Generated<number | null>;
  idaction_next: Generated<number | null>;
  idaction_prev: Generated<number | null>;
  idfunnel: number;
  idlink_va: number;
  idsite: number;
  idvisit: number;
  max_step: Generated<number>;
  min_step: Generated<number>;
  step_position: number;
}

export interface MatomoLoggerMessage {
  idlogger_message: Generated<number>;
  level: Generated<string | null>;
  message: Generated<string | null>;
  tag: Generated<string | null>;
  timestamp: Generated<Date | null>;
}

export interface MatomoLogHsr {
  device_type: Generated<number>;
  fold_y_relative: Generated<number | null>;
  idaction_url: Generated<number>;
  idhsrview: string;
  idloghsr: Generated<number>;
  idpageview: Generated<string | null>;
  idsite: number;
  idvisit: number;
  scroll_y_max_relative: Generated<number | null>;
  server_time: Date;
  time_on_page: number;
  viewport_h_px: Generated<number | null>;
  viewport_w_px: Generated<number | null>;
}

export interface MatomoLogHsrBlob {
  compressed: Generated<number>;
  hash: number;
  idhsrblob: Generated<number>;
  value: Generated<Buffer | null>;
}

export interface MatomoLogHsrEvent {
  event_type: Generated<number>;
  idhsrblob: Generated<number | null>;
  idhsrevent: Generated<number>;
  idloghsr: number;
  idselector: Generated<number | null>;
  time_since_load: Generated<number>;
  x: Generated<number>;
  y: Generated<number>;
}

export interface MatomoLogHsrSite {
  idloghsr: number;
  idsitehsr: number;
}

export interface MatomoLogLinkVisitAction {
  custom_dimension_1: Generated<string | null>;
  custom_dimension_2: Generated<string | null>;
  custom_dimension_3: Generated<string | null>;
  custom_dimension_4: Generated<string | null>;
  custom_dimension_5: Generated<string | null>;
  custom_float: Generated<number | null>;
  idaction_content_interaction: Generated<number | null>;
  idaction_content_name: Generated<number | null>;
  idaction_content_piece: Generated<number | null>;
  idaction_content_target: Generated<number | null>;
  idaction_event_action: Generated<number | null>;
  idaction_event_category: Generated<number | null>;
  idaction_name: Generated<number | null>;
  idaction_name_ref: Generated<number | null>;
  idaction_product_cat: Generated<number | null>;
  idaction_product_cat2: Generated<number | null>;
  idaction_product_cat3: Generated<number | null>;
  idaction_product_cat4: Generated<number | null>;
  idaction_product_cat5: Generated<number | null>;
  idaction_product_name: Generated<number | null>;
  idaction_product_sku: Generated<number | null>;
  idaction_url: Generated<number | null>;
  idaction_url_ref: Generated<number | null>;
  idlink_va: Generated<number>;
  idpageview: Generated<string | null>;
  idsite: number;
  idvisit: number;
  idvisitor: Buffer;
  pageview_position: Generated<number | null>;
  product_price: Generated<number | null>;
  search_cat: Generated<string | null>;
  search_count: Generated<number | null>;
  server_time: Date;
  time_dom_completion: Generated<number | null>;
  time_dom_processing: Generated<number | null>;
  time_network: Generated<number | null>;
  time_on_load: Generated<number | null>;
  time_server: Generated<number | null>;
  time_spent: Generated<number | null>;
  time_spent_ref_action: Generated<number | null>;
  time_transfer: Generated<number | null>;
}

export interface MatomoLogProfiling {
  count: Generated<number | null>;
  idprofiling: Generated<number>;
  query: string;
  sum_time_ms: Generated<number | null>;
}

export interface MatomoLogVisit {
  config_browser_engine: Generated<string | null>;
  config_browser_name: Generated<string | null>;
  config_browser_version: Generated<string | null>;
  config_client_type: Generated<number | null>;
  config_cookie: Generated<number | null>;
  config_device_brand: Generated<string | null>;
  config_device_model: Generated<string | null>;
  config_device_type: Generated<number | null>;
  config_flash: Generated<number | null>;
  config_id: Buffer;
  config_java: Generated<number | null>;
  config_os: Generated<string | null>;
  config_os_version: Generated<string | null>;
  config_pdf: Generated<number | null>;
  config_quicktime: Generated<number | null>;
  config_realplayer: Generated<number | null>;
  config_resolution: Generated<string | null>;
  config_silverlight: Generated<number | null>;
  config_windowsmedia: Generated<number | null>;
  custom_dimension_1: Generated<string | null>;
  custom_dimension_2: Generated<string | null>;
  custom_dimension_3: Generated<string | null>;
  custom_dimension_4: Generated<string | null>;
  custom_dimension_5: Generated<string | null>;
  idsite: number;
  idvisit: Generated<number>;
  idvisitor: Buffer;
  last_idlink_va: Generated<number | null>;
  location_browser_lang: Generated<string | null>;
  location_city: Generated<string | null>;
  location_country: Generated<string | null>;
  location_ip: Buffer;
  location_latitude: Generated<Decimal | null>;
  location_longitude: Generated<Decimal | null>;
  location_region: Generated<string | null>;
  profilable: Generated<number | null>;
  referer_keyword: Generated<string | null>;
  referer_name: Generated<string | null>;
  referer_type: Generated<number | null>;
  referer_url: Generated<string | null>;
  user_id: Generated<string | null>;
  visit_entry_idaction_name: Generated<number | null>;
  visit_entry_idaction_url: Generated<number | null>;
  visit_exit_idaction_name: Generated<number | null>;
  visit_exit_idaction_url: Generated<number | null>;
  visit_first_action_time: Date;
  visit_goal_buyer: Generated<number | null>;
  visit_goal_converted: Generated<number | null>;
  visit_last_action_time: Date;
  visit_total_actions: Generated<number | null>;
  visit_total_events: Generated<number | null>;
  visit_total_interactions: Generated<number | null>;
  visit_total_searches: Generated<number | null>;
  visit_total_time: number;
  visitor_count_visits: Generated<number>;
  visitor_localtime: Generated<string | null>;
  visitor_returning: Generated<number | null>;
  visitor_seconds_since_first: Generated<number | null>;
  visitor_seconds_since_last: Generated<number | null>;
  visitor_seconds_since_order: Generated<number | null>;
}

export interface MatomoLogWebvitalsReport {
  date: string;
  idlogwebvitalsreport: Generated<number>;
  idsite: number;
  report: Buffer;
  strategy: number;
  url: string;
}

export interface MatomoOption {
  autoload: Generated<number>;
  option_name: string;
  option_value: string;
}

export interface MatomoPluginSetting {
  idplugin_setting: Generated<number>;
  json_encoded: Generated<number>;
  plugin_name: string;
  setting_name: string;
  setting_value: string;
  user_login: Generated<string>;
}

export interface MatomoPrivacyLogdataAnonymizations {
  anonymize_ip: Generated<number>;
  anonymize_location: Generated<number>;
  anonymize_userid: Generated<number>;
  date_end: Date;
  date_start: Date;
  idlogdata_anonymization: Generated<number>;
  idsites: Generated<string | null>;
  job_finish_date: Generated<Date | null>;
  job_start_date: Generated<Date | null>;
  output: Generated<string | null>;
  requester: Generated<string>;
  scheduled_date: Generated<Date | null>;
  unset_link_visit_action_columns: Generated<string>;
  unset_visit_columns: Generated<string>;
}

export interface MatomoQueuedtrackingQueue {
  expiry_time: Generated<number | null>;
  queue_key: string;
  queue_value: Generated<string | null>;
}

export interface MatomoReport {
  deleted: Generated<number>;
  description: string;
  evolution_graph_period_n: number;
  evolution_graph_within_period: Generated<number>;
  format: string;
  hour: Generated<number>;
  idreport: Generated<number>;
  idsegment: Generated<number | null>;
  idsite: number;
  login: string;
  parameters: Generated<string | null>;
  period: string;
  period_param: Generated<string | null>;
  reports: string;
  ts_created: Generated<Date | null>;
  ts_last_sent: Generated<Date | null>;
  type: string;
}

export interface MatomoReportSubscriptions {
  email: string;
  idreport: number;
  token: Generated<string | null>;
  ts_subscribed: Generated<Date>;
  ts_unsubscribed: Generated<Date | null>;
}

export interface MatomoSegment {
  auto_archive: Generated<number>;
  definition: string;
  deleted: Generated<number>;
  enable_all_users: Generated<number>;
  enable_only_idsite: Generated<number | null>;
  hash: Generated<string | null>;
  idsegment: Generated<number>;
  login: string;
  name: string;
  ts_created: Generated<Date | null>;
  ts_last_edit: Generated<Date | null>;
}

export interface MatomoSequence {
  name: string;
  value: number;
}

export interface MatomoSession {
  data: Generated<string | null>;
  id: string;
  lifetime: Generated<number | null>;
  modified: Generated<number | null>;
}

export interface MatomoSite {
  creator_login: Generated<string | null>;
  currency: string;
  ecommerce: Generated<number | null>;
  exclude_unknown_urls: Generated<number | null>;
  excluded_ips: string;
  excluded_parameters: string;
  excluded_referrers: string;
  excluded_user_agents: string;
  group: string;
  idsite: Generated<number>;
  keep_url_fragment: Generated<number>;
  main_url: string;
  name: string;
  sitesearch: Generated<number | null>;
  sitesearch_category_parameters: string;
  sitesearch_keyword_parameters: string;
  timezone: string;
  ts_created: Generated<Date | null>;
  type: string;
}

export interface MatomoSiteForm {
  auto_created: number;
  conversion_rule_option: Generated<string>;
  conversion_rules: Generated<string | null>;
  created_date: Date;
  description: string;
  fields: Generated<string | null>;
  idsite: number;
  idsiteform: Generated<number>;
  in_overview: Generated<number>;
  match_form_rules: Generated<string | null>;
  match_page_rules: Generated<string | null>;
  name: string;
  status: Generated<string>;
  updated_date: Date;
}

export interface MatomoSiteHsr {
  breakpoint_mobile: Generated<number>;
  breakpoint_tablet: Generated<number>;
  capture_keystrokes: Generated<number>;
  capture_manually: Generated<number>;
  created_date: Date;
  excluded_elements: Generated<string | null>;
  idsite: number;
  idsitehsr: Generated<number>;
  match_page_rules: Generated<string | null>;
  min_session_time: Generated<number>;
  name: string;
  page_treemirror: Generated<Buffer | null>;
  record_type: Generated<number | null>;
  requires_activity: Generated<number>;
  sample_limit: Generated<number>;
  sample_rate: Generated<Decimal>;
  screenshot_url: Generated<string | null>;
  status: Generated<string>;
  updated_date: Date;
}

export interface MatomoSiteSetting {
  idsite: number;
  idsite_setting: Generated<number>;
  json_encoded: Generated<number>;
  plugin_name: string;
  setting_name: string;
  setting_value: string;
}

export interface MatomoSiteUrl {
  idsite: number;
  url: string;
}

export interface MatomoTagmanagerContainer {
  context: string;
  created_date: Date;
  deleted_date: Generated<Date | null>;
  description: Generated<string>;
  idcontainer: string;
  idsite: number;
  ignoreGtmDataLayer: Generated<number>;
  name: string;
  status: string;
  updated_date: Date;
}

export interface MatomoTagmanagerContainerRelease {
  deleted_date: Generated<Date | null>;
  environment: string;
  idcontainer: string;
  idcontainerrelease: Generated<number>;
  idcontainerversion: number;
  idsite: number;
  release_date: Date;
  release_login: string;
  status: string;
}

export interface MatomoTagmanagerContainerVersion {
  created_date: Date;
  deleted_date: Generated<Date | null>;
  description: Generated<string>;
  idcontainer: string;
  idcontainerversion: Generated<number>;
  idsite: number;
  name: Generated<string>;
  revision: Generated<number>;
  status: string;
  updated_date: Date;
}

export interface MatomoTagmanagerTag {
  block_trigger_ids: Generated<string>;
  created_date: Date;
  deleted_date: Generated<Date | null>;
  description: string;
  end_date: Generated<Date | null>;
  fire_delay: Generated<number>;
  fire_limit: Generated<string>;
  fire_trigger_ids: Generated<string>;
  idcontainerversion: number;
  idsite: number;
  idtag: Generated<number>;
  name: string;
  parameters: Generated<string>;
  priority: number;
  start_date: Generated<Date | null>;
  status: string;
  type: string;
  updated_date: Date;
}

export interface MatomoTagmanagerTrigger {
  conditions: Generated<string>;
  created_date: Date;
  deleted_date: Generated<Date | null>;
  description: string;
  idcontainerversion: number;
  idsite: number;
  idtrigger: Generated<number>;
  name: string;
  parameters: Generated<string>;
  status: string;
  type: string;
  updated_date: Date;
}

export interface MatomoTagmanagerVariable {
  created_date: Date;
  default_value: Generated<string | null>;
  deleted_date: Generated<Date | null>;
  description: string;
  idcontainerversion: number;
  idsite: number;
  idvariable: Generated<number>;
  lookup_table: Generated<string>;
  name: string;
  parameters: Generated<string>;
  status: string;
  type: string;
  updated_date: Date;
}

export interface MatomoTrackingFailure {
  date_first_occurred: Date;
  idfailure: number;
  idsite: number;
  request_url: string;
}

export interface MatomoTwofactorRecoveryCode {
  idrecoverycode: Generated<number>;
  login: string;
  recovery_code: string;
}

export interface MatomoUser {
  date_registered: Generated<Date | null>;
  email: string;
  idchange_last_viewed: Generated<number | null>;
  invite_accept_at: Generated<Date | null>;
  invite_expired_at: Generated<Date | null>;
  invite_link_token: Generated<string | null>;
  invite_token: Generated<string | null>;
  invited_by: Generated<string | null>;
  login: string;
  password: string;
  superuser_access: Generated<number>;
  ts_changes_shown: Generated<Date | null>;
  ts_password_modified: Generated<Date | null>;
  twofactor_secret: Generated<string>;
}

export interface MatomoUserDashboard {
  iddashboard: number;
  layout: string;
  login: string;
  name: Generated<string | null>;
}

export interface MatomoUserLanguage {
  language: string;
  login: string;
  use_12_hour_clock: Generated<number>;
}

export interface MatomoUserTokenAuth {
  date_created: Date;
  date_expired: Generated<Date | null>;
  description: string;
  hash_algo: string;
  idusertokenauth: Generated<number>;
  last_used: Generated<Date | null>;
  login: string;
  password: string;
  secure_only: Generated<number>;
  system_token: Generated<number>;
}

export interface MatomoYandexStats {
  data: Generated<Buffer | null>;
  date: Date;
  type: string;
  url: string;
}

export interface DB {
  matomo_access: MatomoAccess;
  matomo_alert: MatomoAlert;
  matomo_alert_site: MatomoAlertSite;
  matomo_alert_triggered: MatomoAlertTriggered;
  matomo_archive_blob_2012_01: MatomoArchiveBlob201201;
  matomo_archive_blob_2013_01: MatomoArchiveBlob201301;
  matomo_archive_blob_2013_07: MatomoArchiveBlob201307;
  matomo_archive_blob_2013_08: MatomoArchiveBlob201308;
  matomo_archive_blob_2013_09: MatomoArchiveBlob201309;
  matomo_archive_blob_2013_10: MatomoArchiveBlob201310;
  matomo_archive_blob_2013_11: MatomoArchiveBlob201311;
  matomo_archive_blob_2013_12: MatomoArchiveBlob201312;
  matomo_archive_blob_2014_01: MatomoArchiveBlob201401;
  matomo_archive_blob_2014_02: MatomoArchiveBlob201402;
  matomo_archive_blob_2014_03: MatomoArchiveBlob201403;
  matomo_archive_blob_2014_04: MatomoArchiveBlob201404;
  matomo_archive_blob_2014_05: MatomoArchiveBlob201405;
  matomo_archive_blob_2014_06: MatomoArchiveBlob201406;
  matomo_archive_blob_2014_07: MatomoArchiveBlob201407;
  matomo_archive_blob_2014_08: MatomoArchiveBlob201408;
  matomo_archive_blob_2014_09: MatomoArchiveBlob201409;
  matomo_archive_blob_2014_10: MatomoArchiveBlob201410;
  matomo_archive_blob_2014_11: MatomoArchiveBlob201411;
  matomo_archive_blob_2014_12: MatomoArchiveBlob201412;
  matomo_archive_blob_2015_01: MatomoArchiveBlob201501;
  matomo_archive_blob_2015_02: MatomoArchiveBlob201502;
  matomo_archive_blob_2015_03: MatomoArchiveBlob201503;
  matomo_archive_blob_2015_04: MatomoArchiveBlob201504;
  matomo_archive_blob_2015_05: MatomoArchiveBlob201505;
  matomo_archive_blob_2015_06: MatomoArchiveBlob201506;
  matomo_archive_blob_2015_07: MatomoArchiveBlob201507;
  matomo_archive_blob_2015_08: MatomoArchiveBlob201508;
  matomo_archive_blob_2015_09: MatomoArchiveBlob201509;
  matomo_archive_blob_2015_10: MatomoArchiveBlob201510;
  matomo_archive_blob_2015_11: MatomoArchiveBlob201511;
  matomo_archive_blob_2015_12: MatomoArchiveBlob201512;
  matomo_archive_blob_2016_01: MatomoArchiveBlob201601;
  matomo_archive_blob_2016_02: MatomoArchiveBlob201602;
  matomo_archive_blob_2016_03: MatomoArchiveBlob201603;
  matomo_archive_blob_2016_04: MatomoArchiveBlob201604;
  matomo_archive_blob_2016_05: MatomoArchiveBlob201605;
  matomo_archive_blob_2016_06: MatomoArchiveBlob201606;
  matomo_archive_blob_2016_07: MatomoArchiveBlob201607;
  matomo_archive_blob_2016_08: MatomoArchiveBlob201608;
  matomo_archive_blob_2016_09: MatomoArchiveBlob201609;
  matomo_archive_blob_2016_10: MatomoArchiveBlob201610;
  matomo_archive_blob_2016_11: MatomoArchiveBlob201611;
  matomo_archive_blob_2016_12: MatomoArchiveBlob201612;
  matomo_archive_blob_2017_01: MatomoArchiveBlob201701;
  matomo_archive_blob_2017_02: MatomoArchiveBlob201702;
  matomo_archive_blob_2017_03: MatomoArchiveBlob201703;
  matomo_archive_blob_2017_04: MatomoArchiveBlob201704;
  matomo_archive_blob_2017_05: MatomoArchiveBlob201705;
  matomo_archive_blob_2017_06: MatomoArchiveBlob201706;
  matomo_archive_blob_2017_07: MatomoArchiveBlob201707;
  matomo_archive_blob_2017_08: MatomoArchiveBlob201708;
  matomo_archive_blob_2017_09: MatomoArchiveBlob201709;
  matomo_archive_blob_2017_10: MatomoArchiveBlob201710;
  matomo_archive_blob_2017_11: MatomoArchiveBlob201711;
  matomo_archive_blob_2017_12: MatomoArchiveBlob201712;
  matomo_archive_blob_2018_01: MatomoArchiveBlob201801;
  matomo_archive_blob_2018_02: MatomoArchiveBlob201802;
  matomo_archive_blob_2018_03: MatomoArchiveBlob201803;
  matomo_archive_blob_2018_04: MatomoArchiveBlob201804;
  matomo_archive_blob_2018_05: MatomoArchiveBlob201805;
  matomo_archive_blob_2018_06: MatomoArchiveBlob201806;
  matomo_archive_blob_2018_07: MatomoArchiveBlob201807;
  matomo_archive_blob_2018_08: MatomoArchiveBlob201808;
  matomo_archive_blob_2018_09: MatomoArchiveBlob201809;
  matomo_archive_blob_2018_10: MatomoArchiveBlob201810;
  matomo_archive_blob_2018_11: MatomoArchiveBlob201811;
  matomo_archive_blob_2018_12: MatomoArchiveBlob201812;
  matomo_archive_blob_2019_01: MatomoArchiveBlob201901;
  matomo_archive_blob_2019_02: MatomoArchiveBlob201902;
  matomo_archive_blob_2019_03: MatomoArchiveBlob201903;
  matomo_archive_blob_2019_04: MatomoArchiveBlob201904;
  matomo_archive_blob_2019_05: MatomoArchiveBlob201905;
  matomo_archive_blob_2019_06: MatomoArchiveBlob201906;
  matomo_archive_blob_2019_07: MatomoArchiveBlob201907;
  matomo_archive_blob_2019_08: MatomoArchiveBlob201908;
  matomo_archive_blob_2019_09: MatomoArchiveBlob201909;
  matomo_archive_blob_2019_10: MatomoArchiveBlob201910;
  matomo_archive_blob_2019_11: MatomoArchiveBlob201911;
  matomo_archive_blob_2019_12: MatomoArchiveBlob201912;
  matomo_archive_blob_2020_01: MatomoArchiveBlob202001;
  matomo_archive_blob_2020_02: MatomoArchiveBlob202002;
  matomo_archive_blob_2020_03: MatomoArchiveBlob202003;
  matomo_archive_blob_2020_04: MatomoArchiveBlob202004;
  matomo_archive_blob_2020_05: MatomoArchiveBlob202005;
  matomo_archive_blob_2020_06: MatomoArchiveBlob202006;
  matomo_archive_blob_2020_07: MatomoArchiveBlob202007;
  matomo_archive_blob_2020_08: MatomoArchiveBlob202008;
  matomo_archive_blob_2020_09: MatomoArchiveBlob202009;
  matomo_archive_blob_2020_10: MatomoArchiveBlob202010;
  matomo_archive_blob_2020_11: MatomoArchiveBlob202011;
  matomo_archive_blob_2020_12: MatomoArchiveBlob202012;
  matomo_archive_blob_2021_01: MatomoArchiveBlob202101;
  matomo_archive_blob_2021_02: MatomoArchiveBlob202102;
  matomo_archive_blob_2021_03: MatomoArchiveBlob202103;
  matomo_archive_blob_2021_04: MatomoArchiveBlob202104;
  matomo_archive_blob_2021_05: MatomoArchiveBlob202105;
  matomo_archive_blob_2021_06: MatomoArchiveBlob202106;
  matomo_archive_blob_2021_07: MatomoArchiveBlob202107;
  matomo_archive_blob_2021_08: MatomoArchiveBlob202108;
  matomo_archive_blob_2021_09: MatomoArchiveBlob202109;
  matomo_archive_blob_2021_10: MatomoArchiveBlob202110;
  matomo_archive_blob_2021_11: MatomoArchiveBlob202111;
  matomo_archive_blob_2021_12: MatomoArchiveBlob202112;
  matomo_archive_blob_2022_01: MatomoArchiveBlob202201;
  matomo_archive_blob_2022_02: MatomoArchiveBlob202202;
  matomo_archive_blob_2022_03: MatomoArchiveBlob202203;
  matomo_archive_blob_2022_04: MatomoArchiveBlob202204;
  matomo_archive_blob_2022_05: MatomoArchiveBlob202205;
  matomo_archive_blob_2022_06: MatomoArchiveBlob202206;
  matomo_archive_blob_2022_07: MatomoArchiveBlob202207;
  matomo_archive_blob_2022_08: MatomoArchiveBlob202208;
  matomo_archive_blob_2022_09: MatomoArchiveBlob202209;
  matomo_archive_blob_2022_10: MatomoArchiveBlob202210;
  matomo_archive_blob_2022_11: MatomoArchiveBlob202211;
  matomo_archive_blob_2022_12: MatomoArchiveBlob202212;
  matomo_archive_blob_2023_01: MatomoArchiveBlob202301;
  matomo_archive_blob_2023_02: MatomoArchiveBlob202302;
  matomo_archive_blob_2023_03: MatomoArchiveBlob202303;
  matomo_archive_blob_2023_04: MatomoArchiveBlob202304;
  matomo_archive_blob_2023_05: MatomoArchiveBlob202305;
  matomo_archive_blob_2023_06: MatomoArchiveBlob202306;
  matomo_archive_blob_2023_07: MatomoArchiveBlob202307;
  matomo_archive_blob_2023_08: MatomoArchiveBlob202308;
  matomo_archive_blob_2023_09: MatomoArchiveBlob202309;
  matomo_archive_blob_2023_10: MatomoArchiveBlob202310;
  matomo_archive_blob_2023_11: MatomoArchiveBlob202311;
  matomo_archive_blob_2023_12: MatomoArchiveBlob202312;
  matomo_archive_blob_2024_01: MatomoArchiveBlob202401;
  matomo_archive_blob_2024_02: MatomoArchiveBlob202402;
  matomo_archive_blob_2024_03: MatomoArchiveBlob202403;
  matomo_archive_blob_2024_04: MatomoArchiveBlob202404;
  matomo_archive_blob_2024_05: MatomoArchiveBlob202405;
  matomo_archive_blob_2024_06: MatomoArchiveBlob202406;
  matomo_archive_blob_2024_07: MatomoArchiveBlob202407;
  matomo_archive_blob_2024_08: MatomoArchiveBlob202408;
  matomo_archive_blob_2024_09: MatomoArchiveBlob202409;
  matomo_archive_blob_2024_10: MatomoArchiveBlob202410;
  matomo_archive_blob_2024_11: MatomoArchiveBlob202411;
  matomo_archive_blob_2024_12: MatomoArchiveBlob202412;
  matomo_archive_blob_2025_01: MatomoArchiveBlob202501;
  matomo_archive_invalidations: MatomoArchiveInvalidations;
  matomo_archive_numeric_2012_01: MatomoArchiveNumeric201201;
  matomo_archive_numeric_2013_01: MatomoArchiveNumeric201301;
  matomo_archive_numeric_2013_07: MatomoArchiveNumeric201307;
  matomo_archive_numeric_2013_08: MatomoArchiveNumeric201308;
  matomo_archive_numeric_2013_09: MatomoArchiveNumeric201309;
  matomo_archive_numeric_2013_10: MatomoArchiveNumeric201310;
  matomo_archive_numeric_2013_11: MatomoArchiveNumeric201311;
  matomo_archive_numeric_2013_12: MatomoArchiveNumeric201312;
  matomo_archive_numeric_2014_01: MatomoArchiveNumeric201401;
  matomo_archive_numeric_2014_02: MatomoArchiveNumeric201402;
  matomo_archive_numeric_2014_03: MatomoArchiveNumeric201403;
  matomo_archive_numeric_2014_04: MatomoArchiveNumeric201404;
  matomo_archive_numeric_2014_05: MatomoArchiveNumeric201405;
  matomo_archive_numeric_2014_06: MatomoArchiveNumeric201406;
  matomo_archive_numeric_2014_07: MatomoArchiveNumeric201407;
  matomo_archive_numeric_2014_08: MatomoArchiveNumeric201408;
  matomo_archive_numeric_2014_09: MatomoArchiveNumeric201409;
  matomo_archive_numeric_2014_10: MatomoArchiveNumeric201410;
  matomo_archive_numeric_2014_11: MatomoArchiveNumeric201411;
  matomo_archive_numeric_2014_12: MatomoArchiveNumeric201412;
  matomo_archive_numeric_2015_01: MatomoArchiveNumeric201501;
  matomo_archive_numeric_2015_02: MatomoArchiveNumeric201502;
  matomo_archive_numeric_2015_03: MatomoArchiveNumeric201503;
  matomo_archive_numeric_2015_04: MatomoArchiveNumeric201504;
  matomo_archive_numeric_2015_05: MatomoArchiveNumeric201505;
  matomo_archive_numeric_2015_06: MatomoArchiveNumeric201506;
  matomo_archive_numeric_2015_07: MatomoArchiveNumeric201507;
  matomo_archive_numeric_2015_08: MatomoArchiveNumeric201508;
  matomo_archive_numeric_2015_09: MatomoArchiveNumeric201509;
  matomo_archive_numeric_2015_10: MatomoArchiveNumeric201510;
  matomo_archive_numeric_2015_11: MatomoArchiveNumeric201511;
  matomo_archive_numeric_2015_12: MatomoArchiveNumeric201512;
  matomo_archive_numeric_2016_01: MatomoArchiveNumeric201601;
  matomo_archive_numeric_2016_02: MatomoArchiveNumeric201602;
  matomo_archive_numeric_2016_03: MatomoArchiveNumeric201603;
  matomo_archive_numeric_2016_04: MatomoArchiveNumeric201604;
  matomo_archive_numeric_2016_05: MatomoArchiveNumeric201605;
  matomo_archive_numeric_2016_06: MatomoArchiveNumeric201606;
  matomo_archive_numeric_2016_07: MatomoArchiveNumeric201607;
  matomo_archive_numeric_2016_08: MatomoArchiveNumeric201608;
  matomo_archive_numeric_2016_09: MatomoArchiveNumeric201609;
  matomo_archive_numeric_2016_10: MatomoArchiveNumeric201610;
  matomo_archive_numeric_2016_11: MatomoArchiveNumeric201611;
  matomo_archive_numeric_2016_12: MatomoArchiveNumeric201612;
  matomo_archive_numeric_2017_01: MatomoArchiveNumeric201701;
  matomo_archive_numeric_2017_02: MatomoArchiveNumeric201702;
  matomo_archive_numeric_2017_03: MatomoArchiveNumeric201703;
  matomo_archive_numeric_2017_04: MatomoArchiveNumeric201704;
  matomo_archive_numeric_2017_05: MatomoArchiveNumeric201705;
  matomo_archive_numeric_2017_06: MatomoArchiveNumeric201706;
  matomo_archive_numeric_2017_07: MatomoArchiveNumeric201707;
  matomo_archive_numeric_2017_08: MatomoArchiveNumeric201708;
  matomo_archive_numeric_2017_09: MatomoArchiveNumeric201709;
  matomo_archive_numeric_2017_10: MatomoArchiveNumeric201710;
  matomo_archive_numeric_2017_11: MatomoArchiveNumeric201711;
  matomo_archive_numeric_2017_12: MatomoArchiveNumeric201712;
  matomo_archive_numeric_2018_01: MatomoArchiveNumeric201801;
  matomo_archive_numeric_2018_02: MatomoArchiveNumeric201802;
  matomo_archive_numeric_2018_03: MatomoArchiveNumeric201803;
  matomo_archive_numeric_2018_04: MatomoArchiveNumeric201804;
  matomo_archive_numeric_2018_05: MatomoArchiveNumeric201805;
  matomo_archive_numeric_2018_06: MatomoArchiveNumeric201806;
  matomo_archive_numeric_2018_07: MatomoArchiveNumeric201807;
  matomo_archive_numeric_2018_08: MatomoArchiveNumeric201808;
  matomo_archive_numeric_2018_09: MatomoArchiveNumeric201809;
  matomo_archive_numeric_2018_10: MatomoArchiveNumeric201810;
  matomo_archive_numeric_2018_11: MatomoArchiveNumeric201811;
  matomo_archive_numeric_2018_12: MatomoArchiveNumeric201812;
  matomo_archive_numeric_2019_01: MatomoArchiveNumeric201901;
  matomo_archive_numeric_2019_02: MatomoArchiveNumeric201902;
  matomo_archive_numeric_2019_03: MatomoArchiveNumeric201903;
  matomo_archive_numeric_2019_04: MatomoArchiveNumeric201904;
  matomo_archive_numeric_2019_05: MatomoArchiveNumeric201905;
  matomo_archive_numeric_2019_06: MatomoArchiveNumeric201906;
  matomo_archive_numeric_2019_07: MatomoArchiveNumeric201907;
  matomo_archive_numeric_2019_08: MatomoArchiveNumeric201908;
  matomo_archive_numeric_2019_09: MatomoArchiveNumeric201909;
  matomo_archive_numeric_2019_10: MatomoArchiveNumeric201910;
  matomo_archive_numeric_2019_11: MatomoArchiveNumeric201911;
  matomo_archive_numeric_2019_12: MatomoArchiveNumeric201912;
  matomo_archive_numeric_2020_01: MatomoArchiveNumeric202001;
  matomo_archive_numeric_2020_02: MatomoArchiveNumeric202002;
  matomo_archive_numeric_2020_03: MatomoArchiveNumeric202003;
  matomo_archive_numeric_2020_04: MatomoArchiveNumeric202004;
  matomo_archive_numeric_2020_05: MatomoArchiveNumeric202005;
  matomo_archive_numeric_2020_06: MatomoArchiveNumeric202006;
  matomo_archive_numeric_2020_07: MatomoArchiveNumeric202007;
  matomo_archive_numeric_2020_08: MatomoArchiveNumeric202008;
  matomo_archive_numeric_2020_09: MatomoArchiveNumeric202009;
  matomo_archive_numeric_2020_10: MatomoArchiveNumeric202010;
  matomo_archive_numeric_2020_11: MatomoArchiveNumeric202011;
  matomo_archive_numeric_2020_12: MatomoArchiveNumeric202012;
  matomo_archive_numeric_2021_01: MatomoArchiveNumeric202101;
  matomo_archive_numeric_2021_02: MatomoArchiveNumeric202102;
  matomo_archive_numeric_2021_03: MatomoArchiveNumeric202103;
  matomo_archive_numeric_2021_04: MatomoArchiveNumeric202104;
  matomo_archive_numeric_2021_05: MatomoArchiveNumeric202105;
  matomo_archive_numeric_2021_06: MatomoArchiveNumeric202106;
  matomo_archive_numeric_2021_07: MatomoArchiveNumeric202107;
  matomo_archive_numeric_2021_08: MatomoArchiveNumeric202108;
  matomo_archive_numeric_2021_09: MatomoArchiveNumeric202109;
  matomo_archive_numeric_2021_10: MatomoArchiveNumeric202110;
  matomo_archive_numeric_2021_11: MatomoArchiveNumeric202111;
  matomo_archive_numeric_2021_12: MatomoArchiveNumeric202112;
  matomo_archive_numeric_2022_01: MatomoArchiveNumeric202201;
  matomo_archive_numeric_2022_02: MatomoArchiveNumeric202202;
  matomo_archive_numeric_2022_03: MatomoArchiveNumeric202203;
  matomo_archive_numeric_2022_04: MatomoArchiveNumeric202204;
  matomo_archive_numeric_2022_05: MatomoArchiveNumeric202205;
  matomo_archive_numeric_2022_06: MatomoArchiveNumeric202206;
  matomo_archive_numeric_2022_07: MatomoArchiveNumeric202207;
  matomo_archive_numeric_2022_08: MatomoArchiveNumeric202208;
  matomo_archive_numeric_2022_09: MatomoArchiveNumeric202209;
  matomo_archive_numeric_2022_10: MatomoArchiveNumeric202210;
  matomo_archive_numeric_2022_11: MatomoArchiveNumeric202211;
  matomo_archive_numeric_2022_12: MatomoArchiveNumeric202212;
  matomo_archive_numeric_2023_01: MatomoArchiveNumeric202301;
  matomo_archive_numeric_2023_02: MatomoArchiveNumeric202302;
  matomo_archive_numeric_2023_03: MatomoArchiveNumeric202303;
  matomo_archive_numeric_2023_04: MatomoArchiveNumeric202304;
  matomo_archive_numeric_2023_05: MatomoArchiveNumeric202305;
  matomo_archive_numeric_2023_06: MatomoArchiveNumeric202306;
  matomo_archive_numeric_2023_07: MatomoArchiveNumeric202307;
  matomo_archive_numeric_2023_08: MatomoArchiveNumeric202308;
  matomo_archive_numeric_2023_09: MatomoArchiveNumeric202309;
  matomo_archive_numeric_2023_10: MatomoArchiveNumeric202310;
  matomo_archive_numeric_2023_11: MatomoArchiveNumeric202311;
  matomo_archive_numeric_2023_12: MatomoArchiveNumeric202312;
  matomo_archive_numeric_2024_01: MatomoArchiveNumeric202401;
  matomo_archive_numeric_2024_02: MatomoArchiveNumeric202402;
  matomo_archive_numeric_2024_03: MatomoArchiveNumeric202403;
  matomo_archive_numeric_2024_04: MatomoArchiveNumeric202404;
  matomo_archive_numeric_2024_05: MatomoArchiveNumeric202405;
  matomo_archive_numeric_2024_06: MatomoArchiveNumeric202406;
  matomo_archive_numeric_2024_07: MatomoArchiveNumeric202407;
  matomo_archive_numeric_2024_08: MatomoArchiveNumeric202408;
  matomo_archive_numeric_2024_09: MatomoArchiveNumeric202409;
  matomo_archive_numeric_2024_10: MatomoArchiveNumeric202410;
  matomo_archive_numeric_2024_11: MatomoArchiveNumeric202411;
  matomo_archive_numeric_2024_12: MatomoArchiveNumeric202412;
  matomo_archive_numeric_2025_01: MatomoArchiveNumeric202501;
  matomo_bing_stats: MatomoBingStats;
  matomo_brute_force_log: MatomoBruteForceLog;
  matomo_changes: MatomoChanges;
  matomo_custom_dimensions: MatomoCustomDimensions;
  matomo_custom_reports: MatomoCustomReports;
  matomo_experiments: MatomoExperiments;
  matomo_experiments_strategy: MatomoExperimentsStrategy;
  matomo_experiments_variations: MatomoExperimentsVariations;
  matomo_funnel: MatomoFunnel;
  matomo_funnel_steps: MatomoFunnelSteps;
  matomo_goal: MatomoGoal;
  matomo_google_stats: MatomoGoogleStats;
  matomo_locks: MatomoLocks;
  matomo_log_abtesting: MatomoLogAbtesting;
  matomo_log_action: MatomoLogAction;
  matomo_log_conversion: MatomoLogConversion;
  matomo_log_conversion_item: MatomoLogConversionItem;
  matomo_log_form: MatomoLogForm;
  matomo_log_form_field: MatomoLogFormField;
  matomo_log_form_page: MatomoLogFormPage;
  matomo_log_funnel: MatomoLogFunnel;
  matomo_log_hsr: MatomoLogHsr;
  matomo_log_hsr_blob: MatomoLogHsrBlob;
  matomo_log_hsr_event: MatomoLogHsrEvent;
  matomo_log_hsr_site: MatomoLogHsrSite;
  matomo_log_link_visit_action: MatomoLogLinkVisitAction;
  matomo_log_profiling: MatomoLogProfiling;
  matomo_log_visit: MatomoLogVisit;
  matomo_log_webvitals_report: MatomoLogWebvitalsReport;
  matomo_logger_message: MatomoLoggerMessage;
  matomo_option: MatomoOption;
  matomo_plugin_setting: MatomoPluginSetting;
  matomo_privacy_logdata_anonymizations: MatomoPrivacyLogdataAnonymizations;
  matomo_queuedtracking_queue: MatomoQueuedtrackingQueue;
  matomo_report: MatomoReport;
  matomo_report_subscriptions: MatomoReportSubscriptions;
  matomo_segment: MatomoSegment;
  matomo_sequence: MatomoSequence;
  matomo_session: MatomoSession;
  matomo_site: MatomoSite;
  matomo_site_form: MatomoSiteForm;
  matomo_site_hsr: MatomoSiteHsr;
  matomo_site_setting: MatomoSiteSetting;
  matomo_site_url: MatomoSiteUrl;
  matomo_tagmanager_container: MatomoTagmanagerContainer;
  matomo_tagmanager_container_release: MatomoTagmanagerContainerRelease;
  matomo_tagmanager_container_version: MatomoTagmanagerContainerVersion;
  matomo_tagmanager_tag: MatomoTagmanagerTag;
  matomo_tagmanager_trigger: MatomoTagmanagerTrigger;
  matomo_tagmanager_variable: MatomoTagmanagerVariable;
  matomo_tracking_failure: MatomoTrackingFailure;
  matomo_twofactor_recovery_code: MatomoTwofactorRecoveryCode;
  matomo_user: MatomoUser;
  matomo_user_dashboard: MatomoUserDashboard;
  matomo_user_language: MatomoUserLanguage;
  matomo_user_token_auth: MatomoUserTokenAuth;
  matomo_yandex_stats: MatomoYandexStats;
}
