DROP VIEW CALCULATED_DATA_VIEW;

CREATE VIEW CALCULATED_DATA_VIEW AS
SELECT d.id    as data_id,
       i.name,
       i.comment,
       i.unit,
       i.topic,
       i.dimension,
       i.id    as indicator_id,
       c.id    as county_id,
       s.id    as source_id,
       c.name  AS county,
       c.zip,
       d.value AS raw_value,
       r.value as calculated_value,
       s.title AS source_title
FROM counties c
         LEFT JOIN raw_data d ON d.county_id = c.id
         LEFT JOIN sources s ON s.id = d.source_id
         LEFT JOIN indicators_complete_view i ON d.indicator_id = i.id
         LEFT JOIN rules r ON r.indicator_id = i.id AND
                              (r.lower_bound <= d.value OR r.lower_bound IS NULL) AND
                              (r.upper_bound > d.value OR r.upper_bound IS NULL);