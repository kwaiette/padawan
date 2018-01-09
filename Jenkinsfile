#!/usr/bin/env groovy
pipeline {
    agent {
        dockerfile {
            filename "Dockerfile-jenkins-build"
        }
        /*
        docker {
            image 'golden/meteor-dev'
            args '-e SRC_DIR=/var/jenkins_home/workspace/padawan-ci-beta'
        }
        */
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'meteor --allow-superuser remove-platform android'
                sh 'meteor --allow-superuser npm install --save babel-runtime'
                sh 'meteor --allow-superuser build /tmp --architecture os.linux.x86_64'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                //sh 'meteor --allow-superuser test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'ls -ltrh /home/.ssh/'
                sh 'scp -i /home/.ssh/rigel-alpha.pem /tmp/padawan.tar.gz ec2-user@18.221.137.142:/home/ec2-user/docker/staging/'
            }
        }
    }
}