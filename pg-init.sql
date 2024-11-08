CREATE SCHEMA "matomo";
-- matomo_log_visit
CREATE TABLE matomo.matomo_log_visit (
    idvisit bigint NOT NULL,
    idsite int NOT NULL,
    idvisitor bytea NOT NULL,
    visit_last_action_time timestamp(0) NOT NULL,
    config_id bytea NOT NULL,
    location_ip bytea NOT NULL,
    profilable smallint DEFAULT NULL,
    user_id varchar(200) DEFAULT NULL,
    visit_first_action_time timestamp(0) NOT NULL,
    visit_goal_buyer smallint DEFAULT NULL,
    visit_goal_converted smallint DEFAULT NULL,
    visitor_returning smallint DEFAULT NULL,
    visitor_seconds_since_first int DEFAULT NULL,
    visitor_seconds_since_order int DEFAULT NULL,
    visitor_count_visits int NOT NULL DEFAULT 0,
    visit_entry_idaction_name int DEFAULT NULL,
    visit_entry_idaction_url int DEFAULT NULL,
    visit_exit_idaction_name int DEFAULT NULL,
    visit_exit_idaction_url int DEFAULT 0,
    visit_total_actions int DEFAULT NULL,
    visit_total_interactions int DEFAULT 0,
    visit_total_searches smallint DEFAULT NULL,
    referer_keyword varchar(255) DEFAULT NULL,
    referer_name varchar(255) DEFAULT NULL,
    referer_type smallint DEFAULT NULL,
    referer_url varchar(1500) DEFAULT NULL,
    location_browser_lang varchar(20) DEFAULT NULL,
    config_browser_engine varchar(10) DEFAULT NULL,
    config_browser_name varchar(40) DEFAULT NULL,
    config_browser_version varchar(20) DEFAULT NULL,
    config_client_type smallint DEFAULT NULL,
    config_device_brand varchar(100) DEFAULT NULL,
    config_device_model varchar(100) DEFAULT NULL,
    config_device_type smallint DEFAULT NULL,
    config_os char(3) DEFAULT NULL,
    config_os_version varchar(100) DEFAULT NULL,
    visit_total_events int DEFAULT NULL,
    visitor_localtime time(0) DEFAULT NULL,
    visitor_seconds_since_last int DEFAULT NULL,
    config_resolution varchar(18) DEFAULT NULL,
    config_cookie smallint DEFAULT NULL,
    config_flash smallint DEFAULT NULL,
    config_java smallint DEFAULT NULL,
    config_pdf smallint DEFAULT NULL,
    config_quicktime smallint DEFAULT NULL,
    config_realplayer smallint DEFAULT NULL,
    config_silverlight smallint DEFAULT NULL,
    config_windowsmedia smallint DEFAULT NULL,
    visit_total_time int NOT NULL,
    location_city varchar(255) DEFAULT NULL,
    location_country char(3) DEFAULT NULL,
    location_latitude decimal(9, 6) DEFAULT NULL,
    location_longitude decimal(9, 6) DEFAULT NULL,
    location_region char(3) DEFAULT NULL,
    last_idlink_va bigint DEFAULT NULL,
    custom_dimension_1 varchar(255) DEFAULT NULL,
    custom_dimension_2 varchar(255) DEFAULT NULL,
    custom_dimension_3 varchar(255) DEFAULT NULL,
    custom_dimension_4 varchar(255) DEFAULT NULL,
    custom_dimension_5 varchar(255) DEFAULT NULL,
    PRIMARY KEY (idvisit)
);
CREATE INDEX matomo_log_visit_idsite_config_datetime ON matomo.matomo_log_visit (idsite, config_id, visit_last_action_time);
CREATE INDEX matomo_log_visit_idsite_datetime ON matomo.matomo_log_visit (idsite, visit_last_action_time);
CREATE INDEX matomo_log_visit_idsite_idvisitor_time ON matomo.matomo_log_visit (idsite, idvisitor, visit_last_action_time);
-- matomo_log_link_visit_action
CREATE TABLE matomo.matomo_log_link_visit_action (
    idlink_va bigint NOT NULL,
    idsite int NOT NULL,
    idvisitor bytea NOT NULL,
    idvisit bigint NOT NULL,
    idaction_url_ref int DEFAULT 0,
    idaction_name_ref int DEFAULT NULL,
    custom_float double precision DEFAULT NULL,
    pageview_position int DEFAULT NULL,
    server_time timestamp(0) NOT NULL,
    idpageview char(6) DEFAULT NULL,
    idaction_name int DEFAULT NULL,
    idaction_url int DEFAULT NULL,
    search_cat varchar(200) DEFAULT NULL,
    search_count int DEFAULT NULL,
    time_spent_ref_action int DEFAULT NULL,
    idaction_product_cat int DEFAULT NULL,
    idaction_product_cat2 int DEFAULT NULL,
    idaction_product_cat3 int DEFAULT NULL,
    idaction_product_cat4 int DEFAULT NULL,
    idaction_product_cat5 int DEFAULT NULL,
    idaction_product_name int DEFAULT NULL,
    product_price double precision DEFAULT NULL,
    idaction_product_sku int DEFAULT NULL,
    idaction_event_action int DEFAULT NULL,
    idaction_event_category int DEFAULT NULL,
    idaction_content_interaction int DEFAULT NULL,
    idaction_content_name int DEFAULT NULL,
    idaction_content_piece int DEFAULT NULL,
    idaction_content_target int DEFAULT NULL,
    time_dom_completion int DEFAULT NULL,
    time_dom_processing int DEFAULT NULL,
    time_network int DEFAULT NULL,
    time_on_load int DEFAULT NULL,
    time_server int DEFAULT NULL,
    time_transfer int DEFAULT NULL,
    time_spent int DEFAULT NULL,
    custom_dimension_1 varchar(255) DEFAULT NULL,
    custom_dimension_2 varchar(255) DEFAULT NULL,
    custom_dimension_3 varchar(255) DEFAULT NULL,
    custom_dimension_4 varchar(255) DEFAULT NULL,
    custom_dimension_5 varchar(255) DEFAULT NULL,
    PRIMARY KEY (idlink_va)
);
CREATE INDEX matomo_log_link_visit_action_idvisit ON matomo.matomo_log_link_visit_action (idvisit);
CREATE INDEX matomo_log_link_visit_action_idsite_servertime ON matomo.matomo_log_link_visit_action (idsite, server_time);
-- matomo_log_conversion
CREATE TABLE matomo.matomo_log_conversion (
    idvisit bigint NOT NULL,
    idsite int NOT NULL,
    idvisitor bytea NOT NULL,
    server_time timestamp(0) NOT NULL,
    idaction_url int DEFAULT NULL,
    idlink_va bigint DEFAULT NULL,
    idgoal int NOT NULL,
    buster int NOT NULL,
    idorder varchar(100) DEFAULT NULL,
    items smallint DEFAULT NULL,
    url varchar(4096) NOT NULL,
    revenue double precision DEFAULT NULL,
    revenue_shipping double precision DEFAULT NULL,
    revenue_subtotal double precision DEFAULT NULL,
    revenue_tax double precision DEFAULT NULL,
    revenue_discount double precision DEFAULT NULL,
    visitor_returning smallint DEFAULT NULL,
    visitor_seconds_since_first int DEFAULT NULL,
    visitor_seconds_since_order int DEFAULT NULL,
    visitor_count_visits int NOT NULL DEFAULT 0,
    referer_keyword varchar(255) DEFAULT NULL,
    referer_name varchar(255) DEFAULT NULL,
    referer_type smallint DEFAULT NULL,
    config_browser_name varchar(40) DEFAULT NULL,
    config_client_type smallint DEFAULT NULL,
    config_device_brand varchar(100) DEFAULT NULL,
    config_device_model varchar(100) DEFAULT NULL,
    config_device_type smallint DEFAULT NULL,
    location_city varchar(255) DEFAULT NULL,
    location_country char(3) DEFAULT NULL,
    location_latitude decimal(9, 6) DEFAULT NULL,
    location_longitude decimal(9, 6) DEFAULT NULL,
    location_region char(3) DEFAULT NULL,
    custom_dimension_1 varchar(255) DEFAULT NULL,
    custom_dimension_2 varchar(255) DEFAULT NULL,
    custom_dimension_3 varchar(255) DEFAULT NULL,
    custom_dimension_4 varchar(255) DEFAULT NULL,
    custom_dimension_5 varchar(255) DEFAULT NULL,
    pageviews_before smallint DEFAULT NULL,
    PRIMARY KEY (idvisit, idgoal, buster),
    CONSTRAINT unique_idsite_idorder UNIQUE (idsite, idorder)
);
CREATE INDEX matomo_log_conversion_idsite_datetime ON matomo.matomo_log_conversion (idsite, server_time);
-- matomo_log_action
CREATE TABLE matomo.matomo_log_action (
    idaction int check (idaction > 0) NOT NULL,
    name varchar(4096) DEFAULT NULL,
    hash BIGINT check (hash > 0) NOT NULL,
    type smallint check (type > 0) DEFAULT NULL,
    url_prefix smallint DEFAULT NULL,
    PRIMARY KEY (idaction)
);
CREATE INDEX index_type_hash ON matomo.matomo_log_action (type, hash);
-- custom tables
CREATE TABLE matomo.actions_types (
    id smallint NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(255) NULL
);
ALTER TABLE matomo.actions_types
ADD CONSTRAINT actions_types_pkey PRIMARY KEY (id)
insert into matomo."actions_types" ("description", "id", "name")
values (
        ' the action is a content interaction',
        16,
        'TYPE_CONTENT_INTERACTION'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        ' the action is a content target',
        15,
        'TYPE_CONTENT_TARGET'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        ' the action is a content piece',
        14,
        'TYPE_CONTENT_PIECE'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        ' the action is a content name (see Content Tracking user guide and developer guide)',
        13,
        'TYPE_CONTENT_NAME'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        ' the action is an event name',
        12,
        'TYPE_EVENT_NAME'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        ' the action is an event action',
        11,
        'TYPE_EVENT_ACTION'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        ' the action is an event category (see Tracking Events user guide)',
        10,
        'TYPE_EVENT_CATEGORY'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        'the action type is a site search action.',
        8,
        'TYPE_SITE_SEARCH'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        'the action is the name of an ecommerce item category that is used on the site.',
        7,
        'TYPE_ECOMMERCE_ITEM_CATEGORY'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        'the action is the name of an ecommerce item that is sold on the site.',
        6,
        'TYPE_ECOMMERCE_ITEM_NAME'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        'the action is the SKU of an ecommerce item that is sold on the site.',
        5,
        'TYPE_ECOMMERCE_ITEM_SKU'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        'the action is the page title of a page on the website being tracked.',
        4,
        'TYPE_PAGE_TITLE'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        'the action is a URL of a file that was downloaded from the website being tracked.',
        3,
        'TYPE_DOWNLOAD'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        'the action is a URL is of a link on the website being tracked. A visitor clicked it.',
        2,
        'TYPE_OUTLINK'
    );
insert into matomo."actions_types" ("description", "id", "name")
values (
        'the action is a URL to a page on the website being tracked.',
        1,
        'TYPE_PAGE_URL'
    );