import http from 'http'
import dotenv from 'dotenv'

import app from './api/app'

dotenv.config()

const PORT = process.env.PORT || 5000
const server = http.createServer(app)

server.listen(PORT, () => {
  console.info(`Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}/api`)
}).on('error', console.error)
