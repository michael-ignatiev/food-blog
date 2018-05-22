<p align="center">
<img src="https://laravel.com/assets/img/components/logo-laravel.svg" height="50">
<img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react/react.png" height="50">
</p>

# Food Blog

Blog platform for posting articles on food  thematic.

Web application based on Laravel (back-end) and React (front-end part). Backend implemented as an RESTful API which obtains requests from the frontend part. Requests which require authorization use OAuth protocol. User has ability to perform the following actions:
* authorize
* edit profile info
* create/edit/publish/unpublish posts
* view his posts as well as published posts of other users

User with admin rights has ability to manage users, articles.
Front-end part of the application is divided into modules for better extensibility.
Project covered with Unit tests.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1. `git clone git@github.com:michael-ignatiev/food-blog.git project-folder`
2. `composer install && composer update`
3. `php -r "copy('.env.example', '.env');"`
4. `php artisan key:generate`
5. update db connection credentials in the `.env` file
6. `php artisan migrate`
7. add to  `.env`  file the following setting  `API_CURRENT_VERSION=v1`
8. `php artisan db:seed`
9. `php artisan passport:install`
10. copy generated keys and paste to .env file:
```
PERSONAL_CLIENT_ID=1
PERSONAL_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PASSWORD_CLIENT_ID=2
PASSWORD_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
11. `php artisan serve`
12. `npm install`
13. one time compiling `npm run dev` or run time compiling `npm run watch`

## Built With

* [Laravel](https://laravel.com/) - The PHP Framework
* [React](https://reactjs.org/) - JavaScript library

## License

Project is [MIT licensed](./LICENSE).