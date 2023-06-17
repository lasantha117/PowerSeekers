

# UG_Community

This project is a web application developed using Spring Boot, PostgreSQL, and Angular. It aims to create a community platform for university students to connect, share resources, and collaborate on various academic and extracurricular activities.

## Features

- User registration and authentication
- User profile management
- Forum for discussions and questions
- Resource sharing, such as lecture notes, study materials, etc.
- Event management for organizing and attending university events
- Chat functionality for real-time communication among community members

## Prerequisites

Before running the application, make sure you have the following installed:

- Java Development Kit (JDK) 11 or higher
- Node.js and npm (Node Package Manager)
- Angular CLI
- PostgreSQL database

## Installation

### Backend (Spring Boot)

1. Clone the repository:

```bash
$ git clone https://github.com/Chaami-Hewage/UG_Community.git
$ cd UG_Community/backend
```

2. Set up the PostgreSQL database:
   - Create a new database in PostgreSQL.
   - Update the `application.properties` file with your database credentials.

3. Build and run the Spring Boot application:

```bash
$ ./mvnw spring-boot:run
```

### Frontend (Angular)

1. Navigate to the frontend directory:

```bash
$ cd UG_Community/frontend
```

2. Install the dependencies:

```bash
$ npm install
```

3. Start the Angular development server:

```bash
$ ng serve
```

4. Access the application by visiting `http://localhost:4200` in your web browser.

## Usage

1. Register a new account or log in with your existing credentials.
2. Explore different sections of the application, such as the forum, resources, events, and chat.
3. Create new posts, upload resources, join events, and participate in discussions.
4. Interact with other community members through comments and messages.
5. Customize your profile and manage your account settings.

## Contributing

Contributions to the UG_Community project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b new-feature`.
3. Make changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin new-feature`.
5. Submit a pull request.



