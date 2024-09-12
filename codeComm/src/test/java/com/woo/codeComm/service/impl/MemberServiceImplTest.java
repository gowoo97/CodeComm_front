package com.woo.codeComm.service.impl;

import com.woo.codeComm.dto.MemberDto;
import com.woo.codeComm.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@ActiveProfiles("test")
@TestPropertySource(locations = "classpath:application.properties")
class MemberServiceImplTest {

    @Autowired
    private MemberService memberService;


    void signUp(){
        MemberDto dto = MemberDto.builder()
                .email("test@test.com")
                .pw("test")
                .nickname("nick")
                .build();

        MemberDto saved = memberService.signup(dto);

        assertEquals(saved.getEmail(),dto.getEmail());
    }
}