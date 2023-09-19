use student;

show tables;
SELECT
    Course.course_name,
    COUNT(Student.student_id) AS enrolled_count
FROM
    Course
LEFT JOIN
    Student ON Course.course_id = Student.course_id
GROUP BY
    Course.course_name
ORDER BY
    enrolled_count DESC;

SELECT
    Course.course_id,
    Course.course_name,
    (SELECT COUNT(*) FROM Student WHERE Student.course_id = Course.course_id) AS enrolled_count
FROM
    Course
ORDER BY
    enrolled_count DESC;


SELECT
    Course.course_id,
    Course.course_name,
    enrolled_counts.enrolled_count
FROM
    Course
LEFT JOIN
    (
        SELECT
            course_id,
            COUNT(*) AS enrolled_count
        FROM
            Student
        GROUP BY
            course_id
    ) AS enrolled_counts ON Course.course_id = enrolled_counts.course_id
ORDER BY
    enrolled_counts.enrolled_count DESC;


select state, city, count(*) as stud_count 
from student
where course_id is not null
group BY state, city
order by state, city;