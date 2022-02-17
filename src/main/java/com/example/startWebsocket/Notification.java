package com.example.startWebsocket;

public class Notification {

    private String name;
    private String content;
    private String room;

    public Notification() {
    }

    public Notification(String name,String content,String room) {
        this.name = name;
        this.content = content;
        this.room = room;
    }

    public String getContent() {
        return content;
    }

    public String getRoom() {
        return room;
    }

    public String getName() {
        return name;
    }
}
