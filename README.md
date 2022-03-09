# bug-manager

This is almost the best bug manager to use.
You must be asking:
"How does it work?"

Easy peasy!

First you will need docker to run it. 
And then you must run
``` docker build ```

and then
``` docker-compose up ```

#### Optional 
To make our job easy, there is a script to generate some values
``` docker-compose run web npm run generate_bugs ```

And the inform how many bugs you want to generate and press enter, and that's it, just copy the values :)

------------------------------------------

To run the solution you can use some software (like, Insomnia, Postman) or use curl, here I will show how to test it using CURL.

##### Data format:

~~~json
{
    "bugs": [
        { 
            "titulo": "someString",
            "idade":  "someInteger",
            "estimativa": "someInteger",
            "prioridade": "someString"
        }
    ]
}
~~~

#### How to get bugs to resolve today

Example:
~~~CURL
 curl -XPOST -H "Content-type: application/json" -d '{"bugs":  [{"titulo":"Ex velit.","idade":1,"estimativa":2,"prioridade":"normal"},{"titulo":"Nulla sunt cillum irure sint.","idade":6,"estimativa":15,"prioridade":"normal"},{"titulo":"Quis commodo.","idade":1,"estimativa":10,"prioridade":"critico"},{"titulo":"Pariatur ullamco pariatur aliqua incididunt.","idade":3,"estimativa":23,"prioridade":"normal"}] }' 'http://localhost:3000/bugs'
~~~

To insert your data:

~~~CURL
curl -XPOST -H "Content-type: application/json" -d '<JSON_BUGS>' 'http://localhost:3000/bugs'
~~~

#### How to distribute bugs
First you need to get bugs to resolve today and insert on CURL:

~~~CURL
 curl -XPOST -H "Content-type: application/json" -d '<JSON_BUGS>' 'http://localhost:3000/bugs_group'
 ~~~


#### Tests :D 

 To run tests:

 ``` docker-compose run web npm run test ```