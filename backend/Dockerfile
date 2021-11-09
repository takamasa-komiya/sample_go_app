FROM golang:1.17.2-alpine3.14

WORKDIR /go/src
COPY . .

WORKDIR /go/src/app
RUN go build -o app

EXPOSE 8080
ENTRYPOINT [ "./app" ]
