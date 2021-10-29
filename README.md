# sample_go_app
DockerとGoの勉強用リポジトリ

## imageビルド
```
docker build . -t my_go_app
```

## 起動
```
docker run -it -d -p 8080:8080 --rm my_go_app
```
