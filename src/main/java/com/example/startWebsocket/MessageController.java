package com.example.startWebsocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class MessageController {

    @MessageMapping("/chatRoom/{room}")
    @SendTo("/topic/notifications/{room}")
    public Notification notification(Message message) throws Exception {
        Thread.sleep(500); // simulated delay
        return new Notification(HtmlUtils.htmlEscape(message.getName()),HtmlUtils.htmlEscape(message.getContent()),HtmlUtils.htmlEscape(message.getRoom()));
    }

}
