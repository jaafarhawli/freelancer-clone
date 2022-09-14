# Bootstrap Template Clone

This website is a clone for a bootstrap template website "https://startbootstrap.com/previews/freelancer".
Added to it restrictions on the full name, email, phone number and the messsage that a user can input in the "Contact Me" form.

* Full Names should be a minimum of 5 characters
* Email field should be an email, with a minimum of 3 characters before the @ and 5 characters after the @
* Phone Number should start with +961 and followed by either 7 digits (if it's a 03 number, i.e: +9613456789) or. followed by 8 digits (if it's a 71/76/70/etc: +96171345234)
* Message should be a minimum of 100 characters

If validation fails it will show up a red message in the bottom of the "Contat Me" section.
The input information are locally added to a database called "bootstrap" with five attributes:
* id (auto-incremented)
* full_name
* email_address
* phone_number
* message
 
 The webpage will automatically display all the users inside the database on a "Contact List" section after the "Contact Me" section, from the earliest to the latest, and will increment the table everytime a new user is added.

 NB: There was an issue merging the master branch with the main branch so I added the backend files to the main branch manually.


