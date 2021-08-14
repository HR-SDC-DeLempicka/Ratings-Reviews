-- CREATE SCHEMA rate_review;
-- json v ??? to reduce query speed

-- CREATE TABLE rate_review.product (
--   id SERIAL PRIMARY KEY,
--   product_id INT NOT NULL
-- );



CREATE TABLE rate_review.reviews (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  rating INT,
  date_of VARCHAR(255),
  summary VARCHAR(255),
  body TEXT,
  recommend BOOLEAN,
  reported BOOLEAN,
  reviewer_name VARCHAR(100),
  reviewer_email VARCHAR(100),
  response VARCHAR(255),
  helpfulness INT
);

CREATE TABLE rate_review.characteristic_reviews (
  id SERIAL PRIMARY KEY,
  characteristic_id INT NOT NULL,
  review_id INT NOT NULL,
  value_of INT
);

CREATE TABLE rate_review.characteristics (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  name_Of VARCHAR(30)
);

CREATE TABLE rate_review.reviews_photos (
  id SERIAL PRIMARY KEY,
  review_id INT NOT NULL,
  url_Of VARCHAR(255)
);




/* I believe this is the command to load schema into database: sudo -u postgres psql < schema.sql */