sudo docker build -f "Dockerfile" -t anashofiya/fe:$TRAVIS_BUILD_NUMBER .
sudo docker push ian18ishar/fe:$TRAVIS_BUILD_NUMBER

echo $GCLOUD_SERVICE_KEY_PRD | base64 --decode > ${HOME}/gcloud-service-key.json
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json

gcloud container clusters get-credentials $CLUSTER_NAME_PRD --region $CLOUDSDK_COMPUTE_REGION --project $PROJECT_NAME_PRD

kubectl config view
kubectl config current-context

 ## deploy api server
kubectl -n alta5 set image deployment/app-2048 app-2048=anashofiya/fe:$TRAVIS_BUILD_NUMBER