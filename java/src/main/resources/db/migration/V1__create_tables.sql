CREATE TABLE IF NOT EXISTS INDICATORS (
    ID UUID PRIMARY KEY,
    NAME VARCHAR(255),
    COMMENT VARCHAR(255),
    UNIT VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS RULES (
    ID UUID PRIMARY KEY,
    INDICATOR_ID UUID,
    LOWER_BOUND DECIMAL,
    UPPER_BOUND DECIMAL,
    VALUE INT
);

CREATE TABLE IF NOT EXISTS SOURCES (
   ID UUID PRIMARY KEY,
   URL VARCHAR(255),
   API_URL VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS RAW_DATA (
    ID UUID PRIMARY KEY,
    INDICATOR_ID UUID,
    COUNTY_ID UUID,
    VALUE DECIMAL,
    SOURCE_ID UUID
);

CREATE TABLE IF NOT EXISTS COUNTIES (
    ID UUID PRIMARY KEY,
    ZIP INT,
    NAME VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS SURVEY (
    ID UUID PRIMARY KEY,
    COUNTY_ID UUID,
    TITLE VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS QUESTIONS (
    ID UUID PRIMARY KEY,
    SURVEY_ID UUID,
    TEXT VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS ANSWERS (
    ID UUID PRIMARY KEY,
    SURVEY_ID UUID,
    VALUE DECIMAL,
    QUESTION_ID UUID
);