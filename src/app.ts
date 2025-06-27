import express, { Application, Request, Response } from 'express';
import { Books } from './app/model/bookModel';


const app: Application = express()

app.use(express.json())




app.post('/api/books', async (req: Request, res: Response) => {
    const body = req.body;
    const data = await Books.create(body)
    res.json({
        success: true,
        message: "Book created successfully",
        data
    })
})






app.get('/api/books', async (req: Request, res: Response) => {
    const data = await Books.find()
    res.json({
        success: true,
        message: "Books retrieved successfully",
        data
    })
})





app.get('/api/books/:bookId', async (req: Request, res: Response) => {
    const booksId = req.params.bookId;
    const data = await Books.findById(booksId)
    res.json({
        success: true,
        message: "Books retrieved successfully",
        data
    })
})





app.put('/api/books/:bookId', async (req: Request, res: Response) => {
    const id = req.params.bookId;
    const updatebody = req.body;
    const data = await Books.findByIdAndUpdate(id, updatebody, { new: true })
    res.json({
        success: true,
        message: "Book updated successfully",
        data
    })
})





app.delete('/api/books/:bookId', async (req: Request, res: Response) => {
    const id = req.params.bookId;
    const data = await Books.findByIdAndDelete(id, { new: true })
    res.json({
        success: true,
        message: "Books deleted successfully",
        data: null
    })
})







app.get('/', async (req: Request, res: Response) => {
    res.send('Assignment-3')
})

export default app