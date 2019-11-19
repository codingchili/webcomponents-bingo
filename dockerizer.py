from aiohttp import web

async def index(request):
    return web.FileResponse('./index.html')

app = web.Application()
app.add_routes([web.get('/', index)])
web.run_app(app)
