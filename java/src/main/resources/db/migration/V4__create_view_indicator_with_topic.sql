CREATE VIEW INDICATORS_COMPLETE_VIEW AS
SELECT
    i.id AS ID,
    i.name AS name,
    i.comment as comment,
    i.unit as unit,
    t.text as topic,
    d.text as dimension
FROM indicators i
         LEFT JOIN topics t on i.topic_id = t.id
         LEFT JOIN dimensions d on t.dimension_id = d.id;