## imageビルド
```
docker build . -t sample_front_app
```

## 起動
```
docker run -it -d -p 3000:3000 --rm sample_front_app
```
