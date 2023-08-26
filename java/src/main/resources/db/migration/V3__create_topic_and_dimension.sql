CREATE TABLE IF NOT EXISTS DIMENSIONS (
    ID UUID PRIMARY KEY,
    TEXT VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS TOPICS (
    ID UUID PRIMARY KEY,
    TEXT VARCHAR(255),
    DIMENSION_ID UUID
);

INSERT INTO DIMENSIONS VALUES ('52173415-abb5-42b5-98b6-1c7db55e07f5', 'Umwelt');
INSERT INTO DIMENSIONS VALUES ('b87dbd94-a350-4569-99f7-1276a67993ad', 'Soziales');
INSERT INTO DIMENSIONS VALUES ('d5d1d9f6-408a-4e88-b991-987251f54518', 'Wirtschaft');


INSERT INTO TOPICS VALUES ('4031620a-63c2-4e7e-b65a-80ffaa8d4b96', 'Biodiversität', '52173415-abb5-42b5-98b6-1c7db55e07f5');
INSERT INTO TOPICS VALUES ('b9bc7b50-a647-47eb-9c6e-d19e58e8ef25', 'Klime', '52173415-abb5-42b5-98b6-1c7db55e07f5');
INSERT INTO TOPICS VALUES ('a5f17b7d-cb82-4dc6-9151-793bedc9e7dc', 'Luft', '52173415-abb5-42b5-98b6-1c7db55e07f5');
INSERT INTO TOPICS VALUES ('84ecb183-c35f-48ae-aefb-f633b5e25463', 'Einkommen und Lebenskosten', 'd5d1d9f6-408a-4e88-b991-987251f54518');

ALTER TABLE INDICATORS ADD COLUMN TOPIC_ID UUID;

UPDATE INDICATORS
SET TOPIC_ID = '4031620a-63c2-4e7e-b65a-80ffaa8d4b96'
    WHERE id = 'e377520a-0de1-4b8d-88e0-f42a08248664';
UPDATE INDICATORS
SET TOPIC_ID = 'b9bc7b50-a647-47eb-9c6e-d19e58e8ef25'
    WHERE id = '258d8e13-4470-42b0-8b59-60d5f6d2811a';
UPDATE INDICATORS
SET TOPIC_ID = 'a5f17b7d-cb82-4dc6-9151-793bedc9e7dc'
    WHERE id = '0d56b745-290e-48ab-aa35-b8aab1ae6afc';
UPDATE INDICATORS
SET TOPIC_ID = '84ecb183-c35f-48ae-aefb-f633b5e25463'
    WHERE id = '47961557-d91d-4320-b95f-0d8f27f4277c';