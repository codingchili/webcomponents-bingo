FROM python:alpine

# build with `docker build .`
# run with `docker run -v /var/run/docker.sock:/var/run/docker.sock -d --name iipax-status -p 666:8080 <image>`

RUN apk update && apk add vim
RUN pip install aiohttp asyncio docker

RUN mkdir -p /opt/status

ADD index.html /opt/status
ADD dockerizer.py /opt/status
ADD README.md /opt/status

EXPOSE 8080/tcp

WORKDIR /opt/status

CMD ["python", "./dockerizer.py"]

