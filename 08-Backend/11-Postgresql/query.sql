CREATE TABLE Books (
ID SERIAL PRIMARY KEY,
BookName VARCHAR(255),
price DECIMAL(6 ,  2),
Genre VARCHAR(100),
Available BOOLEAN
)

SELECT * FROM Books

INSERT INTO Books (
bookname , price , genre , available
) VALUES 
(
'Harry Potter' , 1200.00 , 'Fantasy' , TRUE
),
(
'Game of Thrones' , 1500.00 , 'Fantasy' , TRUE
)




INSERT INTO BOOKS (
BookName , price , Genre , Available
) VALUES (
'Big Data Basics' , 800.00 , 'Technology' , FALSE
),
(
'Learn SQL' , 600.00 , 'Education' , TRUE
)


INSERT INTO Books (
  bookname , price , genre , available
) VALUES 

(
  'The Hobbit' , 950.00 , 'Fantasy' , TRUE
),
(
  'To Kill a Mockingbird' , 800.00 , 'Fiction' , TRUE
),
(
  '1984' , 700.00 , 'Dystopian' , TRUE
),
(
  'Pride and Prejudice' , 600.00 , 'Romance' , TRUE
),
(
  'The Great Gatsby' , 850.00 , 'Fiction' , TRUE
),
(
  'The Catcher in the Rye' , 650.00 , 'Fiction' , TRUE
),
(
  'The Lord of the Rings' , 1400.00 , 'Fantasy' , TRUE
),
(
  'Moby Dick' , 900.00 , 'Adventure' , TRUE
),
(
  'The Alchemist' , 500.00 , 'Philosophy' , TRUE
),
(
  'The Odyssey' , 700.00 , 'Classic' , TRUE
);



SELECT * FROM Books
Where bookname LIKE '%Big%'


SELECT * FROM Books
Where price < 1000




SELECT * FROM Books
ORDER BY PRICE DESC;

SELECT * FROM Books
Where Genre LIKE 'Technology'

SELECT * FROM Books
Where Available = FALSE

DELETE FROM Books
where Bookname = 'Big Data Basics'

UPDATE Books
SET available = FALSE
WHERE Bookname = 'The Alchemist'

