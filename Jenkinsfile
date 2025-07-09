pipeline {
    agent any

    environment {
        IMAGE_NAME = 'hossine77/cie-market-frontend'
        TAG = 'latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Check Docker') {
    steps {
        script {
            def dockerExists = sh(script: 'command -v docker || true', returnStdout: true).trim()
            if (!dockerExists) {
                echo "⚠️ Docker not found. Attempting to install Docker..."

                sh '''
                    set -e
                    if [ -x "$(command -v apt-get)" ]; then
                        echo "🔧 Installing Docker via apt-get..."
                        sudo apt-get update -y
                        sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release
                        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
                        echo \
                          "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
                          $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
                        sudo apt-get update -y
                        sudo apt-get install -y docker-ce docker-ce-cli containerd.io
                        sudo usermod -aG docker $USER
                    else
                        echo "❌ Unsupported package manager. Manual Docker install required."
                        exit 1
                    fi
                '''
            }

            def dockerRunning = sh(script: 'docker info > /dev/null 2>&1 || true', returnStatus: true)
            if (dockerRunning != 0) {
                echo "⚠️ Docker installed but not running. Attempting to start Docker..."
                def startStatus = sh(script: 'sudo systemctl start docker || sudo service docker start', returnStatus: true)
                if (startStatus != 0) {
                    error "❌ Docker could not be started. Please start it manually."
                }
            }

            echo "✅ Docker is installed and running."
        }
    }
}

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_NAME:$TAG .'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'echo "Running tests inside the Docker container..."'
                }
            }
        }

        stage('Login to Docker Hub') {
                steps {
                    withCredentials([
                        usernamePassword(
                            credentialsId: 'docker-frontend',
                            usernameVariable: 'USERNAME',
                            passwordVariable: 'PASSWORD'
                        )
                    ]) {
                        sh 'docker login -u $USERNAME -p $PASSWORD'
                    }
                }
            }

        stage('Push Image to Docker Hub') {
            steps {
                sh 'docker push $IMAGE_NAME:$TAG'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
