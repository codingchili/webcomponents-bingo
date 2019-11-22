FROM python:alpine

# build with `docker build .`
# run with `docker run -d -p 2019:8080 <image>`

RUN apk update && apk add vim

RUN mkdir -p /opt/status

ADD components /opt/status
ADD style /opt/status
ADD data /opt/status
ADD index.html /opt/status
ADD dockerizer.py /opt/status
ADD README.md /opt/status

EXPOSE 8080/tcp

WORKDIR /opt/status

CMD ["python", "./dockerizer.py"]

