# End-to-End DevOps CI/CD Pipeline

An end-to-end DevOps project demonstrating the deployment of a web application using Jenkins, Docker, Git, GitHub, and AWS EC2. The project combines web development with CI/CD automation to simplify the application build and deployment workflow.

## Overview

This project demonstrates how DevOps tools can be integrated to automate the deployment of a Node.js web application. The application features a web interface built with HTML and CSS, while Jenkins and Docker support the CI/CD and containerization workflow.

The application was previously deployed on an AWS EC2 instance, providing hands-on experience with cloud-based application deployment.

## Objectives

* Understand and implement a basic CI/CD workflow.
* Use Git and GitHub for source code management.
* Automate application build and deployment tasks using Jenkins.
* Containerize the web application using Docker.
* Deploy a web application on an AWS EC2 instance.
* Understand the integration of development, automation, and cloud infrastructure.

## Technology Stack

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| HTML       | Web page structure              |
| CSS        | Web interface styling           |
| Node.js    | Application runtime             |
| Git        | Source code version control     |
| GitHub     | Source code hosting             |
| Jenkins    | CI/CD pipeline automation       |
| Docker     | Application containerization    |
| AWS EC2    | Cloud-based application hosting |

## Architecture

The project follows a basic CI/CD workflow:

```text
Developer
    |
    v
Git Repository
    |
    v
GitHub
    |
    v
Jenkins CI/CD Pipeline
    |
    v
Docker Image Build
    |
    v
Docker Container Deployment
    |
    v
Web Application on AWS EC2
```

The diagram represents the intended workflow. The precise trigger mechanism and deployment configuration depend on the Jenkins and EC2 setup used for the project.

## Key Features

* **Version Control:** Maintains application source code using Git and GitHub.
* **CI/CD Automation:** Uses Jenkins to execute the configured build and deployment workflow.
* **Containerization:** Packages the Node.js application into a Docker image.
* **Cloud Deployment:** Previously deployed the containerized application on AWS EC2.
* **Web Interface:** Provides a web interface developed using HTML and CSS, served by a Node.js application.

## Project Structure

```text
end-to-end-devops-pipeline/
├── public/             # Frontend assets
├── server.js           # Node.js application
├── Dockerfile          # Docker image configuration
├── Jenkinsfile         # Jenkins pipeline definition
├── .dockerignore       # Files excluded from the Docker build context
├── .env.example        # Example environment configuration
└── README.md           # Project documentation
```

## Tools and Technologies

### Git and GitHub

Used for version control and maintaining the application's source code in a remote repository.

### Jenkins

Used to define and execute the CI/CD pipeline through a `Jenkinsfile`.

### Docker

Used to package the application into a container image and run it in a consistent environment.

### AWS EC2

Used as the cloud virtual machine for the previous application deployment.

### Node.js, HTML and CSS

Used to implement the web application and its user interface.

## Previous Deployment

The application was previously deployed using an AWS EC2 instance. That AWS account and instance are no longer available, so the original cloud deployment cannot currently be accessed.

The repository preserves the project source code and deployment configuration for further development and local testing.

## Future Improvements

* Add automated application tests to the CI/CD pipeline.
* Integrate code-quality and dependency vulnerability checks.
* Improve deployment failure handling and rollback procedures.
* Add detailed pipeline execution screenshots.
* Expand application monitoring and health verification.
* Improve deployment configuration and troubleshooting documentation.

## Learning Outcomes

This project provided practical exposure to:

* CI/CD pipeline concepts and automation.
* Source code management with Git and GitHub.
* Docker image creation and container execution.
* Jenkins pipeline configuration.
* Cloud-based application deployment using AWS EC2.
* Integration of web development and DevOps tools.

## Author

**Abdul Raheem**

GitHub: [Raheeemm](https://github.com/Raheeemm)
