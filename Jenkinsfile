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
                npm install && npm run cypress:run
                echo 'publish front end test results'
                pwd
                ls -lart
                '''
                archiveArtifacts allowEmptyArchive: true, artifacts: 'frontendtest/cypress/videos/**'
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
                sh '''
                cd backend-test/
                npm install && npm run cypress:run
                echo 'publish back end test results'
                pwd
                ls -lart
                '''
                    publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'backend-test/cypress/report/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Backend report', 
                    reportTitles: ''
                    ])
            }
        }
    
        stage('Perf test') {
            steps {
                sh '''
                    cd performance-tests/
                    pwd
                    ls -lart
                    rm test1.csv -Rf
                    rm html-reports/ -Rf
                    jmeter -n -t login-logout.jmx -l test1.csv -e -o html-reports/
                '''
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'performance-tests/html-reports', 
                    reportFiles: 'index.html', 
                    reportName: 'Jmeter dashboard (performance)', 
                    reportTitles: ''
                    ])
            }
        }
    }
}