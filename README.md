# Records Management System
A school rms that allows for the management of student and course records.

<img src="/public/imgs/modules.jpg"/>

The application supports the creation, deletion, updating and displaying of students, courses and modules.
Modules belong to courses and students can take one or more courses.

## Backend
The application makes use of axios to fetch its data from a spring boot API found here:
https://github.com/mamin11/java_api

The API provides endpoints for perfoming CRUD on the database.

It has also being configured to upload module contents to an Amazon S3 bucket.
Some of the configuration files for s3 have not been included in the repo as they contained personal credentials.

![Alt Text](/public/imgs/giff.gif)

