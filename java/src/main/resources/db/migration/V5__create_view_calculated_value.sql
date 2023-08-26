CREATE VIEW CALCULATED_DATA_VIEW AS
SELECT i.*,
       c.name AS county,
       c.zip,
       d.value AS raw_value,
       r.value as calculated_value
FROM counties c
         LEFT JOIN raw_data d ON d.county_id = c.id
         LEFT JOIN indicators_complete_view i ON d.indicator_id = i.id
         LEFT JOIN rules r ON r.indicator_id = i.id AND
                              (r.lower_bound <= d.value OR r.lower_bound IS NULL) AND
                              (r.upper_bound > d.value OR r.upper_bound IS NULL);