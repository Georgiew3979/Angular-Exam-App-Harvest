# Angular-Exam-App-Harvest

This is a SPA application using Angular and Kinvey as backend, called “Harvest”.

The application has:

Public Part:

Anyone could see the public part  without authentication. It includes the application landing page, home page, the user login and user registration forms.

Private Part  is only for users that were granted with the role “Worker” from administrator:

Registered workers have personal area in the web application accessible after successful login, which enables them to:
•	Create new Field – create new bed, where new plants will be planted.
•	Create new Culture – introduce new agriculture crop, which hasn’t been grown before in the farm.
•	Add a culture to Field – after selecting which one from search panel.
•	When culture is ready to be harvested to register quantity of crop – Harvest page
•	Remove culture from Field after the end of the season.  

Administration Part is only for admin user:

System administrators have access to the system and permissions to administer all major information objects in the system:
•	Can create / edit / delete / grant Worker role to users 
•	Can create / edit/ delete Fields
•	Can create / edit/ delete Culture
