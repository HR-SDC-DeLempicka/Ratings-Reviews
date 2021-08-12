# Ratings-Reviews
API for ratings and reviews widget

ETL proccess:
Download CSV from Google Drive
Split CSV into text doc per 100,000 rows (split -l 100000 reviews.csv)
Move text docs to .csv (for i in *; do mv "$i" "$i.csv"; done)
Add header to each .csv with column names matching table column names in schema
Import each .csv into tables using COPY [table](column1, column2, etc) FROM 'file_path' DELIMITER ',' CSV HEADER
