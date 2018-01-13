#!/usr/bin/env groovy

pipeline {
    
    agent {
        label 'linux'
    }

    triggers {
        upstream(
            threshold: hudson.model.Result.SUCCESS
        )
    }

    options {
           timeout time:15, unit:'MINUTES'
           buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
    }

    stages {
        stage('Deploy Grid') {
            steps {
                sh 'docker-compose -f docker-compose.grid.yml up --scale chrome=2 --scale 414px=2 -d'
            }
        }
        stage('Test') {
            steps {
            }
        }
    }

    post {
        always {
            sh 'docker-compose -f docker-compose.grid.yml down'
            junit '**/results/junit/*.xml'
            archiveArtifacts allowEmptyArchive: true, artifacts: '**/results/screenshots/*.png'
        }

        success {
            emailext body: 'All tests passing, you rock!', recipientProviders: [[$class: 'CulpritsRecipientProvider']], subject: '[JENKINS] ${JOB_NAME} Build #${BUILD_NUMBER} - Success', to: ''
        }

        failure {
            emailext attachLog: true, body: 'Tests are failing: ${BUILD_URL}', recipientProviders: [[$class: 'CulpritsRecipientProvider']], subject: '[JENKINS] ${JOB_NAME} Build #${BUILD_NUMBER} - Failed', to: ''
        }
    }
}