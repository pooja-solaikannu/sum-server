const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const todos = [
    {
        id: 1,
        title: "Eat at correct time",
        tag: "health",
        status: "done"
    },
    {
        id: 2,
        title: "Go to gym",
        tag: "health",
        status: "done"
    },
    {
        id: 3,
        title: "learn hypothesis testing",
        tags: "statistics",
        status: "not done"
    }
]
app.get("/todos", (req, res) => {
    res.status(200).json({
        todos
    })
})


app.listen(3000)