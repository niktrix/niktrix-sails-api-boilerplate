# portal

a [Sails](http://sailsjs.org) application

Done</br>
login</br>
createuser</br>

candidate</br>
list candidate</br>
create candidate</br>
delete candidate</br>


TODO</br>
admin</br>
upload file</br>
Calander</br>
Dashboard</br>
Activities</br>



payload to create candidate
```
{
"email":"nicky2@gmail.com",
"password":"password",
"data":
        {"name":"somename",
        "email":"someemail@gmail.com",
        "country":"India",
        "currentLocation":"India",
        "contact":["9929074162","9929074163"],
        "totalExperience":"2",
        "industry":"Some Industry",
        "position":"some position",
        "function":"some function",
        "skills":["java","php"],
        "profilePic":"/image/969696.jpg"
        }
}
```

payload to list candidate by pagination

```
{
"email":"nicky2@gmail.com",
"password":"password",
"page":{"limit":2,"page":3}
}
```


payload to search candidate

```
{
"email":"nicky2@gmail.com",
"password":"password",
"where":{"createdBy.email":"nicky2@gmail.com"}
}
```


Installation Instructions
```      
install apache,php,nodejs  

apt-get update
curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -
apt-get install --yes nodejs
apt-get install --yes build-essential
//apt-get install php5 libapache2-mod-php5 php5-mcrypt php5-curl
git clone https://github.com/niktrix/sails-api-boilerplate/
cd sails-api-boilerplate
npm install
npm install pm2 -g --unsafe-perm
pm2 start app.js -x -- --prod
...
