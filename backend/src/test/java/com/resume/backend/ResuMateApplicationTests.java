package com.resume.backend;

import com.resume.backend.service.ResumeService;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class ResuMateApplicationTests {

    @Autowired
    private ResumeService resumeService;

    @Test
    void contextLoads() throws IOException {
        resumeService.generateResumeResponse("I am Pratik Kashyap with 5 years of java Experience.");
    }
}
