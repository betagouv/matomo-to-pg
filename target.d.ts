import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Numeric = ColumnType<string, number | string, number | string>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface MatomoMatomoLogAction {
  hash: number;
  idaction: number;
  name: Generated<string | null>;
  type: number | null;
  url_prefix: number | null;
}

export interface MatomoMatomoLogConversion {
  buster: number;
  config_browser_name: Generated<string | null>;
  config_client_type: number | null;
  config_device_brand: Generated<string | null>;
  config_device_model: Generated<string | null>;
  config_device_type: number | null;
  custom_dimension_1: Generated<string | null>;
  custom_dimension_2: Generated<string | null>;
  custom_dimension_3: Generated<string | null>;
  custom_dimension_4: Generated<string | null>;
  custom_dimension_5: Generated<string | null>;
  idaction_url: number | null;
  idgoal: number;
  idlink_va: Int8 | null;
  idorder: Generated<string | null>;
  idsite: number;
  idvisit: Int8;
  idvisitor: Buffer;
  items: number | null;
  location_city: Generated<string | null>;
  location_country: Generated<string | null>;
  location_latitude: Generated<Numeric | null>;
  location_longitude: Generated<Numeric | null>;
  location_region: Generated<string | null>;
  pageviews_before: number | null;
  referer_keyword: Generated<string | null>;
  referer_name: Generated<string | null>;
  referer_type: number | null;
  revenue: number | null;
  revenue_discount: number | null;
  revenue_shipping: number | null;
  revenue_subtotal: number | null;
  revenue_tax: number | null;
  server_time: Timestamp;
  url: string;
  visitor_count_visits: Generated<number>;
  visitor_returning: number | null;
  visitor_seconds_since_first: number | null;
  visitor_seconds_since_order: number | null;
}

export interface MatomoMatomoLogLinkVisitAction {
  custom_dimension_1: Generated<string | null>;
  custom_dimension_2: Generated<string | null>;
  custom_dimension_3: Generated<string | null>;
  custom_dimension_4: Generated<string | null>;
  custom_dimension_5: Generated<string | null>;
  custom_float: number | null;
  idaction_content_interaction: number | null;
  idaction_content_name: number | null;
  idaction_content_piece: number | null;
  idaction_content_target: number | null;
  idaction_event_action: number | null;
  idaction_event_category: number | null;
  idaction_name: number | null;
  idaction_name_ref: number | null;
  idaction_product_cat: number | null;
  idaction_product_cat2: number | null;
  idaction_product_cat3: number | null;
  idaction_product_cat4: number | null;
  idaction_product_cat5: number | null;
  idaction_product_name: number | null;
  idaction_product_sku: number | null;
  idaction_url: number | null;
  idaction_url_ref: Generated<number | null>;
  idlink_va: Int8;
  idpageview: Generated<string | null>;
  idsite: number;
  idvisit: Int8;
  idvisitor: Buffer;
  pageview_position: number | null;
  product_price: number | null;
  search_cat: Generated<string | null>;
  search_count: number | null;
  server_time: Timestamp;
  time_dom_completion: number | null;
  time_dom_processing: number | null;
  time_network: number | null;
  time_on_load: number | null;
  time_server: number | null;
  time_spent: number | null;
  time_spent_ref_action: number | null;
  time_transfer: number | null;
}

export interface MatomoMatomoLogVisit {
  config_browser_engine: Generated<string | null>;
  config_browser_name: Generated<string | null>;
  config_browser_version: Generated<string | null>;
  config_client_type: number | null;
  config_cookie: number | null;
  config_device_brand: Generated<string | null>;
  config_device_model: Generated<string | null>;
  config_device_type: number | null;
  config_flash: number | null;
  config_id: Buffer;
  config_java: number | null;
  config_os: Generated<string | null>;
  config_os_version: Generated<string | null>;
  config_pdf: number | null;
  config_quicktime: number | null;
  config_realplayer: number | null;
  config_resolution: Generated<string | null>;
  config_silverlight: number | null;
  config_windowsmedia: number | null;
  custom_dimension_1: Generated<string | null>;
  custom_dimension_2: Generated<string | null>;
  custom_dimension_3: Generated<string | null>;
  custom_dimension_4: Generated<string | null>;
  custom_dimension_5: Generated<string | null>;
  idsite: number;
  idvisit: Int8;
  idvisitor: Buffer;
  last_idlink_va: Int8 | null;
  location_browser_lang: Generated<string | null>;
  location_city: Generated<string | null>;
  location_country: Generated<string | null>;
  location_ip: Buffer;
  location_latitude: Generated<Numeric | null>;
  location_longitude: Generated<Numeric | null>;
  location_region: Generated<string | null>;
  profilable: number | null;
  referer_keyword: Generated<string | null>;
  referer_name: Generated<string | null>;
  referer_type: number | null;
  referer_url: Generated<string | null>;
  user_id: Generated<string | null>;
  visit_entry_idaction_name: number | null;
  visit_entry_idaction_url: number | null;
  visit_exit_idaction_name: number | null;
  visit_exit_idaction_url: Generated<number | null>;
  visit_first_action_time: Timestamp;
  visit_goal_buyer: number | null;
  visit_goal_converted: number | null;
  visit_last_action_time: Timestamp;
  visit_total_actions: number | null;
  visit_total_events: number | null;
  visit_total_interactions: Generated<number | null>;
  visit_total_searches: number | null;
  visit_total_time: number;
  visitor_count_visits: Generated<number>;
  visitor_localtime: Generated<string | null>;
  visitor_returning: number | null;
  visitor_seconds_since_first: number | null;
  visitor_seconds_since_last: number | null;
  visitor_seconds_since_order: number | null;
}

export interface DB {
  "matomo.matomo_log_action": MatomoMatomoLogAction;
  "matomo.matomo_log_conversion": MatomoMatomoLogConversion;
  "matomo.matomo_log_link_visit_action": MatomoMatomoLogLinkVisitAction;
  "matomo.matomo_log_visit": MatomoMatomoLogVisit;
}
