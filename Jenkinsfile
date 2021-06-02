pipeline {
    agent any
    stages {
        stage('Deploy/ Build App') {
            steps {
                sh '''
                echo 'Application deployed successfully!'
                '''
            }
        }
        stage('Frontend test') {
            steps {
                sh '''
                cd frontendtest/
                run npm install && npm run cypress:run
                echo 'publish front end test results'
                pwd
                ls -lart
                '''
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'frontendtest/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Frontend report', 
                    reportTitles: ''
                    ])
            }
        }
        stage('Backend test') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
        stage('Perf test') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
    }
}