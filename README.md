# Angular-Exam-App-Harvest

This is a SPA application using Angular and Kinvey as backend, called “Harvest”.

The application has:

Public Part:

Anyone could see the public part  without authentication. It includes the application landing page, home page, the user login and user registration forms.

Private Part  is only for users that were granted with the role “Worker” from administrator:

Registered workers have personal area in the web application accessible after successful login, which enables them to:<br>
•	Create new Field – create new bed, where new plants will be planted.<br>
•	Create new Culture – introduce new agriculture crop, which hasn’t been grown before in the farm.<br>
•	Add a culture to Field – after selecting which one from search panel.<br>
•	When culture is ready to be harvested to register quantity of crop – Harvest page<br>
•	Remove culture from Field after the end of the season.  <br>

Administration Part is only for admin user:

System administrators have access to the system and permissions to administer all major information objects in the system:<br>
•	Can create / edit / delete / grant Worker role to users <br>
•	Can create / edit/ delete Fields<br>
•	Can create / edit/ delete Culture<br>
