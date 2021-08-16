
CREATE TABLE IF NOT EXISTS rate_review.reviews (
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

COPY rate_review.reviews
FROM '/Users/sam/hrprojects/Ratings-Reviews/reviews.csv'
DELIMITER ',' CSV HEADER;

CREATE TABLE IF NOT EXISTS rate_review.characteristics (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  name_Of VARCHAR(30)
);

COPY rate_review.characteristics
FROM '/Users/sam/hrprojects/Ratings-Reviews/characteristics.csv'
DELIMITER ',' CSV HEADER;

CREATE TABLE IF NOT EXISTS rate_review.characteristic_reviews (
  id SERIAL PRIMARY KEY,
  characteristic_id INT NOT NULL,
  review_id INT NOT NULL,
  value_of INT,
  FOREIGN KEY (characteristic_id) REFERENCES rate_review.characteristics(id),
  FOREIGN KEY (review_id) REFERENCES rate_review.reviews(id)

);

COPY rate_review.characteristic_reviews
FROM '/Users/sam/hrprojects/Ratings-Reviews/characteristic_reviews.csv'
DELIMITER ',' CSV HEADER;


CREATE TABLE IF NOT EXISTS rate_review.reviews_photos (
  id SERIAL PRIMARY KEY,
  review_p_id INT NOT NULL,
  url_Of VARCHAR(255),
  FOREIGN KEY (review_p_id) REFERENCES rate_review.reviews(id)
);

COPY rate_review.reviews_photos
FROM '/Users/sam/hrprojects/Ratings-Reviews/reviews_photos.csv'
DELIMITER ',' CSV HEADER;



/* I believe this is the command to load schema into database: sudo -u postgres psql < schema.sql */