FROM ubuntu

WORKDIR /app
COPY . /app

RUN apt-get -y update
RUN apt-get -y install gcc make
RUN make

ENTRYPOINT [ "/app/build/hello-world" ]