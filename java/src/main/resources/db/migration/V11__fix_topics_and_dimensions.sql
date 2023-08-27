UPDATE topics SET text = 'Klima' WHERE id = 'b9bc7b50-a647-47eb-9c6e-d19e58e8ef25';

INSERT INTO topics VALUES ('74e7865e-44ad-11ee-be56-0242ac120002', 'Wohnangebot und Raumentwicklung', 'b87dbd94-a350-4569-99f7-1276a67993ad');

UPDATE indicators SET topic_id = 'b9bc7b50-a647-47eb-9c6e-d19e58e8ef25' WHERE id = 'd4d018d6-445f-11ee-be56-0242ac120002';
UPDATE indicators SET topic_id = 'b9bc7b50-a647-47eb-9c6e-d19e58e8ef25' WHERE id = 'c1c2027e-4462-11ee-be56-0242ac120002';
UPDATE indicators SET topic_id = '74e7865e-44ad-11ee-be56-0242ac120002' WHERE id = 'acdaeae6-4463-11ee-be56-0242ac120002';
