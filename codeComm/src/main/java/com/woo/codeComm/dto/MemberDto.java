package com.woo.codeComm.dto;

import com.woo.codeComm.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class MemberDto {

    private Long id;

    private String email;

    private String pw;

    private String nickname;


    public Member toEntity(){
        return Member.builder().id(id)
                .email(email)
                .pw(pw)
                .nickname(nickname)
                .build();
    }
}
