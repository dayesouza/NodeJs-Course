Folder with projects made learning NodeJs and MongoDB with the following Brazilian course from Udemy:
https://www.udemy.com/curso-completo-do-desenvolvedor-nodejs

Installed MongoDB using the following instructions:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

To access mongo on Linux, you just have to start 'mongo' on the terminal

show dbs; --show databases

use course_mongodb; --use this database or if not exists prepare to create it

db.createCollection("courses"); - To create a collection called 'courses'

db.getCollectionNames(). --get collections created

db.courses.drop(); --drop the collection 'courses'

db.students.save({data}); --saves the json

db.students.findOne() -- Find the last inserted document on the collection 'students'

db.students.find().pretty() --Returns all the documents in a nice way

db.students.find({age: {$gt:20}}) --Returns every document where the age is greater than 20 (you can put .pretty() in the end)

db.students.find({sex: {$eq:'F'},age: {$gt: 30}}); -- AND

db.students.find({$or: [{sex: {$eq:'F'}},{age: {$gt: 30}}]}).pretty(); --OR

db.students.update({parameters for the condition},{$set: {param: "value"}},{multi: true}); //Multi if everyone or just the first found
Example: db.students.update({name: "Day"},{$set: {name: "Daydois"}});

remove({name: "Daydois"}, just_one_boolean);

save(//update the entire document or includes a new one
  _id: xxxxx
)


Operadores SQL vs MongoDB

= $eq

> $gt

>= $gte

< $lt

<= $ltr

!= $ne
