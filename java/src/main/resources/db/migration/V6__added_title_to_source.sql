ALTER TABLE SOURCES ADD COLUMN TITLE VARCHAR(255);

CREATE TABLE IF NOT EXISTS TEMPLATE_SOURCES (
                                     ID UUID PRIMARY KEY,
                                     INDICATOR_ID UUID,
                                     SOURCE_ID UUID
);

INSERT INTO SOURCES VALUES ('57a5bf37-50ef-4e5e-aa1e-a8553de57aa8', '', 'http://localhost:1337/api/netIncomeGov/${county-zip}', 'Netto einkommen von Bundesamt für Statistik');
INSERT INTO SOURCES VALUES ('8a1bfc3e-3dc8-435e-8055-fee6857a68ae', '', 'http://localhost:1337/api/netIncomeBern/${county-zip}', 'Netto einkommen von Kanton Bern');

INSERT INTO TEMPLATE_SOURCES VALUES ('075c5223-6515-41f4-affd-f445c43cdf8a', '47961557-d91d-4320-b95f-0d8f27f4277c', '57a5bf37-50ef-4e5e-aa1e-a8553de57aa8');
INSERT INTO TEMPLATE_SOURCES VALUES ('39b53d13-d065-4034-ac83-95bf90305875', '47961557-d91d-4320-b95f-0d8f27f4277c', '8a1bfc3e-3dc8-435e-8055-fee6857a68ae');