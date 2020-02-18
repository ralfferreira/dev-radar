const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://ralf:rabanete@cluster0-apnuz.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, // Para tirar os erros no terminal
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

app.use(cors());
// Para o express entender requisicoes no formato JSON
app.use(express.json());

app.use(routes);

server.listen(3840);
