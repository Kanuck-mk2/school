CREATE DATABASE db_name;  -- Create a DB
USE db_name;              -- Select DB
SHOW DATABASES;           -- List DBs
DROP DATABASE db_name;    -- Drop DB

CREATE TABLE table_name (  -- Create Table
  col_name datatype constraints, ...
);
SHOW TABLES;              -- List Tables
DESCRIBE table_name;       -- Table Structure
DROP TABLE table_name;     -- Drop Table
ALTER TABLE tname ADD col datatype;  -- Add Column
ALTER TABLE old_name RENAME TO new_name;  -- Rename

INT, VARCHAR(size), TEXT, DATE, DECIMAL(m,d)
AUTO_INCREMENT: Increments value
PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, DEFAULT

INSERT INTO table (col1, col2) VALUES (v1, v2);  -- Insert
UPDATE table SET col1 = val WHERE condition;     -- Update
DELETE FROM table WHERE condition;               -- Delete

SELECT * FROM table;                             -- All Rows
SELECT col1, col2 FROM table;                    -- Specific Columns
SELECT * FROM table WHERE condition;             -- Filter
SELECT * FROM table ORDER BY col1 [ASC|DESC];    -- Sort
SELECT * FROM table LIMIT number;                -- Limit Rows

SELECT * FROM t1 JOIN t2 ON t1.col = t2.col;     -- Inner Join
SELECT * FROM t1 LEFT JOIN t2 ON t1.col = t2.col; -- Left Join

SELECT COUNT(*), SUM(col), AVG(col) FROM table;  -- Aggregates
SELECT col, COUNT(*) FROM table GROUP BY col;    -- Group By
HAVING COUNT(*) > 1;                             -- Filter Groups

CREATE INDEX idx_name ON table (col);            -- Create Index
CREATE UNIQUE INDEX idx_name ON table (col);     -- Unique Index

LIMIT 10 OFFSET 5;  -- Pagination (Skip first 5 rows, show next 10)
