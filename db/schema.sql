CREATE TABLE IF NOT EXISTS reviews (
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

COPY reviews
FROM '/Users/sam/hrprojects/Ratings-Reviews/csv_folder/reviews.csv'
DELIMITER ',' CSV HEADER;

CREATE TABLE IF NOT EXISTS characteristics (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  name_of VARCHAR(30)
);
COPY characteristics
FROM '/Users/sam/hrprojects/Ratings-Reviews/csv_folder/characteristics.csv'
DELIMITER ',' CSV HEADER;

CREATE TABLE IF NOT EXISTS characteristic_reviews (
  id SERIAL PRIMARY KEY,
  characteristic_id INT NOT NULL,
  review_id INT NOT NULL,
  value_of INT,
  FOREIGN KEY (characteristic_id) REFERENCES characteristics(id),
  FOREIGN KEY (review_id) REFERENCES reviews(id)
);

COPY characteristic_reviews
FROM '/Users/sam/hrprojects/Ratings-Reviews/csv_folder/characteristic_reviews.csv'
DELIMITER ',' CSV HEADER;


CREATE TABLE IF NOT EXISTS reviews_photos (
  id SERIAL PRIMARY KEY,
  review_p_id INT NOT NULL,
  url_of VARCHAR(255),
  FOREIGN KEY (review_p_id) REFERENCES reviews(id)
);

COPY reviews_photos
FROM '/Users/sam/hrprojects/Ratings-Reviews/csv_folder/reviews_photos.csv'
DELIMITER ',' CSV HEADER;

-- CREATE INDEX reviews_idx ON rate_review.reviews(id)
-- CREATE INDEX product_idx ON rate_review.reviews(product_id);
-- CREATE INDEX product_cidx ON rate_review.characteristics(product_id);
-- CREATE INDEX review_idx ON rate_review.characteristic_reviews(review_id);
-- CREATE INDEX characteristic_idx ON rate_review.characteristic_reviews(characteristic_id);
-- CREATE INDEX value_of_idx ON rate_review.characteristic_reviews(value_of);
-- CREATE INDEX review_pidx ON rate_review.reviews_photos(review_id);


CREATE INDEX reviews_complete ON reviews (product_id) INCLUDE
(id, rating, date_of, summary, body, recommend, reviewer_name, reviewer_email, response, helpfulness);
CREATE INDEX photos_complete ON reviews_photos (review_p_id) INCLUDE
(id, url_of);
CREATE INDEX characteristics_complete ON characteristics (product_id) INCLUDE
(id, name_of);
CREATE INDEX characteristic_reviews_complete ON characteristic_reviews (characteristic_id)
INCLUDE (id, review_id, value_of);
-- CREATE INDEX reviews_rec_complete ON reviews (product_id) INCLUDE (id, recommend);