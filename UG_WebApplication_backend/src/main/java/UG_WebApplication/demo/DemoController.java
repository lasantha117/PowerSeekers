package UG_WebApplication.demo;

import UG_WebApplication.entity.question;
import UG_WebApplication.services.questionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class DemoController {

    @GetMapping
    public ResponseEntity<String>sayHello(){
        return ResponseEntity.ok("Hello from secured endpoint");
    }





}
