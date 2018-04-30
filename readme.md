
<p align="center">
<img src="https://laravel.com/assets/img/components/logo-laravel.svg" height="50">
<img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react/react.png" height="50">
</p>

# Food Blog

Pet project which represents blog platform on food thematic.

Web application based on Laravel (back-end) and React (front-end part). Backend implemented as an API which obtains requests from the frontend part. Requests which require authorization use OAuth protocol implemented in Laravel via Passport. User has ability to perform the following actions:
* register
* login
* edit profile info
* create/edit/publish/unpublish posts
* view his posts as well as all published posts on site

User with admin access has ability to moderate posts of regular users.
Front-end part of the application is divided into modules for better extensibility.
Project covered with Unit tests.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1. `git clone git@github.com:michael-ignatiev/food-blog.git project-folder`
2. `composer install && composer update`
3. `php artisan key:generate`
4. `php artisan migrate`
5. `php artisan db:seed`
6. `update db connection credentials in the .env file`
7. `php artisan serve`
8. `npm install`

### Installing Passport

* `php artisan passport:install`
* copy generated keys and paste to .env file:
```
PERSONAL_CLIENT_ID=1
PERSONAL_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PASSWORD_CLIENT_ID=2
PASSWORD_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Run PHP Server
`php artisan serve`

### Compile assets for React

One time compiling `npm run dev` or runtime compiling `npm run watch`

## Built With

* [Laravel](https://laravel.com/) - The PHP Framework
* [React](https://reactjs.org/) - JavaScript library

## License

Project is [MIT licensed](./LICENSE).