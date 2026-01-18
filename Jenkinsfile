pipeline {
    agent any

    environment {
        APP_NAME    = "devops-demo"
        APP_ENV     = "dev"
        APP_VERSION = "1.0.${BUILD_NUMBER}"
        IMAGE_NAME  = "devops-demo:${BUILD_NUMBER}"
        CONTAINER_NAME = "devops-demo-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/Raheeemm/end-to-end-devops-pipeline.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                  docker rm -f $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                  docker run -d \
                    --name $CONTAINER_NAME \
                    -p 80:3000 \
                    -e APP_NAME=$APP_NAME \
                    -e APP_ENV=$APP_ENV \
                    -e APP_VERSION=$APP_VERSION \
                    $IMAGE_NAME
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                  sleep 5
                  curl -f http://localhost/health
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}
