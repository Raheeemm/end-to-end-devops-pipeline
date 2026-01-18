pipeline {
    agent any

    environment {
        APP_NAME    = "devops-demo"
        ENVIRONMENT  = "production"
        IMAGE_NAME  = "devops-demo"
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
                  docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                  docker stop ${CONTAINER_NAME} || true
                  docker rm ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                  docker run -d \
                    --name $CONTAINER_NAME \
                    -p 80:3000 \
                    -e APP_NAME=${APP_NAME} \
                    -e ENVIRONMENT=${ENVIRONMENT} \
                    -e BUILD_VERSION=${BUILD_VERSION} \
                    ${IMAGE_NAME}:${BUILD_NUMBER}
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
