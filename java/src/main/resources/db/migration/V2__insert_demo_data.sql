INSERT INTO counties VALUES ('9b9cd91e-630f-4c79-b793-0d301c778ab4', 3792, 'Saanen');
INSERT INTO counties VALUES ('207c42d0-3add-4b5f-87ec-5a671700903b', 3785, 'Gsteig ');
INSERT INTO counties VALUES ('e3b88083-748b-4434-aa53-9e82b1702199', 3782, 'Lauenen');
INSERT INTO indicators VALUES ('e377520a-0de1-4b8d-88e0-f42a08248664', 'Summe geschützter Flächen', '', '%');
INSERT INTO indicators VALUES ('258d8e13-4470-42b0-8b59-60d5f6d2811a', 'Klimaschutz: Treibhausgas-Emissione pro Einwohner*in ', '', 'CO2');
INSERT INTO indicators VALUES ('0d56b745-290e-48ab-aa35-b8aab1ae6afc', 'Luftschadstoffkonzentration', '', 'µg/m3');
INSERT INTO indicators VALUES ('47961557-d91d-4320-b95f-0d8f27f4277c', 'Reineinkommen (pro Einwohner*in)', '', 'CHF');
INSERT INTO raw_data VALUES ('47961557-d91d-4320-b95f-0d8f27f4277b', 'e377520a-0de1-4b8d-88e0-f42a08248664', '9b9cd91e-630f-4c79-b793-0d301c778ab4', 4, null);
INSERT INTO raw_data VALUES ('2329d395-b4d6-4aa9-a291-a566ea4fcd94', '258d8e13-4470-42b0-8b59-60d5f6d2811a', '9b9cd91e-630f-4c79-b793-0d301c778ab4', 5, null);
INSERT INTO raw_data VALUES ('a8efda73-2f9e-4312-8081-9e76084fbd19', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', '9b9cd91e-630f-4c79-b793-0d301c778ab4', 22, null);
INSERT INTO raw_data VALUES ('96689947-dabd-4385-b4f7-51750b85fa22', '47961557-d91d-4320-b95f-0d8f27f4277c', '9b9cd91e-630f-4c79-b793-0d301c778ab4', 70000, null);

INSERT INTO raw_data VALUES ('41652666-1169-488f-91b1-6be83af5b5c2', 'e377520a-0de1-4b8d-88e0-f42a08248664', '207c42d0-3add-4b5f-87ec-5a671700903b', 4, null);
INSERT INTO raw_data VALUES ('f26af060-23eb-491b-b914-b2d3d635fa00', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', '207c42d0-3add-4b5f-87ec-5a671700903b', 6, null);
INSERT INTO raw_data VALUES ('19f6e561-5341-448b-be30-0800c337c58d', '47961557-d91d-4320-b95f-0d8f27f4277c', '207c42d0-3add-4b5f-87ec-5a671700903b', 40000, null);

INSERT INTO raw_data VALUES ('a3cf3350-9147-438c-a6a5-acbfff94e30b', 'e377520a-0de1-4b8d-88e0-f42a08248664', 'e3b88083-748b-4434-aa53-9e82b1702199', 22, null);
INSERT INTO raw_data VALUES ('82596096-4e6a-41cf-9383-a45f64418970', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 'e3b88083-748b-4434-aa53-9e82b1702199', 5, null);
INSERT INTO raw_data VALUES ('b3139433-7fb1-48b4-9469-6d037400400e', '47961557-d91d-4320-b95f-0d8f27f4277c', 'e3b88083-748b-4434-aa53-9e82b1702199', 40000, null);

INSERT INTO rules VALUES ('56e5e4dd-7de9-415f-b840-398120166e2a', 'e377520a-0de1-4b8d-88e0-f42a08248664', 0, 1, 0);
INSERT INTO rules VALUES ('8de99d02-091c-41a2-bdb8-c2817c4e5ca3', 'e377520a-0de1-4b8d-88e0-f42a08248664', 1, 3, 1);
INSERT INTO rules VALUES ('87ea25cd-3633-45ab-8df9-e8fbd1addf0a', 'e377520a-0de1-4b8d-88e0-f42a08248664', 3, 5, 2);
INSERT INTO rules VALUES ('10951503-dc7f-4e21-95d0-6a425e4cb169', 'e377520a-0de1-4b8d-88e0-f42a08248664', 5, 7, 3);
INSERT INTO rules VALUES ('98b8c89d-c4c9-4699-a5bb-55c4ddd509ba', 'e377520a-0de1-4b8d-88e0-f42a08248664', 7, 9, 4);
INSERT INTO rules VALUES ('466da0ba-1f46-4cbf-bc35-f75b4488a5f3', 'e377520a-0de1-4b8d-88e0-f42a08248664', 9, 11, 5);
INSERT INTO rules VALUES ('6e7eb350-0d96-40b5-b119-f351ab5405f3', 'e377520a-0de1-4b8d-88e0-f42a08248664', 11, 13, 6);
INSERT INTO rules VALUES ('a70bdc86-bb95-41d8-8309-474af2d58029', 'e377520a-0de1-4b8d-88e0-f42a08248664', 13, 15, 7);
INSERT INTO rules VALUES ('1d52b812-5833-411a-b4ac-097d96b0a9b4', 'e377520a-0de1-4b8d-88e0-f42a08248664', 15, 17, 8);
INSERT INTO rules VALUES ('db784b04-0e9e-425e-98ae-8cf90f2f30b7', 'e377520a-0de1-4b8d-88e0-f42a08248664', 17, 20, 9);
INSERT INTO rules VALUES ('11cf6423-e829-4091-95ac-1e555a157a11', 'e377520a-0de1-4b8d-88e0-f42a08248664', 20, null, 10);


INSERT INTO rules VALUES ('e0ddcba5-5363-4a9d-9517-f542eef24b9c', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 8, null, 0);
INSERT INTO rules VALUES ('8e90d037-96d0-4b7b-90e6-6b705aa67f0d', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 6, 8, 1);
INSERT INTO rules VALUES ('99bf6f57-2e58-4516-be1d-7a58d313c0c6', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 5, 6, 2);
INSERT INTO rules VALUES ('6c02c58a-1bfa-435c-ad33-1f3bd11aec08', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 4, 5, 3);
INSERT INTO rules VALUES ('00a41d21-65ce-41c0-9001-7f370658ee06', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 3.5, 4, 4);
INSERT INTO rules VALUES ('476d6541-0717-4c62-9feb-a245cfa7ac04', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 2.5, 3.5, 5);
INSERT INTO rules VALUES ('911c54cf-8323-474e-a8a4-aeb6e4b0937f', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 2, 2.5, 6);
INSERT INTO rules VALUES ('e1d7834c-b5bf-42c6-90f5-93b6b93093b8', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 1.5, 2, 7);
INSERT INTO rules VALUES ('d039e87a-8d77-4186-ac81-6dadb6445c14', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 1, 1.5, 8);
INSERT INTO rules VALUES ('c469e312-7218-403f-be3d-e3ea31b59c7c', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 0.6, 1, 9);
INSERT INTO rules VALUES ('0cae1e18-a403-4bb7-8281-00933ec583a7', '258d8e13-4470-42b0-8b59-60d5f6d2811a', 0, 0.6, 10);

INSERT INTO rules VALUES ('a49f3755-1949-4d7f-9da0-80d91bca77dc', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 50, null, 1);
INSERT INTO rules VALUES ('2a43cdd5-2c07-488e-abb6-40a10fd9f6f3', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 48, 50, 2);
INSERT INTO rules VALUES ('688555f8-331f-401a-9878-2a4b0561f5af', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 42, 48, 3);
INSERT INTO rules VALUES ('1e098a6d-b9db-4827-aaf3-217b1d5f9101', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 36, 42, 4);
INSERT INTO rules VALUES ('1486d985-99da-47d0-9671-e717918aa4b8', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 30, 36, 5);
INSERT INTO rules VALUES ('6704da91-d3ef-4914-912f-d43f5f7605c4', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 28, 30, 6);
INSERT INTO rules VALUES ('8defcf64-e844-4d01-bb7f-08a19d5a742b', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 24, 28, 7);
INSERT INTO rules VALUES ('119e0c40-80e6-48ec-93f2-faec2b035449', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 22, 24, 8);
INSERT INTO rules VALUES ('dd7772e8-d75d-4785-8eac-f8778dc371c1', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 6, 22, 9);
INSERT INTO rules VALUES ('fe8e05cb-e903-442b-a489-1986cf090aad', '0d56b745-290e-48ab-aa35-b8aab1ae6afc', 0, 6, 10);

INSERT INTO rules VALUES ('ccd7914b-caa7-4470-b044-23049e6b2905', '47961557-d91d-4320-b95f-0d8f27f4277c', 0, 20000, 2);
INSERT INTO rules VALUES ('2aec656c-c3a7-49fb-a53d-6e9a583c23f3', '47961557-d91d-4320-b95f-0d8f27f4277c', 20000, 35000, 4);
INSERT INTO rules VALUES ('10ea4945-4bd8-401f-8d58-48a48422f084', '47961557-d91d-4320-b95f-0d8f27f4277c', 35000, 50000, 6);
INSERT INTO rules VALUES ('94a05f52-5ec2-499d-a668-771605dd1602', '47961557-d91d-4320-b95f-0d8f27f4277c', 50000, 65000, 8);
INSERT INTO rules VALUES ('4c93e1d0-80d5-4fef-b586-16730cf235af', '47961557-d91d-4320-b95f-0d8f27f4277c', 65000, null, 10);