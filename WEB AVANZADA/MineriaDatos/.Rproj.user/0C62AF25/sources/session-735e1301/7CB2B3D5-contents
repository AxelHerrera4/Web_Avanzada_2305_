# Cargar librerías necesarias
library(shiny)
library(ggplot2)
library(cluster)
library(factoextra)

# Cargar el dataset desde la ruta local
ruta_archivo <- "D:/U, dolor de cabeza/SEPTIMO SEMESTRE/WEB AVANZADA/MINERIA DE DATOS/autos_clean.csv"
dataset <- read.csv(ruta_archivo)

# Seleccionar solo columnas numéricas
dataset_numeric <- dataset[, sapply(dataset, is.numeric)]

# Normalizar los datos
normalize <- function(x) {
  return((x - min(x)) / (max(x) - min(x)))
}
dataset_scaled <- as.data.frame(lapply(dataset_numeric, normalize))

# Definir la interfaz de usuario (UI)
ui <- fluidPage(
  titlePanel("Agrupamiento K-Means en autos_clean.csv"),
  sidebarLayout(
    sidebarPanel(
      sliderInput("num_clusters", "Número de Clusters (K):", min = 2, max = 6, value = 3),
      actionButton("run", "Ejecutar Agrupamiento")
    ),
    mainPanel(
      plotOutput("clusterPlot"),
      tableOutput("clusterTable")
    )
  )
)

# Definir la lógica del servidor
server <- function(input, output) {
  
  kmeans_result <- eventReactive(input$run, {
    set.seed(123)
    kmeans(dataset_scaled, centers = input$num_clusters, nstart = 25)
  })
  
  output$clusterPlot <- renderPlot({
    req(kmeans_result())
    fviz_cluster(kmeans_result(), data = dataset_scaled, geom = "point", ellipse.type = "convex", ggtheme = theme_minimal())
  })
  
  output$clusterTable <- renderTable({
    req(kmeans_result())
    kmeans_result()$centers  # Muestra los centroides de cada cluster
  })
}

# Ejecutar la aplicación Shiny
shinyApp(ui = ui, server = server)
