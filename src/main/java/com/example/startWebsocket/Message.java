package com.example.startWebsocket;

public class Message {

    private String name;
    private String content;
    private String room;

    public Message() {
    }

    public Message(String name, String content, String room) {
        this.name = name;
        this.content = content;
        this.room = room;
    }

    public String getName() {
        return name;
    }

    public String getContent() {
        return content;
    }

    public String getRoom() {
        return room;
    }
}
