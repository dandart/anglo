import SimpleHTTPServer
import SocketServer

PORT = 9090

class Handler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    pass

Handler.extensions_map['.mjs'] = 'text/javascript'
Handler.extensions_map['.json'] = 'text/javascript'

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()