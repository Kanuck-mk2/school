 CREATE TABLE Classroom (
    class_id INT PRIMARY KEY CLUSTERED,
    class_name VARCHAR(50) NOT NULL,
 ); --setting or defining tables 

CREATE TABLE Students (
    student_id INT PRIMARY KEY CLUSTERED,
    student_name VARCHAR(50) NOT NULL,
 class_id INT,
 FOREIGN KEY (class_id) REFERENCES Classroom(class_id)

);

INSERT INTO Classroom (class_name) VALUES ('Dana Class'); -- adding value or a 'class' to an attribute  

INSERT INTO Students (student_name, class_id) VALUES   -- adding students to Students table 
('Kayden', 1),
('Voann', 1),
('Rodney', 1),
('Kevin', 1),
('Matt', 1),
('Ahmed', 1),
('Jacob', 1),
('Zac', 1);

ALTER TABLE Students ADD COLUMN fav_food VARCHAR(50);


UPDATE Students
SET fav_food = CASE
    WHEN student_name = 'Kayden' THEN 'Pizza'
    WHEN student_name = 'Voann' THEN 'Sushi'
    WHEN student_name = 'Rodney' THEN 'Burgers'
    WHEN student_name = 'Kevin' THEN 'Pasta'
    WHEN student_name = 'Matt' THEN 'Tacos'
    WHEN student_name = 'Ahmed' THEN 'Falafel'
    WHEN student_name = 'Jacob' THEN 'Hotdogs'
    WHEN student_name = 'Zac' THEN 'Salad'
    ELSE fav_food
END;
