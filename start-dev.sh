#!/bin/bash

# Script untuk menjalankan proxy server dan React app bersamaan

echo "🚀 Starting development environment..."

# Function to cleanup background processes
cleanup() {
    echo "🛑 Shutting down servers..."
    kill $PROXY_PID $REACT_PID 2>/dev/null
    exit
}

# Set trap to cleanup on script exit
trap cleanup EXIT INT TERM

# Start proxy server in background
echo "📡 Starting proxy server on port 3001..."
node proxy-server.js &
PROXY_PID=$!

# Wait a moment for proxy to start
sleep 3

# Start React app in background
echo "⚛️  Starting React app on port 3000..."
npm start &
REACT_PID=$!

# Wait for both processes
wait $PROXY_PID $REACT_PID


