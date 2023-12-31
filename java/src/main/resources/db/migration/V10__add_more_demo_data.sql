INSERT INTO indicators VALUES ('d4d018d6-445f-11ee-be56-0242ac120002', 'Klimaanpassung: Betroffenheit Oberflächenabfluss', '', '%');
INSERT INTO indicators VALUES ('c1c2027e-4462-11ee-be56-0242ac120002', 'Klimaanpassung: Betroffenheit Hagelgefährdung', '', 'cm');
INSERT INTO indicators VALUES ('acdaeae6-4463-11ee-be56-0242ac120002', 'Baulandreserve', '', '%');

INSERT INTO raw_data VALUES ('acdae2f8-4463-11ee-be56-0242ac120002', 'd4d018d6-445f-11ee-be56-0242ac120002', '9b9cd91e-630f-4c79-b793-0d301c778ab4', 75, null);
INSERT INTO raw_data VALUES ('acdae3de-4463-11ee-be56-0242ac120002', 'd4d018d6-445f-11ee-be56-0242ac120002', '207c42d0-3add-4b5f-87ec-5a671700903b', 75, null);
INSERT INTO raw_data VALUES ('acdae726-4463-11ee-be56-0242ac120002', 'd4d018d6-445f-11ee-be56-0242ac120002', 'e3b88083-748b-4434-aa53-9e82b1702199', 75, null);

INSERT INTO raw_data VALUES ('acdae82a-4463-11ee-be56-0242ac120002', 'c1c2027e-4462-11ee-be56-0242ac120002', '9b9cd91e-630f-4c79-b793-0d301c778ab4', 5, null);
INSERT INTO raw_data VALUES ('acdae910-4463-11ee-be56-0242ac120002', 'c1c2027e-4462-11ee-be56-0242ac120002', '207c42d0-3add-4b5f-87ec-5a671700903b', 5, null);
INSERT INTO raw_data VALUES ('acdaea0a-4463-11ee-be56-0242ac120002', 'c1c2027e-4462-11ee-be56-0242ac120002', 'e3b88083-748b-4434-aa53-9e82b1702199', 5, null);

INSERT INTO raw_data VALUES ('acdaebcc-4463-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', '9b9cd91e-630f-4c79-b793-0d301c778ab4', 13, null);
INSERT INTO raw_data VALUES ('acdaeca8-4463-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', '207c42d0-3add-4b5f-87ec-5a671700903b', 8, null);
INSERT INTO raw_data VALUES ('acdaed98-4463-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 'e3b88083-748b-4434-aa53-9e82b1702199', 11, null);

INSERT INTO rules VALUES ('f4aa1e56-4462-11ee-be56-0242ac120002', 'd4d018d6-445f-11ee-be56-0242ac120002', 90, 100, 1);
INSERT INTO rules VALUES ('3d7a6b90-4463-11ee-be56-0242ac120002', 'd4d018d6-445f-11ee-be56-0242ac120002', 80, 90, 3);
INSERT INTO rules VALUES ('3d7a6e38-4463-11ee-be56-0242ac120002', 'd4d018d6-445f-11ee-be56-0242ac120002', 60, 80, 5);
INSERT INTO rules VALUES ('3d7a6f78-4463-11ee-be56-0242ac120002', 'd4d018d6-445f-11ee-be56-0242ac120002', 40, 60, 7);
INSERT INTO rules VALUES ('3d7a70a4-4463-11ee-be56-0242ac120002', 'd4d018d6-445f-11ee-be56-0242ac120002', 20, 40, 9);

INSERT INTO rules VALUES ('acdad9de-4463-11ee-be56-0242ac120002', 'c1c2027e-4462-11ee-be56-0242ac120002', 7, null, 1);
INSERT INTO rules VALUES ('acdadde4-4463-11ee-be56-0242ac120002', 'c1c2027e-4462-11ee-be56-0242ac120002', 5.5, 7, 3);
INSERT INTO rules VALUES ('acdadfba-4463-11ee-be56-0242ac120002', 'c1c2027e-4462-11ee-be56-0242ac120002', 4, 5.5, 5);
INSERT INTO rules VALUES ('acdae0d2-4463-11ee-be56-0242ac120002', 'c1c2027e-4462-11ee-be56-0242ac120002', 2.5, 4, 7);
INSERT INTO rules VALUES ('acdae1ea-4463-11ee-be56-0242ac120002', 'c1c2027e-4462-11ee-be56-0242ac120002', 1, 2.5, 9);

INSERT INTO rules VALUES ('acdaf27a-4463-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 0, 1, 1);
INSERT INTO rules VALUES ('acdaf37e-4463-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 1, 2.5, 2);
INSERT INTO rules VALUES ('acdaf46e-4463-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 2.5, 5, 3);
INSERT INTO rules VALUES ('acdaf568-4463-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 5, 7.5, 4);
INSERT INTO rules VALUES ('dc436c9c-4466-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 7.5, 10, 5);
INSERT INTO rules VALUES ('dc4372fa-4466-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 10, 12.5, 6);
INSERT INTO rules VALUES ('dc43746c-4466-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 12.5, 15, 7);
INSERT INTO rules VALUES ('dc437584-4466-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 15, 20, 8);
INSERT INTO rules VALUES ('dc437700-4466-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 20, 25, 9);
INSERT INTO rules VALUES ('dc437822-4466-11ee-be56-0242ac120002', 'acdaeae6-4463-11ee-be56-0242ac120002', 25, 100, 10);