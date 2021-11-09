package main

import "github.com/gin-gonic/gin"

func main() {
  router := gin.Default()
  router.LoadHTMLGlob("templates/*.html")
  router.Static("/assets", "./assets")

  router.GET("/", func(ctx *gin.Context){
      ctx.HTML(200, "index.html", gin.H{})
  })

  router.Run() // port 8080
}