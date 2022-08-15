import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import cors from 'cors'
import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'
import dietRoutes from './routes/dietRoutes.js'
import diaryRoutes from './routes/diaryRoutes.js'
import quizRoutes from './routes/quizRoutes.js'
import storyRoutes from './routes/storyRoutes.js'

dotenv.config()

connectDB()

const app = express()
if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'))
}

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json({extended: false }));
app.get('/', (req,res) => {
    res.send('API is running....')
})

app.use('/v1/users', userRoutes)
app.use('/v1/diet', dietRoutes)
app.use('/v1/diary', diaryRoutes)
app.use('/v1/story', storyRoutes)
app.use('/v1/quiz', quizRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} MODE on port ${PORT}`.yellow.bold))