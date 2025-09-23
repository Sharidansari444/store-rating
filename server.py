#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os
from threading import Timer

PORT = 8000

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

def open_browser():
    webbrowser.open(f'http://localhost:{PORT}')

if __name__ == "__main__":
    os.chdir('/workspace')
    
    with socketserver.TCPServer(("", PORT), CORSRequestHandler) as httpd:
        print(f"🚀 Server running at http://localhost:{PORT}")
        print("📱 The page is responsive and optimized for 1280x720 resolution")
        print("🎨 Features include:")
        print("   - Beautiful gradient background")
        print("   - Responsive card layout")
        print("   - Hover effects and animations")
        print("   - Expandable content for long posts")
        print("   - Color-coded scores")
        print("   - Mobile-friendly design")
        print("\n🌐 Opening browser in 2 seconds...")
        
        # Open browser after a short delay
        Timer(2.0, open_browser).start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")