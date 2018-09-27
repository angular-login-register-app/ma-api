# MA Api

## Install MongoDb 
1. `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4`
2. If you are using:
	* Ubuntu 16.04 : `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list`
	* Ubuntu 18.04 : `echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list`
3. `sudo apt-get update`
4. `sudo apt-get install -y mongodb-org`
5. `sudo service mongod start`
6. Check if mongodb is active using `sudo service mongod status`

## Install modules
`npm install`

## Run project
`npm run`

## Run tests
`npm test`