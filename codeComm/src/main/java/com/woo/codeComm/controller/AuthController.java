package com.woo.codeComm.controller;


import com.woo.codeComm.dto.MemberDto;
import com.woo.codeComm.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final MemberService memberService;


    @PostMapping
    public ResponseEntity<String> signup(@RequestBody MemberDto memberDto){
        memberService.signup(memberDto);
        return ResponseEntity.ok("회원가입이 성공했습니다.");
    }

    


}
